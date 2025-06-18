import React, { useState, useEffect } from 'react';
import { Bell, X } from 'lucide-react';
import { useNotifications } from '../hooks/useNotifications';

const NotificationPermissionPrompt: React.FC = () => {
  const { permission, requestPermission, isSupported } = useNotifications();
  const [showPrompt, setShowPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show prompt after 5 seconds if notifications are supported and not already granted/denied
    const timer = setTimeout(() => {
      if (isSupported && permission === 'default' && !dismissed) {
        setShowPrompt(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isSupported, permission, dismissed]);

  const handleRequestPermission = async () => {
    await requestPermission();
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setDismissed(true);
    // Remember dismissal for this session
    sessionStorage.setItem('notificationPromptDismissed', 'true');
  };

  // Don't show if already dismissed in this session
  useEffect(() => {
    if (sessionStorage.getItem('notificationPromptDismissed')) {
      setDismissed(true);
    }
  }, []);

  if (!showPrompt || !isSupported || permission !== 'default' || dismissed) {
    return null;
  }

  return (
    <div className="fixed top-20 left-4 right-4 z-50 max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Bell className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          
          <div className="ml-3 flex-1">
            <h3 className="text-sm font-medium text-gray-900">
              Benachrichtigungen aktivieren
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Erhalten Sie Updates zu neuen Angeboten, Events und saisonalen Theme-Änderungen.
            </p>
            
            <div className="mt-3 flex space-x-2">
              <button
                onClick={handleRequestPermission}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                <Bell className="h-3 w-3 mr-1" />
                Aktivieren
              </button>
              
              <button
                onClick={handleDismiss}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Nein danke
              </button>
            </div>
          </div>
          
          <div className="ml-4 flex-shrink-0">
            <button
              onClick={handleDismiss}
              className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPermissionPrompt;