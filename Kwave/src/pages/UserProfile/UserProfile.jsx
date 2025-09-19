import React, { useState } from 'react';
import { useUserProfile } from '../../contexts/UserProfileContext.jsx';
import UpgradeButton from '../../components/common/UpgradeButton';
import './UserProfile.css';

const UserProfile = () => {
  const { userProfile: user, updateSettings, togglePremium } = useUserProfile();

  const [activeTab, setActiveTab] = useState('progress');

  return (
    <div className="user-profile-container">
      {user.isPremium ? (
        <PremiumProfile user={user} activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : (
        <BasicProfile user={user} activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
    </div>
  );
};

// Giao diện cho người dùng chưa nâng cấp
const BasicProfile = ({ user, activeTab, setActiveTab }) => {
  return (
    <div className="basic-profile">
      {/* Header Section */}
      <div className="profile-header">
        <div className="profile-header-content">
          <div className="avatar-section">
            <img src={user.avatar} alt="Avatar" className="avatar" />
            <button className="edit-profile-btn" title="Chỉnh sửa hồ sơ">
              <i className="bx bx-edit"></i>
            </button>
          </div>
          <div className="user-info">
            <h2 className="user-name">{user.name}</h2>
            <div className="user-stats">
              <span className="points">{user.points} exp</span>
              <span className="level">{user.level}</span>
            </div>
          </div>
        </div>
        <div className="registration-status">
          <span className="status-text">Chưa đăng ký gói</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="profile-tabs">
        <button 
          className={`tab ${activeTab === 'progress' ? 'active' : ''}`}
          onClick={() => setActiveTab('progress')}
        >
          <i className="bx bx-trending-up"></i>
          Tiến độ
        </button>
        <button 
          className={`tab ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          <i className="bx bx-trophy"></i>
          Thành tích
        </button>
        <button 
          className={`tab ${activeTab === 'upgrade' ? 'active' : ''}`}
          onClick={() => setActiveTab('upgrade')}
        >
          <i className="bx bx-crown"></i>
          Nâng cấp
        </button>
      </div>

      {/* Content Area */}
      <div className="profile-content">
        {activeTab === 'progress' && <ProgressSection user={user} />}
        {activeTab === 'achievements' && <AchievementsSection user={user} />}
        {activeTab === 'upgrade' && <UpgradeSection />}
      </div>
    </div>
  );
};

// Giao diện cho người dùng đã nâng cấp (Premium)
const PremiumProfile = ({ user, activeTab, setActiveTab }) => {
  return (
    <div className="premium-profile">
      {/* Professional Header */}
      <div className="premium-header">
        <div className="premium-header-content">
          <div className="user-info-premium">
            <h2 className="user-name-premium">{user.name}</h2>
            <div className="user-stats-premium">
              <span className="points-premium">{user.points} exp</span>
            </div>
          </div>
          <div className="premium-badge">
            <i className="bx bx-crown"></i>
            <span>Chuyên nghiệp</span>
          </div>
        </div>
      </div>

      {/* Premium Navigation */}
      <div className="premium-tabs">
        <button 
          className={`premium-tab ${activeTab === 'progress' ? 'active' : ''}`}
          onClick={() => setActiveTab('progress')}
        >
          Tiến độ
        </button>
        <button 
          className={`premium-tab ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          Thành tích
        </button>
        <button 
          className={`premium-tab ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Cài đặt
        </button>
      </div>

      {/* Premium Content */}
      <div className="premium-content">
        {activeTab === 'progress' && <PremiumProgressSection user={user} />}
        {activeTab === 'achievements' && <PremiumAchievementsSection user={user} />}
        {activeTab === 'settings' && <SettingsSection />}
      </div>
    </div>
  );
};

// Components cho các tab
const ProgressSection = ({ user }) => {
  const dayLabels = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  const dayNames = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];
  
  return (
    <div className="progress-section">
      <div className="progress-card">
        <h3>Tiến độ luyện tập hàng tuần</h3>
        <div className="weekly-progress">
          <div className="progress-chart">
            {user.progress.daily.map((day, index) => (
              <div key={index} className="progress-bar" title={`${dayNames[index]}: ${day ? 'Đã hoàn thành' : 'Chưa hoàn thành'}`}>
                <div 
                  className={`bar ${day ? 'completed' : 'incomplete'}`}
                  style={{ height: day ? '100%' : '20%' }}
                ></div>
                <span className="day-label">{dayLabels[index]}</span>
              </div>
            ))}
          </div>
          <div className="progress-info">
            <p>Tuần này</p>
            <p>{user.progress.daily.filter(day => day).length}/7 ngày hoàn thành</p>
            <p>Tỷ lệ hoàn thành: {Math.round((user.progress.daily.filter(day => day).length / 7) * 100)}%</p>
          </div>
        </div>
      </div>

      <UpgradeButton
        variant="premium"
        size="large"
        message="Nâng cấp gói để mở khóa toàn bộ tính năng"
        buttonText="Nâng cấp gói"
        className="mt-4"
      />
    </div>
  );
};

const AchievementsSection = ({ user }) => {
  return (
    <div className="achievements-section">
      <div className="achievements-grid">
        {user.achievements.map(achievement => (
          <div key={achievement.id} className={`achievement-card ${achievement.earned ? 'earned' : 'locked'}`}>
            <div className="achievement-icon">
              <i className={achievement.earned ? "bx bx-trophy" : "bx bx-lock"}></i>
            </div>
            <div className="achievement-info">
              <h4>{achievement.name}</h4>
              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const UpgradeSection = () => {
  return (
    <div className="upgrade-section">
      <div className="upgrade-card">
        <h3>Khám phá ngay chỉ với giá 1/3 trung tâm</h3>
        <div className="upgrade-options">
          <div className="upgrade-option">
            <h4>Miễn phí</h4>
            <UpgradeButton
              variant="premium"
              size="medium"
              message=""
              buttonText="Nâng cấp ngay"
              showIcon={false}
              className="mb-4"
            />
            <ul>
              <li><i className="bx bx-x"></i> Mở khóa toàn bộ lộ trình học</li>
              <li><i className="bx bx-x"></i> Mở khóa toàn bộ lộ trình học</li>
              <li><i className="bx bx-x"></i> Mở khóa toàn bộ lộ trình học</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const PremiumProgressSection = ({ user }) => {
  const dayLabels = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  const dayNames = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];
  
  return (
    <div className="premium-progress-section">
      <div className="progress-overview">
        <div className="progress-card-premium">
          <h3>Tiến độ luyện tập hàng tuần</h3>
          <div className="weekly-chart">
            {user.progress.daily.map((day, index) => (
              <div key={index} className="chart-bar" title={`${dayNames[index]}: ${day ? 'Đã hoàn thành' : 'Chưa hoàn thành'}`}>
                <div 
                  className={`bar-premium ${day ? 'active' : 'inactive'}`}
                  style={{ height: day ? '80px' : '20px' }}
                ></div>
                <span>{dayLabels[index]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-progress">
          <h3>Thống kê bài học</h3>
          <div className="skills-list">
            <div className="skill-item">
              <span>Từ vựng</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${user.progress.vocabulary}%` }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Ngữ pháp</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${user.progress.grammar}%` }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Nghe</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${user.progress.listening}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="exam-stats">
        <h3>Thống kê điểm thi</h3>
        <div className="exam-chart">
          {user.progress.daily.map((day, index) => (
            <div key={index} className="exam-bar" title={`${dayNames[index]}: ${day ? 'Điểm cao' : 'Chưa thi'}`}>
              <div 
                className={`exam-fill ${day ? 'high-score' : 'low-score'}`}
                style={{ height: day ? '60px' : '20px' }}
              ></div>
              <span>{dayLabels[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PremiumAchievementsSection = ({ user }) => {
  return (
    <div className="premium-achievements-section">
      <div className="achievements-premium-grid">
        {user.achievements.map(achievement => (
          <div key={achievement.id} className={`achievement-premium-card ${achievement.earned ? 'earned' : 'pending'}`}>
            <div className="achievement-premium-icon">
              <i className="bx bx-medal"></i>
            </div>
            <div className="achievement-premium-info">
              <h4>{achievement.name}</h4>
              <p>{achievement.description}</p>
            </div>
            {achievement.earned && <div className="earned-badge">✓</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

const SettingsSection = () => {
  const { userProfile, updateSettings, togglePremium } = useUserProfile();
  
  const handleSettingChange = (settingKey, value) => {
    updateSettings({ [settingKey]: value });
  };

  return (
    <div className="settings-section">
      <div className="settings-group">
        <h3>Cài đặt tài khoản</h3>
        <div className="settings-options">
          <div className="setting-item">
            <span>Thông báo email</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={userProfile.settings.emailNotifications}
                onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="setting-item">
            <span>Âm thanh</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={userProfile.settings.soundEnabled}
                onChange={(e) => handleSettingChange('soundEnabled', e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="setting-item">
            <span>Chế độ tối</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={userProfile.settings.darkMode}
                onChange={(e) => handleSettingChange('darkMode', e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
      
      <div className="settings-group">
        <h3>Quyền riêng tư</h3>
        <div className="settings-options">
          <div className="setting-item">
            <span>Hiển thị tiến độ công khai</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={userProfile.settings.publicProgress}
                onChange={(e) => handleSettingChange('publicProgress', e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="setting-item">
            <span>Cho phép theo dõi</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={userProfile.settings.allowFollowing}
                onChange={(e) => handleSettingChange('allowFollowing', e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
      
      <div className="settings-group">
        <h3>Gói dịch vụ</h3>
        <div className="settings-options">
          <div className="setting-item">
            <span>Chế độ Premium (Demo)</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={userProfile.isPremium}
                onChange={togglePremium}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;