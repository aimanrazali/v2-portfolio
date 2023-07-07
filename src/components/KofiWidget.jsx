import React, { useEffect } from 'react';

const KofiWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
    script.async = true;

    script.onload = () => {
      if (typeof kofiWidgetOverlay !== 'undefined') {
        const isWidgetVisible = localStorage.getItem('kofiWidgetVisible');
        const isVisible = isWidgetVisible === 'true';
        // eslint-disable-next-line no-undef
        kofiWidgetOverlay.draw('aimanrazali11', {
          'type': 'floating-chat',
          'floating-chat.donateButton.text': 'Support me',
          'floating-chat.donateButton.background-color': '#00b9fe',
          'floating-chat.donateButton.text-color': '#fff',
          'floating-chat.visible': isVisible
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default KofiWidget;
