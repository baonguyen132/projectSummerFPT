import styles from './itemStatistical.module.scss';

function ItemStatistical({ 
    title = "Total Revenue", 
    value = "$45,250", 
    icon = "bx bx-dollar-circle"
}) {
    return ( 
        <div className={styles.itemStatistical}>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <h2 className={styles.value}>{value}</h2>
            </div>
            
            <div className={styles.iconWrapper}>
                <i className={icon}></i>
            </div>
        </div>
    );
}

export default ItemStatistical;