import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrame = useRef(null);

  useEffect(() => {
    // Disattiva completamente il cursore sui dispositivi touch/mobile
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) {
      return;
    }

    const moveCursor = (e) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };

      if (!animationFrame.current) {
        animationFrame.current = requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(
              ${mousePosition.current.x}px,
              ${mousePosition.current.y}px,
              0
            )`;
          }

          animationFrame.current = null;
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  // Non renderizzare il cursore su mobile/touch
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: none), (pointer: coarse)').matches
  ) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        margin: 0,
        padding: 0,
        filter: 'none',
        boxShadow: 'none',
        willChange: 'transform',
      }}
    >
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