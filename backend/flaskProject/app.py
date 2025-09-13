from flask import Flask, jsonify, request
from flasgger import Swagger, swag_from
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Cấu hình Swagger UI
swagger_config = {
    "headers": [],
    "specs": [
        {
            "endpoint": 'apispec',
            "route": '/apispec.json',
            "rule_filter": lambda rule: True,
            "model_filter": lambda tag: True,
        }
    ],
    "static_url_path": "/flasgger_static",
    "swagger_ui": True,
    "specs_route": "/api/"
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
    "host": "localhost:5000",
    "basePath": "/",
    "schemes": [
        "http",
        "https"
    ],
    "operationId": "getmyData"
}

swagger = Swagger(app, config=swagger_config, template=swagger_template)

@app.route("/")
def home():
    """
    Trang chủ API
    ---
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
            swagger_ui:
              type: string
              example: "/swagger/"
            status:
              type: string
              example: "success"
    """
    return jsonify({
        "message": "Flask API is running!",
        "swagger_ui": "/swagger/",
        "status": "success"
    })

@app.route("/ping")
def ping():
    """
    Kiểm tra API đang hoạt động
    ---
    tags:
      - Health Check
    responses:
      200:
        description: Trả về thông điệp pong
        schema:
          type: object
          properties:
            message:
              type: string
              example: "pong"
            status:
              type: string
              example: "healthy"
    """
    return jsonify({"message": "pong", "status": "healthy"})

@app.route("/health")
def health():
    """
    Kiểm tra trạng thái hệ thống
    ---
    tags:
      - Health Check
    responses:
      200:
        description: Trạng thái hệ thống
        schema:
          type: object
          properties:
            status:
              type: string
              example: "healthy"
            service:
              type: string
              example: "Flask API"
            environment:
              type: string
              example: "development"
    """
    return jsonify({
        "status": "healthy",
        "service": "Flask API",
        "environment": "development"
    })

@app.route("/api/users", methods=['GET'])
def get_users():
    """
    Lấy danh sách người dùng
    ---
    tags:
      - Users
    responses:
      200:
        description: Danh sách người dùng
        schema:
          type: object
          properties:
            users:
              type: array
              items:
                type: object
                properties:
                  id:
                    type: integer
                    example: 1
                  name:
                    type: string
                    example: "John Doe"
                  email:
                    type: string
                    example: "john@example.com"
            total:
              type: integer
              example: 3
    """
    users = [
        {"id": 1, "name": "John Doe", "email": "john@example.com"},
        {"id": 2, "name": "Jane Smith", "email": "jane@example.com"},
        {"id": 3, "name": "Bob Johnson", "email": "bob@example.com"}
    ]
    return jsonify({"users": users, "total": len(users)})

@app.route("/api/users", methods=['POST'])
def create_user():
    """
    Tạo người dùng mới
    ---
    tags:
      - Users
    parameters:
      - name: user
        in: body
        required: true
        schema:
          type: object
          required:
            - name
            - email
          properties:
            name:
              type: string
              example: "New User"
            email:
              type: string
              example: "newuser@example.com"
    responses:
      201:
        description: Người dùng được tạo thành công
        schema:
          type: object
          properties:
            message:
              type: string
              example: "User created successfully"
            user:
              type: object
              properties:
                id:
                  type: integer
                  example: 4
                name:
                  type: string
                  example: "New User"
                email:
                  type: string
                  example: "newuser@example.com"
    """
    data = request.get_json()
    new_user = {
        "id": 4,
        "name": data.get("name", "New User"),
        "email": data.get("email", "user@example.com")
    }
    return jsonify({"message": "User created successfully", "user": new_user}), 201

@app.route("/api/users/<int:user_id>", methods=['GET'])
def get_user(user_id):
    """
    Lấy thông tin người dùng theo ID
    ---
    tags:
      - Users
    parameters:
      - name: user_id
        in: path
        type: integer
        required: true
        description: ID của người dùng
        example: 1
    responses:
      200:
        description: Thông tin người dùng
        schema:
          type: object
          properties:
            user:
              type: object
              properties:
                id:
                  type: integer
                  example: 1
                name:
                  type: string
                  example: "User 1"
                email:
                  type: string
                  example: "user1@example.com"
    """
    user = {
        "id": user_id, 
        "name": f"User {user_id}", 
        "email": f"user{user_id}@example.com"
    }
    return jsonify({"user": user})

@app.route("/api/test", methods=['POST'])
def test_endpoint():
    """
    Endpoint test với dữ liệu tùy chỉnh
    ---
    tags:
      - Test
    parameters:
      - name: test_data
        in: body
        required: true
        schema:
          type: object
          properties:
            message:
              type: string
              example: "Hello World"
            data:
              type: object
              example: {"key": "value"}
    responses:
      200:
        description: Kết quả test
        schema:
          type: object
          properties:
            message:
              type: string
              example: "Test successful"
            received_data:
              type: object
            timestamp:
              type: string
              example: "2024-01-01 12:00:00"
    """
    data = request.get_json()
    return jsonify({
        "message": "Test successful",
        "received_data": data,
        "timestamp": "2024-01-01 12:00:00"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)