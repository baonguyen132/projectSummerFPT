import ItemStatistical from '../../../components/Dashboard/itemStatistical';
import BarChart from '../../../components/Dashboard/BarChart';
import SemiCircleChart from '../../../components/Dashboard/SemiCircleChart';
import PieChart from '../../../components/Dashboard/PieChart';
import LineChart from '../../../components/Dashboard/LineChart';
import DashboardWeekCalendar from '../../../components/Dashboard/DashboardWeekCalendar/DashboardWeekCalendar';
import styles from './dashboard.module.scss';

function Dashboard() {
    // Data cho biểu đồ cột - người dùng tăng theo tháng
    const userGrowthData = [
        { month: 'Jan', users: 120 },
        { month: 'Feb', users: 180 },
        { month: 'Mar', users: 240 },
        { month: 'Apr', users: 200 },
        { month: 'May', users: 320 },
        { month: 'Jun', users: 280 },
        { month: 'Jul', users: 380 },
        { month: 'Aug', users: 420 },
        { month: 'Sep', users: 350 },
        { month: 'Oct', users: 480 },
        { month: 'Nov', users: 520 },
        { month: 'Dec', users: 600 }
    ];

    // Data cho biểu đồ tròn
    const pieChartData = [
        { label: 'Từ 18-24 tuổi', value: 45, color: '#0C6FFF' },
        { label: 'Từ 25-34 tuổi', value: 35, color: '#1b4ec5' },
        { label: 'Từ 35-44 tuổi', value: 20, color: '#0832b2' }
    ];

    // Data cho biểu đồ đường - điểm trung bình học viên qua các tháng
    const averageScoreData = [
        { month: 'Jan', score: 7.5 },
        { month: 'Feb', score: 8.2 },
        { month: 'Mar', score: 7.8 },
        { month: 'Apr', score: 8.5 },
        { month: 'May', score: 8.9 },
        { month: 'Jun', score: 8.1 },
        { month: 'Jul', score: 9.2 },
        { month: 'Aug', score: 8.7 },
        { month: 'Sep', score: 9.0 },
        { month: 'Oct', score: 9.3 },
        { month: 'Nov', score: 8.8 },
        { month: 'Dec', score: 9.5 }
    ];

    return ( 
        <>
            <div className={styles.contentStatistical}>
                <ItemStatistical
                    title="Total Users"
                    value="12,450"
                    icon="bx bx-user"
                />
                
                <ItemStatistical 
                    title="Total Revenue"
                    value="$45,250"
                    icon="bx bx-dollar-circle"
                />
                
                <ItemStatistical 
                    title="Total Orders"
                    value="8,920"
                    icon="bx bx-shopping-bag"
                />
                
                <ItemStatistical 
                    title="Total Products"
                    value="1,250"
                    icon="bx bx-package"
                />
            </div>

            <div className={styles.chartsContainer}>
                <div className={styles.chartItem}>
                    <BarChart 
                        data={userGrowthData}
                        title="Biểu đồ số lượng người dùng"
                        subtitle="Đăng ký người dùng theo tháng"
                    />
                </div>

                <div className={styles.chartItem}>
                    <SemiCircleChart 
                        percentage={95}
                        title="Tỷ lệ hài lòng"
                        subtitle="Từ tất cả các dự án"
                    />
                </div>

                <div className={styles.chartItem}>
                    <PieChart 
                        data={pieChartData}
                        title="Độ tuổi tham gia"
                        subtitle="Phân bổ độ tuổi người dùng"
                    />
                </div>
            </div>

            <div className={styles.bottomContainer}>
                <div className={styles.lineChartWrapper}>
                    <LineChart 
                        data={averageScoreData}
                        title="Điểm trung bình học viên"
                        subtitle="Xu hướng điểm số qua các tháng"
                    />
                </div>

                <div className={styles.calendarWrapper}>
                    <DashboardWeekCalendar />
                </div>
            </div>
        </>
     );
}

export default Dashboard;