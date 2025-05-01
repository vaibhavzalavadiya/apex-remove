import React, { useEffect } from 'react';
import { CheckCircle, X, AlertCircle } from 'lucide-react';

const Toast = ({ message, onClose, type = 'success' }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const isError = message.toLowerCase().includes('error') || 
                  message.toLowerCase().includes('fail') ||
                  type === 'error';

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 animate-fadeIn">
      <div className={`${
        isError ? 'bg-red-50 border-red-200' : 'bg-gray-900'
      } px-4 py-3 rounded-lg shadow-xl flex items-center max-w-md`}>
        {isError ? (
          <AlertCircle size={20} className="text-red-500 mr-2 flex-shrink-0" />
        ) : (
          <CheckCircle size={20} className="text-green-400 mr-2 flex-shrink-0" />
        )}
        <p className={`${isError ? 'text-red-800' : 'text-white'} text-sm`}>{message}</p>
        <button
          onClick={onClose}
          className={`ml-3 ${isError ? 'text-red-500 hover:text-red-700' : 'text-gray-300 hover:text-white'}`}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default Toast;