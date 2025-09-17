import React from "react";
import styles from "./ItemTest.module.scss";

function ItemTest({ item, handleViewDetails, handleEdit, handleDelete }) {
  const handleEditClick = (e) => {
    e.stopPropagation(); // Prevent triggering handleViewDetails
    handleEdit(item);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Prevent triggering handleViewDetails
    handleDelete(item.id);
  };

  return (
    <div className={styles.itemTest} onClick={() => handleViewDetails(item.id)}>
      <div className={styles.testBadge}>
        <div
          className={styles.testImage}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          {!item.image && (
            <div className={styles.placeholderImage}>
              <i className="bx bx-file-blank"></i>
            </div>
          )}
        </div>
        <div className={styles.testStatus}>
          <i className="bx bx-check-circle"></i>
          <span>Active</span>
        </div>
      </div>

      <div className={styles.testInformation}>
        <div className={styles.testHeader}>
          <h3 className={styles.testName}>{item.name}</h3>
          <div className={styles.testId}>#{item.id}</div>
        </div>

        <div className={styles.testDescription}>
          <p>{item.description}</p>
        </div>

        <div className={styles.testDetails}>
          <div className={styles.detailItem}>
            <i className="bx bx-help-circle"></i>
            <span className={styles.detailLabel}>Câu hỏi:</span>
            <span className={styles.detailValue}>{item.count}</span>
          </div>
          <div className={styles.detailItem}>
            <i className="bx bx-time"></i>
            <span className={styles.detailLabel}>Thời gian:</span>
            <span className={styles.detailValue}>{item.time} phút</span>
          </div>
          <div className={styles.detailItem}>
            <i className="bx bx-calendar"></i>
            <span className={styles.detailLabel}>Tạo lúc:</span>
            <span className={styles.detailValue}>
              {new Date().toLocaleDateString('vi-VN')}
            </span>
          </div>
        </div>

        <div className={styles.testActions}>
          <button 
            className={styles.viewBtn}
            onClick={(e) => {
              e.stopPropagation();
              handleViewDetails(item.id);
            }}
          >
            <i className="bx bx-show"></i>
            <span>Xem chi tiết</span>
          </button>
          <button 
            className={styles.editBtn}
            onClick={handleEditClick}
          >
            <i className="bx bx-edit"></i>
            <span>Chỉnh sửa</span>
          </button>
          <button 
            className={styles.deleteBtn}
            onClick={handleDeleteClick}
          >
            <i className="bx bx-trash"></i>
            <span>Xóa</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemTest;
