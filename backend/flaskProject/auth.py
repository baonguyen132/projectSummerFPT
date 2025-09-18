from functools import wraps

import jwt
from flask import jsonify, current_app, request

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):

        token = request.headers.get("Authorization")
        if token is None:
            return jsonify({"messages": "Thiếu token"}), 401
        try:
            data = jwt.decode(
                token.replace("Bearer ", ""),
                current_app.config["SECRET_KEY"],
                algorithms=["HS256"],
            )
        except Exception:
            return jsonify({"messages": "Token is invalid"}), 401
        return f(data, *args, **kwargs)

    return decorated