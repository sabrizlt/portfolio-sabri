import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        // Allineamento perfetto sulla punta della freccia
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform drop-shadow-[0_2px_10px_rgba(16,185,129,0.3)]"
    >
      {/* Freccia classica pulita, ingrandita e senza linee sotto */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 2V18.7L9.3 14.4L13.8 22L16.8 20.2L12.4 12.8L18.5 12.8L4.5 2Z"
          fill="#10b981"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinejoin="miter"
        />
      </svg>
    </div>
  );
}