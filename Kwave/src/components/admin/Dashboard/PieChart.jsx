import styles from './PieChart.module.scss';

function PieChart({ data, title, subtitle }) {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let cumulativePercentage = 0;

    const createPath = (percentage, cumulativePercentage) => {
        const startAngle = (cumulativePercentage / 100) * 360;
        const endAngle = ((cumulativePercentage + percentage) / 100) * 360;
        
        const startAngleRad = (startAngle - 90) * (Math.PI / 180);
        const endAngleRad = (endAngle - 90) * (Math.PI / 180);
        
        const x1 = 50 + 40 * Math.cos(startAngleRad);
        const y1 = 50 + 40 * Math.sin(startAngleRad);
        const x2 = 50 + 40 * Math.cos(endAngleRad);
        const y2 = 50 + 40 * Math.sin(endAngleRad);
        
        const largeArcFlag = percentage > 50 ? 1 : 0;
        
        return `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
    };

    return (
        <div className={styles.pieChart}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>

            <div className={styles.chartContainer}>
                <div className={styles.pieContainer}>
                    <svg width="200" height="200" viewBox="0 0 100 100">
                        {data.map((item, index) => {
                            const percentage = (item.value / total) * 100;
                            const path = createPath(percentage, cumulativePercentage);
                            const currentCumulative = cumulativePercentage;
                            cumulativePercentage += percentage;
                            
                            return (
                                <path
                                    key={index}
                                    d={path}
                                    fill={item.color}
                                    className={styles.pieSlice}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                />
                            );
                        })}
                    </svg>

                    <div className={styles.centerLabel}>
                        <div className={styles.totalLabel}>Total</div>
                        <div className={styles.totalValue}>{total}%</div>
                    </div>
                </div>

                <div className={styles.legend}>
                    {data.map((item, index) => (
                        <div key={index} className={styles.legendItem}>
                            <span 
                                className={styles.legendDot} 
                                style={{ background: item.color }}
                            ></span>
                            <span className={styles.legendLabel}>{item.label}</span>
                            <span className={styles.legendValue}>{item.value}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PieChart;