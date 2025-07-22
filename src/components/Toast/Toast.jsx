import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MdCheckCircle, MdError, MdWarning, MdInfo } from 'react-icons/md';

// Custom toast hook
export const useToast = () => {
  const showSuccess = (message) => {
    toast.success(message, {
      icon: <MdCheckCircle className="text-green-500" size={20} />,
    });
  };

  const showError = (message) => {
    toast.error(message, {
      icon: <MdError className="text-red-500" size={20} />,
    });
  };

  const showWarning = (message) => {
    toast(message, {
      icon: <MdWarning className="text-yellow-500" size={20} />,
      style: {
        background: '#ffffff',
        color: '#d97706',
        border: '2px solid #f59e0b',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(245, 158, 11, 0.2)',
        padding: '16px 20px',
        fontSize: '14px',
        fontWeight: '500',
      },
    });
  };

  const showInfo = (message) => {
    toast(message, {
      icon: <MdInfo className="text-purple-500" size={20} />,
      style: {
        background: '#ffffff',
        color: '#333333',
        border: '2px solid #8b5cf6',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(139, 92, 246, 0.2)',
        padding: '16px 20px',
        fontSize: '14px',
        fontWeight: '500',
      },
    });
  };

  return {
    success: showSuccess,
    error: showError,
    warning: showWarning,
    info: showInfo,
  };
};

// Toast Provider Component
export const ToastProvider = () => {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 5000,
        style: {
          background: '#ffffff',
          color: '#333333',
          border: '2px solid #8b5cf6', // Violet border for default
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(139, 92, 246, 0.2)',
          padding: '16px 20px',
          fontSize: '14px',
          fontWeight: '500',
        },
        success: {
          style: {
            background: '#ffffff',
            color: '#16a34a',
            border: '2px solid #22c55e', // Green border for success
            boxShadow: '0 8px 32px rgba(34, 197, 94, 0.2)',
          },
        },
        error: {
          style: {
            background: '#ffffff',
            color: '#dc2626',
            border: '2px solid #ef4444', // Red border for errors
            boxShadow: '0 8px 32px rgba(239, 68, 68, 0.2)',
          },
        },
        loading: {
          style: {
            background: '#ffffff',
            color: '#6b7280',
            border: '2px solid #9ca3af',
            boxShadow: '0 8px 32px rgba(156, 163, 175, 0.2)',
          },
        },
      }}
    />
  );
};
