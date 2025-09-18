import React, { createContext, useContext, useState } from 'react';

const UserProfileContext = createContext();

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error('useUserProfile must be used within UserProfileProvider');
  }
  return context;
};

export const UserProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({
    name: "Nguyen Thi A",
    points: 470,
    isPremium: false, // Có thể thay đổi thành true để test giao diện premium
    avatar: "/src/asset/image/user.png",
    level: "Điểm luyện tập",
    progress: {
      daily: [1, 0, 0, 0, 0, 0, 0], // 7 ngày gần nhất (1 = completed, 0 = not completed)
      vocabulary: 65,
      grammar: 45,
      listening: 80,
      speaking: 30,
      reading: 55
    },
    achievements: [
      { 
        id: 1, 
        name: "Chuỗi ngày vàng", 
        description: "Học liên tục 7 ngày", 
        earned: true,
        earnedDate: "2025-01-01"
      },
      { 
        id: 2, 
        name: "Người không bỏ cuộc", 
        description: "Hoàn thành 50 bài học", 
        earned: false 
      },
      { 
        id: 3, 
        name: "Người thì điếm cao", 
        description: "Đạt điểm cao trong bài kiểm tra", 
        earned: true,
        earnedDate: "2024-12-15"
      },
      { 
        id: 4, 
        name: "Bậc thầy từ vựng", 
        description: "Học 100 từ vựng mới", 
        earned: false 
      },
      { 
        id: 5, 
        name: "Chuyên gia ngữ pháp", 
        description: "Hoàn thành 20 bài ngữ pháp", 
        earned: true,
        earnedDate: "2024-11-20"
      }
    ],
    settings: {
      emailNotifications: true,
      soundEnabled: true,
      darkMode: false,
      publicProgress: true,
      allowFollowing: false
    }
  });

  // Các hàm helper để cập nhật profile
  const updateUserProfile = (updates) => {
    setUserProfile(prev => ({
      ...prev,
      ...updates
    }));
  };

  const togglePremium = () => {
    setUserProfile(prev => ({
      ...prev,
      isPremium: !prev.isPremium
    }));
  };

  const updateProgress = (progressUpdates) => {
    setUserProfile(prev => ({
      ...prev,
      progress: {
        ...prev.progress,
        ...progressUpdates
      }
    }));
  };

  const updateSettings = (settingUpdates) => {
    setUserProfile(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        ...settingUpdates
      }
    }));
  };

  const addPoints = (points) => {
    setUserProfile(prev => ({
      ...prev,
      points: prev.points + points
    }));
  };

  const earnAchievement = (achievementId) => {
    setUserProfile(prev => ({
      ...prev,
      achievements: prev.achievements.map(achievement => 
        achievement.id === achievementId 
          ? { ...achievement, earned: true, earnedDate: new Date().toISOString().split('T')[0] }
          : achievement
      )
    }));
  };

  const value = {
    userProfile,
    updateUserProfile,
    togglePremium,
    updateProgress,
    updateSettings,
    addPoints,
    earnAchievement
  };

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileContext;