from flask import Blueprint, request, jsonify, current_app

from auth import token_required
from connectDatabase import importData, exportData, importDataGetId
import jwt
import datetime

question_bp = Blueprint('question', __name__)

@question_bp.route('/questions/<int:idTest>', methods=['GET'])
@token_required
def questions(current_user , idTest):
    """
    Lấy tất cả câu hỏi theo idTest
    ---
    tags:
      - Questions
    security:
      - Bearer: []
    parameters:
      - name: idTest
        in: path
        required: true
        type: integer
        description: "ID của bài kiểm tra"
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
    # Lấy tất cả dữ liệu người dùng
    questions = exportData(
        sql="SELECT * FROM `question` WHERE `id_test` = %s ",
        val=(idTest,),
        fetch_all=True
    )

    return jsonify({
        "status": "success",
        "message": "Lấy thông tin thành công",
        "data": questions
    }), 200
@question_bp.route('/questions', methods=['POST'])
@token_required
def create_question(current_user):
    """
    Tạo mới một câu hỏi
    ---
    tags:
      - Questions
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
            - id_test
            - question
            - optionA
            - optionB
            - optionC
            - optionD
            - correctAnswer
          properties:
            id_test:
              type: integer
              example: 1
            question:
              type: string
              example: "React là gì?"
            optionA:
              type: string
              example: "Framework"
            optionB:
              type: string
              example: "Library"
            optionC:
              type: string
              example: "Ngôn ngữ"
            optionD:
              type: string
              example: "Database"
            correctAnswer:
              type: string
              example: "B"
    responses:
      201:
        description: Tạo thành công
    """
    # ✅ Chỉ cho phép admin/teacher
    if current_user.get("role") == 6:
        return jsonify({"status": "error", "message": "Bạn không có quyền"}), 403

    data = request.get_json() or {}


    # Lấy dữ liệu từ body
    id_test = data.get("id_test")
    question = data.get("question")
    point = data.get("point")  # default 1 điểm
    optionA = data.get("optionA")
    optionB = data.get("optionB")
    optionC = data.get("optionC")
    optionD = data.get("optionD")
    correctAnswer = data.get("correctAnswer")
    solution = data.get("solution")
    qtype = data.get("type")  # default multiple choice


    now = datetime.datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')

    try:
        # ✅ Thực hiện thêm câu hỏi vào DB
        new_id = importDataGetId(
            sql="""
                INSERT INTO `question`
                (`content`, `type`, `point`, `A`, `B`, `C`, `D`, `correct`, `solution`, `created_at`, `updated_at`, `id_test`)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """,
            val=(question, qtype, point, optionA, optionB, optionC, optionD,
                 correctAnswer, solution, now, now, id_test)
        )
    except Exception as e:
        return jsonify({"status": "error", "message": f"Lỗi khi thêm câu hỏi: {str(e)}"}), 500

    return jsonify({
        "status": "success",
        "message": "Tạo câu hỏi thành công",
        "data": {
            "id": new_id,
            "id_test": id_test,
            "question": question,
            "point": point,
            "solution": solution,
            "optionA": optionA,
            "optionB": optionB,
            "optionC": optionC,
            "optionD": optionD,
            "correctAnswer": correctAnswer,
            "type": qtype,
            "created_at": now,
            "updated_at": now
        }
    }), 201


@question_bp.route('/questions', methods=['DELETE'])
@token_required
def delete_question(current_user):
    """
    Xóa một câu hỏi
    ---
    tags:
      - Questions
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
        schema:
          type: object
          properties:
            status:
              type: string
              example: "success"
            message:
              type: string
              example: "Đã xóa câu hỏi id=1"
      403:
        description: Không có quyền
        schema:
          type: object
          properties:
            status:
              type: string
              example: "error"
            message:
              type: string
              example: "Bạn không có quyền xóa câu hỏi"
      404:
        description: Không tìm thấy câu hỏi
        schema:
          type: object
          properties:
            status:
              type: string
              example: "error"
            message:
              type: string
              example: "Không tìm thấy câu hỏi"
    """
    # ✅ Chỉ admin/teacher mới được xóa câu hỏi
    if current_user.get("role") == 6:
        return jsonify({
            "status": "error",
            "message": "Bạn không có quyền xóa câu hỏi"
        }), 403

    data = request.get_json() or {}
    question_id = data.get("id")

    if not question_id:
        return jsonify({
            "status": "error",
            "message": "Thiếu id câu hỏi cần xóa"
        }), 400

    # Kiểm tra câu hỏi có tồn tại không
    question = exportData(
        sql="SELECT id FROM `question` WHERE id = %s",
        val=(question_id,),
        fetch_all=False
    )
    if not question:
        return jsonify({
            "status": "error",
            "message": f"Không tìm thấy câu hỏi id={question_id}"
        }), 404

    # Xóa câu hỏi
    importData(
        sql="DELETE FROM `question` WHERE id = %s",
        val=(question_id,)
    )

    return jsonify({
        "status": "success",
        "message": f"Đã xóa câu hỏi id={question_id}"
    }), 200
