import React from 'react';
import { Download, X, Smartphone } from 'lucide-react';
import { usePWA } from '../hooks/usePWA';

const PWAInstallPrompt: React.FC = () => {
  const { showInstallPrompt, installApp, dismissInstallPrompt } = usePWA();

  if (!showInstallPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Smartphone className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          
          <div className="ml-3 flex-1">
            <h3 className="text-sm font-medium text-gray-900">
              Blue Bird App installieren
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Installieren Sie unsere App für schnelleren Zugriff und Offline-Funktionen.
            </p>
            
            <div className="mt-3 flex space-x-2">
              <button
                onClick={installApp}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Download className="h-3 w-3 mr-1" />
                Installieren
              </button>
              
              <button
                onClick={dismissInstallPrompt}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Später
              </button>
            </div>
          </div>
          
          <div className="ml-4 flex-shrink-0">
            <button
              onClick={dismissInstallPrompt}
              className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;