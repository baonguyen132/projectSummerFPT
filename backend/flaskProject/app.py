import os
from flask import Flask, jsonify
from flasgger import Swagger
from flask_cors import CORS

from auth import token_required
from part_question_handle import question_bp
from part_test_handle import test_bp
from part_user_handle import user_bp

app = Flask(__name__)
# Ưu tiên lấy từ biến môi trường nếu có, fallback về key mặc định
app.config['SECRET_KEY'] = os.getenv(
    "SECRET_KEY", "b7d1a7d30ccf344c1b0b91143a8d1b0e3c80799a64e23865d34399b8f8e8c915"
)

CORS(app, resources={r"/*": {"origins": "*"}})

# Swagger cấu hình
swagger_config = {
    "headers": [],
    "specs": [
        {
            "endpoint": "apispec",
            "route": "/apispec.json",
            "rule_filter": lambda rule: True,
            "model_filter": lambda tag: True,
        }
    ],
    "static_url_path": "/flasgger_static",
    "swagger_ui": True,
    "specs_route": "/swagger/"
}

swagger_template = {
    "swagger": "2.0",
    "info": {
        "title": "Flask API Documentation",
        "description": "API documentation for Flask project",
        "contact": {
            "responsibleOrganization": "FPT Summer Project",
            "responsibleDeveloper": "Development Team",
            "email": "dev@fpt.edu.vn",
            "url": "http://localhost:5000",
        },
        "termsOfService": "http://localhost:5000/terms",
        "version": "1.0.0"
    },
    "securityDefinitions": {
        "Bearer": {
            "type": "apiKey",
            "name": "Authorization",
            "in": "header",
            "description": "Nhập token theo dạng: Bearer <your-token>"
        }
    },
    "host": "localhost:5000",
    "basePath": "/",
    "schemes": ["http", "https"],
    "operationId": "getMyData"
}

swagger = Swagger(app, config=swagger_config, template=swagger_template)


# Middleware kiểm tra token (chỉ cho API private)




@app.route("/", methods=["GET"])
@token_required
def home(data):
    """
    Trang chủ API (Yêu cầu token)
    ---
    security:
      - Bearer: []
    tags:
      - Home
    responses:
      200:
        description: Thông tin API
        schema:
          type: object
          properties:
            message:
              type: string
              example: "Flask API is running!"
            status:
              type: string
              example: "success"
    """
    return jsonify({
        "message": "Flask API is running!",
        "status": "success",
        "data": data
    })


# Đăng ký Blueprint người dùng
app.register_blueprint(user_bp)
app.register_blueprint(test_bp)
app.register_blueprint(question_bp)
if __name__ == "__main__":

    app.run(host="0.0.0.0", port=5000, debug=True)
