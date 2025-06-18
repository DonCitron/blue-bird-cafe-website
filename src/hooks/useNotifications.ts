import { useState, useEffect } from 'react';

interface UseNotificationsReturn {
  permission: NotificationPermission;
  requestPermission: () => Promise<NotificationPermission>;
  sendNotification: (title: string, options?: NotificationOptions) => void;
  isSupported: boolean;
}

export const useNotifications = (): UseNotificationsReturn => {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const isSupported = 'Notification' in window;

  useEffect(() => {
    if (isSupported) {
      setPermission(Notification.permission);
    }
  }, [isSupported]);

  const requestPermission = async (): Promise<NotificationPermission> => {
    if (!isSupported) {
      return 'denied';
    }

    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      return result;
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return 'denied';
    }
  };

  const sendNotification = (title: string, options?: NotificationOptions) => {
    if (!isSupported || permission !== 'granted') {
      return;
    }

    const defaultOptions: NotificationOptions = {
      icon: '/blue_bird_clean_transparent.png',
      badge: '/blue_bird_clean_transparent.png',
      vibrate: [200, 100, 200],
      ...options
    };

    try {
      new Notification(title, defaultOptions);
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  return {
    permission,
    requestPermission,
    sendNotification,
    isSupported
  };
};