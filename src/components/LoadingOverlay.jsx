import React from 'react';
import { Wand2 } from 'lucide-react';

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn">
      <div className="flex flex-col items-center justify-center bg-white p-6 sm:p-8 rounded-2xl shadow-xl text-center max-w-xs mx-auto">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 blur-md opacity-50 animate-pulse"></div>
          <div className="relative w-full h-full border-4 border-purple-200 border-l-purple-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Wand2 size={24} className="text-purple-600 animate-bounce" />
          </div>
        </div>
        <p className="text-purple-900 font-semibold mb-1">Removing background...</p>
        <p className="text-gray-500 text-sm">Our AI is processing your image</p>
        
        <div className="mt-4 w-full bg-gray-200 rounded-full h-1.5">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-1.5 rounded-full animate-progressBar"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;