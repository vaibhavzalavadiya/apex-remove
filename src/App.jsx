import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';
import ResultScreen from './components/ResultScreen';
import LoadingOverlay from './components/LoadingOverlay';
import Toast from './components/Toast';

function App() {
  const [resultImage, setResultImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  const handleReset = () => {
    setResultImage(null);
  };
  
  const showToastNotification = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      <main className="flex-1 py-6 sm:py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              {isLoading && <LoadingOverlay />}
              
              {!resultImage ? (
                <HomeScreen 
                  setResultImage={setResultImage} 
                  setIsLoading={setIsLoading}
                  showToastNotification={showToastNotification}
                />
              ) : (
                <ResultScreen 
                  resultImage={resultImage} 
                  onReset={handleReset}
                  showToastNotification={showToastNotification} 
                />
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
    </div>
  );
}

export default App;