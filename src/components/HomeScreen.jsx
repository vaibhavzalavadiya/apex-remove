import React, { useState } from 'react';
import { Upload, ImagePlus, Wand2, Sparkles, Image as ImageIcon } from 'lucide-react';

const HomeScreen = ({ setResultImage, setIsLoading, showToastNotification }) => {
  const [imageFile, setImageFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (!file) return;
    
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      showToastNotification('Please upload a valid image file (JPEG, PNG, or WebP)');
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      showToastNotification('File size should be less than 5MB');
      return;
    }
    
    setImageFile(file);
    const preview = URL.createObjectURL(file);
    setPreviewURL(preview);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      showToastNotification('Please select an image first');
      return;
    }

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      setIsLoading(true);
      setIsSubmitting(true);

      // Use fetch API for the request
      const response = await fetch("http://127.0.0.1:8000/api/remove-background/", {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Server responded with an error');
      }

      const data = await response.json();

      if (data && data.image) {
        setResultImage({
          image: data.image,
          filename: data.filename || 'bg-removed.png',
        });
      }
      
    } catch (error) {
      console.error('Upload failed:', error);
      showToastNotification('Background removal failed. Please try again.');
      setResultImage(null);
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl animate-fadeIn">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"></div>
        
        <div className="p-6 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex justify-center items-center mb-4">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 blur-md opacity-70 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-full">
                  <Wand2 size={24} className="text-white" />
                </div>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">AI Background Remover</h2>
            <p className="text-gray-500 text-sm sm:text-base">Upload your image and our AI will automatically remove the background</p>
          </div>
          
          {/* Featured Benefits */}
          <div className="grid grid-cols-3 gap-2 mb-8 text-center">
            <div className="bg-purple-50 rounded-lg p-3">
              <div className="flex justify-center mb-2">
                <Sparkles size={18} className="text-purple-600" />
              </div>
              <p className="text-purple-900 text-xs font-medium">AI-Powered</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
              <div className="flex justify-center mb-2">
                <ImageIcon size={18} className="text-purple-600" />
              </div>
              <p className="text-purple-900 text-xs font-medium">High Quality</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
              <div className="flex justify-center mb-2">
                <Upload size={18} className="text-purple-600" />
              </div>
              <p className="text-purple-900 text-xs font-medium">Easy Export</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} onDragEnter={handleDrag}>
            <div 
              className={`border-2 border-dashed rounded-xl ${
                dragActive ? 'border-purple-500 bg-purple-50' : 'border-gray-300'
              } ${previewURL ? 'p-4' : 'p-4 sm:p-10'} 
              transition-all duration-300 hover:border-purple-400`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              {!previewURL ? (
                <div className="text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-purple-100 text-purple-600">
                    <Upload size={28} />
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg font-medium">Drag & drop your image here</p>
                  <p className="text-gray-400 my-3">or</p>
                  <label className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center">
                    <ImagePlus size={18} className="mr-2" />
                    Browse files
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <p className="text-gray-400 text-xs sm:text-sm mt-4 sm:mt-6">Supports JPG, PNG, WebP (max 5MB)</p>
                </div>
              ) : (
                <div className="text-center w-full">
                  <div className="mb-4 w-full relative group">
                    <div className="absolute inset-0 rounded-lg overflow-hidden bg-gradient-to-r from-purple-300/20 to-indigo-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-black/40 text-white px-4 py-2 rounded-lg">
                        Preview
                      </div>
                    </div>
                    <img 
                      src={previewURL} 
                      alt="Preview" 
                      className="rounded-lg w-full h-auto max-h-72 object-contain mx-auto border border-gray-100 shadow-sm" 
                    />
                  </div>
                  <button 
                    type="button" 
                    className="text-sm text-purple-600 hover:text-purple-800 border border-purple-200 hover:border-purple-300 rounded-lg px-4 py-2 transition-all duration-200"
                    onClick={() => {
                      setPreviewURL(null);
                      setImageFile(null);
                    }}
                  >
                    Change image
                  </button>
                </div>
              )}
            </div>

            <div className="mt-6 sm:mt-8">
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg disabled:from-purple-400 disabled:to-indigo-400 disabled:cursor-not-allowed"
                disabled={!imageFile || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 align-middle"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    <Wand2 className="inline-block mr-2" size={20} />
                    Remove Background
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;