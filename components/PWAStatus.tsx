'use client';

import { useState, useEffect } from 'react';

interface PWAStatusProps {
  className?: string;
}

export default function PWAStatus({ className = '' }: PWAStatusProps) {
  const [isStandalone, setIsStandalone] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    // Check if app is running in standalone mode
    const checkStandalone = () => {
      const standalone = window.matchMedia('(display-mode: standalone)').matches || 
                       navigator.standalone === true;
      setIsStandalone(standalone);
    };

    // Check online status
    const checkOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Check if app can be installed
    const checkInstallable = () => {
      // This will be set by the PWAInstallPrompt component
      // For now, we'll just check if we're not in standalone mode
      setCanInstall(!isStandalone);
    };

    checkStandalone();
    checkOnlineStatus();
    checkInstallable();

    // Listen for display mode changes
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    mediaQuery.addEventListener('change', checkStandalone);

    // Listen for online/offline events
    window.addEventListener('online', checkOnlineStatus);
    window.addEventListener('offline', checkOnlineStatus);

    return () => {
      mediaQuery.removeEventListener('change', checkStandalone);
      window.removeEventListener('online', checkOnlineStatus);
      window.removeEventListener('offline', checkOnlineStatus);
    };
  }, [isStandalone]);

  if (!isStandalone && !canInstall) {
    return null; // Don't show anything if not in PWA mode and can't install
  }

  return (
    <div className={`pwa-status ${className}`}>
      <div className="pwa-status-content">
        {isStandalone && (
          <div className="pwa-status-item">
            <span className="pwa-status-icon">📱</span>
            <span className="pwa-status-text">ऐप मोड में चल रहा है</span>
          </div>
        )}
        
        {!isOnline && (
          <div className="pwa-status-item">
            <span className="pwa-status-icon">📡</span>
            <span className="pwa-status-text">ऑफलाइन मोड</span>
          </div>
        )}
        
        {isOnline && isStandalone && (
          <div className="pwa-status-item">
            <span className="pwa-status-icon">🔄</span>
            <span className="pwa-status-text">बैकग्राउंड अपडेट्स सक्षम</span>
          </div>
        )}
      </div>
    </div>
  );
} 