from flask import Blueprint, request, jsonify, current_app

from auth import token_required
from connectDatabase import importData, exportData, importDataGetId
import jwt
import datetime

test_bp = Blueprint('test', __name__)

@test_bp.route('/tests', methods=['GET'])
@token_required
def get_all_tests(current_user):
    """
    Lấy tất cả dữ liệu bài kiểm tra
    ---
    tags:
      - Tests
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
                properties:
                  id:
                    type: integer
                    example: 1
                  name:
                    type: string
                    example: "Bài kiểm tra số 1"
                  description:
                    type: string
                    example: "Đây là bài kiểm tra đầu tiên"
                  created_at:
                    type: string
                    example: "2025-09-17 10:00:00"
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
        description: Token không hợp lệ hoặc chưa đăng nhập
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

    # Lấy tất cả dữ liệu bài kiểm tra
    tests = exportData(
        sql="SELECT * FROM `tests`",
        val=(),
        fetch_all=True
    )

    return jsonify({
        "status": "success",
        "message": "Lấy thông tin thành công",
        "data": tests
    }), 200

@test_bp.route('/tests', methods=['POST'])
@token_required
def create_test(current_user):
    """
    Tạo mới một bài kiểm tra
    ---
    tags:
      - Tests
    security:
      - Bearer: []
    consumes:
      - application/json
    parameters:
      - name: body
        in: body
        required: true
        schema:
          type: object
          required:
            - name
            - time
          properties:
            name:
              type: string
              example: "Bài kiểm tra số 1"
            time:
              type: integer
              example: 60
            description:
              type: string
              example: "Đây là bài kiểm tra đầu tiên"
            image:
              type: string
              example: "https://example.com/test1.png"
    responses:
      201:
        description: Tạo mới thành công
    """
    # ✅ Chỉ admin/teacher mới được tạo bài kiểm tra
    if current_user.get("role") == 6:
        return jsonify({
            "status": "error",
            "message": "Bạn không có quyền"
        }), 403

    data = request.get_json() or {}
    name = data.get("name")
    time = data.get("time")
    description = data.get("description")
    image = data.get("image")

    if not name or not time:
        return jsonify({
            "status": "error",
            "message": "Thiếu dữ liệu: name hoặc time"
        }), 400

    now  = datetime.datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')

    new_id = importDataGetId(
        sql="""
            INSERT INTO `tests`(`name`, `time`, `description`, `image`, `created_at`, `updated_at`)
            VALUES (%s, %s, %s, %s, %s, %s)
        """,
        val=(name, time, description, image, now, now),
    )

    return jsonify({
        "status": "success",
        "message": "Tạo bài kiểm tra thành công",
        "data": {
            "id": new_id,
            "name": name,
            "time": time,
            "description": description,
            "image": image,
            "created_at": now,
            "updated_at": now
        }
    }), 201



@test_bp.route('/tests', methods=['DELETE'])
@token_required
def delete_test(current_user):
    """
    Xóa một bài kiểm tra
    ---
    tags:
      - Tests
    security:
      - Bearer: []
    consumes:
      - application/json
    parameters:
      - name: body
        in: body
        required: true
        schema:
          type: object
          required:
            - id
          properties:
            id:
              type: integer
              example: 1
    responses:
      200:
        description: Xóa thành công
      403:
        description: Không có quyền
      404:
        description: Không tìm thấy bài kiểm tra
    """
    # ✅ Chỉ admin/teacher mới được xóa bài kiểm tra
    if current_user.get("role") == 6:
        return jsonify({
            "status": "error",
            "message": "Bạn không có quyền xóa bài kiểm tra"
        }), 403

    data = request.get_json() or {}
    test_id = data.get("id")



    # Xóa bài kiểm tra
    importData(
        sql="DELETE FROM `tests` WHERE `id` = %s",
        val=(test_id,)
    )

    return jsonify({
        "status": "success",
        "message": f"Đã xóa bài kiểm tra id={test_id}"
    }), 200
