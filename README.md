# projectSummerFPT


Xây dựng cấu trúc thư mục ứng dụng React theo hướng Solid.

Sử dụng React Hooks (useState, useEffect, useContext, useRef, useReducer, custom hooks).

Quản lý state của ứng dụng một cách hiệu quả.

Tương tác với API backend (sử dụng fetch API hoặc Axios).

Thiết kế giao diện người dùng thân thiện (sử dụng CSS modules, Styled Components hoặc Tailwind CSS).

Xử lý form và validation.

Áp dụng các nguyên tắc Solid trong thiết kế frontend.

Hiểu rõ luồng dữ liệu giữa frontend và backend.

Cấu trúc Ứng dụng Frontend (React - Theo Nguyên tắc SOLID)
Để áp dụng các nguyên tắc SOLID, chúng ta sẽ tổ chức cấu trúc thư mục của ứng dụng React một cách có hệ thống, tách biệt rõ ràng các trách nhiệm.

src/
├── assets/                  # Ảnh, icon, font
├── components/              # Các UI components tái sử dụng (stateless/dumb components)
│   ├── common/              # Các components chung, ví dụ: Button, Input, Modal, Table
│   │   ├── Button/
│   │   │   
│   │   ├── Input/
│   │   └── ...
├── contexts/                # Quản lý global state (S - Single Responsibility, I - Interface Segregation)
│   ├── ProductContext.jsx   # Context cho dữ liệu sản phẩm
│   └── CategoryContext.jsx  # Context cho dữ liệu danh mục
├── hooks/                   # Các custom hooks (R - Reusable, Open/Closed Principle - O, Single Responsibility - S)
├── layout/
├── pages/
├── services/
│   ├── helpers.js
│   ├── constants.js
│   └── validation.js
├── App.jsx                  # Component gốc của ứng dụng
├── index.css                # CSS toàn cục
└── main.jsx                 # Entry point của ứng dụng (React 18)
Giải thích về cách áp dụng SOLID trong Frontend:

Single Responsibility Principle (SRP):

Mỗi component, hook, service chỉ có một lý do duy nhất để thay đổi. Ví dụ: ProductCard chỉ hiển thị sản phẩm, productService chỉ lo việc tương tác API sản phẩm.

Thư mục components, hooks, services là ví dụ rõ ràng nhất.

Open/Closed Principle (OCP):

Các module có thể mở rộng nhưng đóng để chỉnh sửa. Ví dụ: Các custom hooks (useProducts, useForm) có thể được sử dụng lại ở nhiều nơi mà không cần thay đổi code bên trong hook đó. Khi có yêu cầu mới (ví dụ: thêm chức năng lọc), ta có thể mở rộng hook hoặc tạo hook mới, không sửa hook cũ.

Các component chung trong common folder cũng là ví dụ tốt.

Liskov Substitution Principle (LSP):

Trong React, LSP thường được áp dụng ngầm qua việc sử dụng props và composition. Một component có thể được thay thế bằng một component khác mà không làm phá vỡ ứng dụng nếu chúng tuân thủ cùng một "giao diện" props.

Interface Segregation Principle (ISP):

Khách hàng không nên bị buộc phụ thuộc vào các giao diện mà họ không sử dụng. Trong React, điều này có thể được thể hiện qua việc chia nhỏ các Context API hoặc tạo các custom hooks nhỏ hơn thay vì một hook lớn chứa quá nhiều logic không liên quan. Ví dụ, ProductContext và CategoryContext riêng biệt.

Dependency Inversion Principle (DIP):

Các module cấp cao không nên phụ thuộc vào các module cấp thấp. Cả hai nên phụ thuộc vào các abstraction. Các abstraction không nên phụ thuộc vào các chi tiết. Các chi tiết nên phụ thuộc vào các abstraction.

Trong ví dụ này, pages (module cấp cao) sẽ gọi các hàm từ services (abstraction) thay vì trực tiếp gọi fetch hay axios (chi tiết cấp thấp). Các services lại phụ thuộc vào một api.js (abstraction) chung.