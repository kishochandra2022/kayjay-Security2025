import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

interface ReCaptchaV2Props {
  sitekey: string;
  onVerify: (token: string | null) => void;
}

const ReCaptchaV2: React.FC<ReCaptchaV2Props> = ({ sitekey, onVerify }) => {
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Function to render the reCAPTCHA widget
    const renderRecaptcha = () => {
      if (recaptchaRef.current && widgetIdRef.current === null && window.grecaptcha && window.grecaptcha.render) {
        widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
          'sitekey': sitekey,
          'callback': (token: string) => onVerify(token),
          'expired-callback': () => onVerify(null),
        });
      }
    };

    // If grecaptcha is already available, render it.
    if (typeof window.grecaptcha !== 'undefined') {
      renderRecaptcha();
    } else {
      // Otherwise, wait for the script to load.
      // This is a fallback for race conditions, assuming the script is loaded in index.html.
      const intervalId = setInterval(() => {
        if (typeof window.grecaptcha !== 'undefined') {
          clearInterval(intervalId);
          renderRecaptcha();
        }
      }, 100);

      return () => clearInterval(intervalId);
    }

  }, [sitekey, onVerify]);
  
  return <div ref={recaptchaRef}></div>;
};

export default ReCaptchaV2;
