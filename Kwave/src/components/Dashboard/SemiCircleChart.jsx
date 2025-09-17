import styles from './SemiCircleChart.module.scss';

function SemiCircleChart({ percentage = 95, title, subtitle }) {
    const circumference = Math.PI * 100; // Nửa đường tròn
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

    return (
        <div className={styles.semiCircleChart}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>

            <div className={styles.chartContainer}>
                <div className={styles.svgContainer}>
                    <svg width="200" height="120" viewBox="0 0 200 120">
                        {/* Background arc - Trắng */}
                        <path
                            d="M 20 100 A 80 80 0 0 1 180 100"
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.3)"
                            strokeWidth="12"
                            strokeLinecap="round"
                        />
                        {/* Progress arc - Blue đậm */}
                        <path
                            d="M 20 100 A 80 80 0 0 1 180 100"
                            fill="none"
                            stroke="#0832b2"
                            strokeWidth="12"
                            strokeLinecap="round"
                            strokeDasharray={strokeDasharray}
                            className={styles.progressPath}
                        />
                    </svg>

                    <div className={styles.centerContent}>
                        <div className={styles.smileyIcon}>
                            <i className="bx bx-smile"></i>
                        </div>
                    </div>
                </div>

                <div className={styles.percentageDisplay}>
                    <div className={styles.percentage}>{percentage}%</div>
                    <div className={styles.baseText}>Based on likes</div>
                </div>

                <div className={styles.legend}>
                    <div className={styles.legendItem}>
                        <span className={styles.legendDot} style={{background: '#0832b2'}}></span>
                        <span>0%</span>
                    </div>
                    <div className={styles.legendItem}>
                        <span className={styles.legendDot} style={{background: 'rgba(255, 255, 255, 0.3)'}}></span>
                        <span>100%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SemiCircleChart;