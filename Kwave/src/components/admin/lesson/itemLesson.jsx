import React from "react";
import styles from "./itemLesson.module.scss";

function ItemLesson({ item, handleViewDetails }) {
    // Format ngày tháng
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };

    // Xử lý click events
    const handleEditClick = (e) => {
        e.stopPropagation(); // Prevent triggering parent onClick
    };

    const handleDeleteClick = (e) => {
        e.stopPropagation(); // Prevent triggering parent onClick
    };

    return (
        <div className={styles.itemLesson} onClick={() => handleViewDetails && handleViewDetails(item.id)}>
            <div className={styles.lessonBadge}>
                <div className={styles.lessonIcon}>
                    <i className="bx bx-book-content"></i>
                </div>
                <div className={styles.lessonStatus}>
                    <i className="bx bx-check-circle"></i>
                    <span>Active</span>
                </div>
            </div>

            <div className={styles.lessonInformation}>
                <div className={styles.lessonHeader}>
                    <h3 className={styles.lessonName}>{item.name}</h3>
                    <div className={styles.lessonId}>
                        <span>ID: {item.id}</span>
                    </div>
                </div>

                <div className={styles.lessonDescription}>
                    <p>{item.description}</p>
                </div>

                <div className={styles.lessonDetails}>
                    <div className={styles.detailItem}>
                        <i className="bx bx-calendar-plus"></i>
                        <span className={styles.detailLabel}>Created:</span>
                        <span className={styles.detailValue}>{formatDate(item.createdAt)}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <i className="bx bx-calendar-plus"></i>
                        <span className={styles.detailLabel}>Updated:</span>
                        <span className={styles.detailValue}>{formatDate(item.updatedAt)}</span>
                    </div>
                </div>

                <div className={styles.lessonActions}>
                    <button className={styles.editBtn} onClick={handleEditClick}>
                        <i className="bx bx-edit"></i>
                        <span>Edit</span>
                    </button>
                    <button className={styles.deleteBtn} onClick={handleDeleteClick}>
                        <i className="bx bx-trash"></i>
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemLesson;