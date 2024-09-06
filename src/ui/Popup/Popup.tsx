import React from 'react';
import './Popup.css';

interface PopupProps {
  onClose: () => void;
  content: React.ReactNode;
}

export const Popup: React.FC<PopupProps> = ({ onClose, content }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={onClose}>
          x
        </button>
        <div className="popup-content">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Popup;