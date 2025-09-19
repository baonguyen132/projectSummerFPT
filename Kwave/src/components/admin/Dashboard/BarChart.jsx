import React from 'react';
import styles from './BarChart.module.scss';

function BarChart({ data, title, subtitle }) {
    const maxValue = Math.max(...data.map(item => item.users));

    return (
        <div className={styles.barChart}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>

            <div className={styles.chartContainer}>
                <div className={styles.yAxis}>
                    <span>{maxValue}</span>
                    <span>{Math.floor(maxValue * 0.75)}</span>
                    <span>{Math.floor(maxValue * 0.5)}</span>
                    <span>{Math.floor(maxValue * 0.25)}</span>
                    <span>0</span>
                </div>

                <div className={styles.chartArea}>
                    <div className={styles.bars}>
                        {data.map((item, index) => (
                            <div key={index} className={styles.barWrapper}>
                                <div 
                                    className={styles.bar}
                                    style={{ 
                                        height: `${(item.users / maxValue) * 100}%`
                                    }}
                                >
                                    <div className={styles.barValue}>
                                        {item.users}
                                    </div>
                                </div>
                                <div className={styles.barLabel}>
                                    {item.month}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BarChart;