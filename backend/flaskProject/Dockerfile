FROM python:3.11-slim

# Đặt thư mục làm việc
WORKDIR /app

# Copy file requirements trước để tận dụng cache
COPY requirements.txt .

# Cài thư viện cần thiết
RUN pip install --no-cache-dir -r requirements.txt

# Copy toàn bộ source code vào container
COPY . .

# Expose cổng 5000 để bên ngoài truy cập
EXPOSE 5000

# Set environment variables
ENV FLASK_APP=app.py
ENV FLASK_ENV=development

# Dùng Python để chạy app trực tiếp
CMD ["python", "app.py"]