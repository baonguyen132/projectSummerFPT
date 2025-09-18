from flask import Blueprint, request, jsonify, current_app

from auth import token_required
from connectDatabase import importData, exportData
import jwt
import datetime

user_bp = Blueprint('user', __name__)


@user_bp.route('/loginAdmin', methods=['POST'])
def loginAdmin():
    """
    Admin Đăng nhập
    ---
    tags:
      - LoginAdmin
    parameters:
      - name: user
        in: body
        required: true
        schema:
          type: object
          required:
            - email
            - password
          properties:
            email:
              type: string
              example: "admin@example.com"
            password:
              type: string
              example: "yourpassword"
    responses:
      200:
        description: Đăng nhập thành công
        schema:
          type: object
          properties:
            message:
              type: string
              example: "Login successful"
            access_token:
              type: string
              example: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
      401:
        description: Đăng nhập thất bại
        schema:
          type: object
          properties:
            message:
              type: string
              example: "Invalid credentials"
    """

    data = request.get_json()
    user = exportData(
        sql="SELECT * FROM users WHERE email = %s AND password = %s AND role = %s",
        val=(data.get('email'), data.get('password'), 1)
    )

    if user:
        data_list = list(user)
        # Tạo access token
        access_token = jwt.encode({
            'user_id': data_list[0],
            'role': data_list[4],
            'email': data_list[2],
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
        }, current_app.config['SECRET_KEY'], algorithm='HS256')

        return jsonify({
            "message": "Login successful",
            "access_token": access_token
        }), 200
    else:
        return jsonify({
            "message": "Invalid credentials"
        }), 401
@user_bp.route('/myInformation', methods=['GET'])
@token_required
def myInformation(data):
    """
    MyInformation
    ---
    tags:
      - MyInformation
    security:
      - Bearer: []
    responses:
      200:
        description: Lấy thông tin thành công
        schema:
          type: object
          properties:
            message:
              type: string
              example: "successful"
            user:
              type: object
              properties:
                id:
                  type: integer
                  example: 1
                name:
                  type: string
                  example: "Admin"
                email:
                  type: string
                  example: "admin@example.com"
      401:
        description: Lỗi lấy thông tin
        schema:
          type: object
          properties:
            message:
              type: string
              example: "unSuccessful"
    """
    user = exportData(
        sql="SELECT * FROM users WHERE id = %s",
        val=(data["user_id"], )
    )
    # Nếu bạn chỉ muốn trả lại thông tin từ token (không cần query DB nữa)
    return jsonify({
        "message": "Successful",
        "user": user,
    }), 200

@user_bp.route('/users', methods=['GET'])
@token_required
def users(current_user):
    """
    Lấy tất cả dữ liệu của người dùng (Không phải student)
    ---
    tags:
      - User
    security:
      - Bearer: []
    responses:
      200:
        description: Lấy thông tin thành công
        schema:
          type: object
          properties:
            status:
              type: string
              example: "success"
            message:
              type: string
              example: "Lấy thông tin thành công"
            data:
              type: array
              items:
                type: object
      403:
        description: Người dùng không có quyền
        schema:
          type: object
          properties:
            status:
              type: string
              example: "error"
            message:
              type: string
              example: "Bạn không có quyền"
      401:
        description: Token không hợp lệ / chưa đăng nhập
        schema:
          type: object
          properties:
            status:
              type: string
              example: "error"
            message:
              type: string
              example: "Token is invalid"
    """
    # Chỉ cho phép admin hoặc role != 6 là student
    if current_user.get("role") == 6:
        return jsonify({
            "status": "error",
            "message": "Bạn không có quyền"
        }), 403

    # Lấy tất cả dữ liệu người dùng
    users = exportData(
        sql="SELECT id, name, email, role, cid, dob, gender, created_at, updated_at FROM users",
        val=(),
        fetch_all=True
    )

    return jsonify({
        "status": "success",
        "message": "Lấy thông tin thành công",
        "data": users
    }), 200


@user_bp.route('/user', methods=['POST'])
@token_required
def create_user(current_user):
    """
    Tạo người dùng mới (chỉ admin được phép)
    ---
    tags:
      - User
    security:
      - Bearer: []
    consumes:
      - application/json
    parameters:
      - in: body
        name: body
        required: true
        schema:
          type: object
          required:
            - name
            - email
            - password
            - cid
            - dob
            - gender
          properties:
            name:
              type: string
              example: "Nguyen Van A"
            email:
              type: string
              example: "user@example.com"
            password:
              type: string
              example: "123456"
            role:
              type: integer
              example: 6
            cid:
              type: string
              example: "0123456789"
            dob:
              type: string
              example: "2000-01-01"
            gender:
              type: string
              example: "Male"
    responses:
      201:
        description: Tạo user thành công
      400:
        description: Thiếu dữ liệu
      403:
        description: Không đủ quyền
    """
    # Kiểm tra quyền admin
    if current_user["role"] != 1:
        return jsonify({
            "status": "error",
            "message": "Bạn không có quyền tạo user"
        }), 403

    # Lấy dữ liệu từ request
    payload = request.get_json() or {}

    # Kiểm tra dữ liệu bắt buộc
    required_fields = ['name', 'email', 'password', 'cid', 'dob', 'gender']
    missing = [field for field in required_fields if not payload.get(field)]
    if missing:
        return jsonify({
            "status": "error",
            "message": f"Thiếu dữ liệu: {', '.join(missing)}"
        }), 400

    # Thời gian tạo & cập nhật
    now  = datetime.datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')

    # Thực hiện thêm dữ liệu
    importData(
        sql="""
            INSERT INTO `users`
            (`name`, `email`, `password`, `role`, `cid`, `dob`, `gender`, `token`, `created_at`, `updated_at`)
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
        """,
        val=(
            payload.get('name'),
            payload.get('email'),
            payload.get('password'),
            payload.get('role', 6),  # mặc định role 6 (user)
            payload.get('cid'),
            payload.get('dob'),
            payload.get('gender'),
            payload.get('token', None),
            now,
            now
        )
    )

    return jsonify({
        "status": "success",
        "message": "Đăng ký người dùng thành công",
        "user": {
            "name": payload.get('name'),
            "email": payload.get('email'),
            "role": payload.get('role', 6),
            "cid": payload.get('cid'),
            "dob": payload.get('dob'),
            "gender": payload.get('gender')
        }
    }), 201
