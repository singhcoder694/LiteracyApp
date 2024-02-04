import React, { useEffect } from 'react';
import './ReloadAlert.css';

const ReloadAlert = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Customize the message you want to display
      const alertMessage = 'Warning: All your data will be lost. Are you sure you want to leave?';

      // Display the alert message when the user tries to reload the page
      event.returnValue = alertMessage;
      return alertMessage;
    };

    // Attach the event listener when the component mounts
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return <>
  </>;
};

export default ReloadAlert;
