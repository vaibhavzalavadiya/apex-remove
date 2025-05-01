import React, { useState, useEffect } from 'react';
import { Download, Share, ArrowLeft, CheckCircle, Sparkles } from 'lucide-react';

const ResultScreen = ({ resultImage, onReset, showToastNotification }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (resultImage) {
      setTimeout(() => setShowContent(true), 300);
    } else {
      setShowContent(false);
    }
  }, [resultImage]);

  if (!resultImage) return null;

  const { image, filename } = resultImage;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `data:image/png;base64,${image}`;
    link.download = filename || 'bg-removed.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToastNotification('Download started successfully!');
  };

  const handleShare = async () => {
    try {
      const response = await fetch(`data:image/png;base64,${image}`);
      const blob = await response.blob();

      if (navigator.share) {
        await navigator.share({
          files: [new File([blob], filename || 'bg-removed.png', { type: 'image/png' })],
          title: 'Image with removed background',
        });
      } else {
        showToastNotification('Sharing is not supported on this browser');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} animate-slideUp`}>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500"></div>

        <div className="p-6 sm:p-8">
          <div className="text-center mb-4 sm:mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-100 text-green-600 rounded-full mb-4 relative">
              <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></div>
              <CheckCircle size={28} className="relative z-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-green-600 mb-1">Background Removed!</h3>
            <p className="text-gray-500 text-sm sm:text-base">Your image is ready to download</p>
          </div>

          {/* Features Row */}
          <div className="grid grid-cols-3 gap-2 mb-4 text-center">
            <div className="bg-green-50 rounded-lg p-2">
              <p className="text-green-800 text-xs font-medium">Transparent</p>
            </div>
            <div className="bg-green-50 rounded-lg p-2">
              <p className="text-green-800 text-xs font-medium">High-Resolution</p>
            </div>
            <div className="bg-green-50 rounded-lg p-2">
              <p className="text-green-800 text-xs font-medium">Ready to Use</p>
            </div>
          </div>

          {/* Image Preview */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-block bg-gray-100 p-4 sm:p-6 rounded-xl shadow-sm w-full max-w-xl mx-auto bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2RkZCIvPgo8cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2RkZCIvPgo8L3N2Zz4=')]">
              <div className="relative group pt-[75%] w-full h-auto max-h-96">
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <img
                    src={`data:image/png;base64,${image}`}
                    alt="Processed"
                    className="absolute inset-0 w-full h-full object-contain rounded transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded flex items-end justify-center pb-4">
                    <div className="flex items-center text-white text-sm font-medium">
                      <Sparkles size={14} className="mr-1 text-yellow-300" />
                      <span>AI Processed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button
              className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              onClick={handleDownload}
            >
              <Download size={18} className="mr-2" />
              Download Image
            </button>
            <button
              className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
              onClick={handleShare}
            >
              <Share size={18} className="mr-2" />
              Share
            </button>
          </div>

          {/* Remove Another Image */}
          <div className="text-center">
            <button
              className="text-purple-600 hover:text-purple-800 transition-colors duration-200 flex items-center justify-center mx-auto"
              onClick={onReset}
            >
              <ArrowLeft size={16} className="mr-1" />
              Remove another image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;