import React from 'react';
import styles from './LineChart.module.scss';

function LineChart({ data, title, subtitle }) {
    const maxValue = Math.max(...data.map(item => item.score));
    const minValue = Math.min(...data.map(item => item.score));
    const range = maxValue - minValue;
    const padding = range * 0.1;
    const chartMax = maxValue + padding;
    const chartMin = Math.max(0, minValue - padding);
    const chartRange = chartMax - chartMin;

    // Tạo points cho đường line
    const createPoints = () => {
        return data.map((item, index) => {
            const x = (index / (data.length - 1)) * 300; // SVG width
            const y = 150 - ((item.score - chartMin) / chartRange) * 150; // SVG height
            return { x, y, score: item.score, month: item.month };
        });
    };

    const points = createPoints();
    
    // Tạo path string
    const pathData = points.map((point, index) => 
        `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
    ).join(' ');

    // Tạo area path
    const areaPath = `${pathData} L ${points[points.length - 1].x} 150 L ${points[0].x} 150 Z`;

    return (
        <div className={styles.lineChart}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>

            <div className={styles.chartContainer}>
                <div className={styles.yAxis}>
                    <span>{chartMax.toFixed(1)}</span>
                    <span>{(chartMax * 0.75 + chartMin * 0.25).toFixed(1)}</span>
                    <span>{((chartMax + chartMin) / 2).toFixed(1)}</span>
                    <span>{(chartMax * 0.25 + chartMin * 0.75).toFixed(1)}</span>
                    <span>{chartMin.toFixed(1)}</span>
                </div>

                <div className={styles.chartArea}>
                    <svg width="300" height="150" viewBox="0 0 300 150">
                        {/* Grid lines */}
                        <defs>
                            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
                            </pattern>
                            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#0C6FFF" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#0C6FFF" stopOpacity="0.05" />
                            </linearGradient>
                        </defs>
                        
                        <rect width="100%" height="100%" fill="url(#grid)" />
                        
                        {/* Area under line */}
                        <path
                            d={areaPath}
                            fill="url(#areaGradient)"
                        />
                        
                        {/* Main line */}
                        <path
                            d={pathData}
                            fill="none"
                            stroke="#0C6FFF"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        
                        {/* Data points */}
                        {points.map((point, index) => (
                            <g key={index}>
                                <circle
                                    cx={point.x}
                                    cy={point.y}
                                    r="4"
                                    fill="#0C6FFF"
                                    stroke="white"
                                    strokeWidth="2"
                                    className={styles.dataPoint}
                                />
                                {/* Score labels */}
                                <text
                                    x={point.x}
                                    y={point.y - 10}
                                    textAnchor="middle"
                                    className={styles.scoreLabel}
                                    fill="#2d3748"
                                    fontSize="10"
                                    fontWeight="600"
                                >
                                    {point.score}
                                </text>
                            </g>
                        ))}
                    </svg>

                    <div className={styles.xAxis}>
                        {data.map((item, index) => (
                            <span key={index} className={styles.xLabel}>
                                {item.month}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.stats}>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>Cao nhất</span>
                    <span className={styles.statValue}>{maxValue}</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>Thấp nhất</span>
                    <span className={styles.statValue}>{minValue}</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>Trung bình</span>
                    <span className={styles.statValue}>
                        {(data.reduce((sum, item) => sum + item.score, 0) / data.length).toFixed(1)}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default LineChart;