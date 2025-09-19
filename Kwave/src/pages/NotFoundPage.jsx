import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full text-center">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Page not found"
          className="w-64 mx-auto mb-8"
        />
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Xin lỗi, chúng tôi không tìm thấy trang bạn đang tìm kiếm.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-white border border-gray-400 text-gray-700 rounded hover:bg-gray-200 transition"
          >
            Quay lại
          </button>
          <a
            href="/customer"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Trang chủ
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
