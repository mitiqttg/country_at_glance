import React from 'react';

const Notification = ({ message }) => {
  if (!message) return null; // Don't show anything if no message

  return <div className="notification">{message}</div>;
};

export default Notification;
