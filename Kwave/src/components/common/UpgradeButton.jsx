import React from 'react';
import { useNavigate } from 'react-router-dom';

const UpgradeButton = ({ 
  variant = 'default', 
  size = 'medium',
  message = 'Nâng cấp ngay để mở khóa tính năng này',
  buttonText = 'Nâng cấp ngày',
  className = '',
  showIcon = true 
}) => {
  const navigate = useNavigate();

  const handleUpgradeClick = () => {
    navigate('/update');
  };

  // Variant styles
  const variantStyles = {
    default: 'bg-gradient-to-r from-green-50 to-green-100 border border-green-200',
    premium: 'bg-gradient-to-r from-amber-50 to-orange-100 border border-orange-200',
    dark: 'bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700',
    subtle: 'bg-gray-50 border border-gray-200'
  };

  const messageStyles = {
    default: 'text-green-700',
    premium: 'text-orange-700',
    dark: 'text-gray-100',
    subtle: 'text-gray-700'
  };

  const buttonStyles = {
    default: 'bg-green-500 hover:bg-green-600 text-white',
    premium: 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white',
    dark: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white',
    subtle: 'bg-gray-800 hover:bg-gray-900 text-white'
  };

  // Size styles
  const sizeStyles = {
    small: {
      container: 'px-3 py-2',
      message: 'text-sm',
      button: 'px-4 py-1.5 text-xs'
    },
    medium: {
      container: 'px-4 py-3',
      message: 'text-base',
      button: 'px-6 py-2 text-sm'
    },
    large: {
      container: 'px-6 py-4',
      message: 'text-lg',
      button: 'px-8 py-3 text-base'
    }
  };

  return (
    <div className={`
      ${variantStyles[variant]} 
      ${sizeStyles[size].container} 
      flex items-center justify-between rounded-xl shadow-sm
      ${className}
    `}>
      <div className="flex items-center gap-3">
        {showIcon && (
          <div className={`
            w-10 h-10 rounded-full flex items-center justify-center
            ${variant === 'premium' ? 'bg-orange-200' : 
              variant === 'dark' ? 'bg-gray-700' : 'bg-green-200'}
          `}>
            <i className={`
              bx bx-crown text-xl
              ${variant === 'premium' ? 'text-orange-600' : 
                variant === 'dark' ? 'text-green-400' : 'text-green-600'}
            `}></i>
          </div>
        )}
        <span className={`
          ${messageStyles[variant]} 
          ${sizeStyles[size].message} 
          font-medium
        `}>
          {message}
        </span>
      </div>
      
      <button 
        className={`
          ${buttonStyles[variant]}
          ${sizeStyles[size].button}
          rounded-full font-medium
          transition-all duration-300 ease-in-out
          hover:transform hover:scale-105 hover:shadow-lg
          active:scale-95
        `}
        onClick={handleUpgradeClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default UpgradeButton;