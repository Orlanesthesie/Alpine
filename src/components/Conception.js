import React, { useEffect, useRef, useState } from "react";
import "../css/Home.css";

const Conception = () => {
  const containerRef = useRef(null);
  const handleRef = useRef(null);
  const afterImageRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const handle = handleRef.current;
    const afterImage = afterImageRef.current;
    const initialPercentage = 50;

    const updateSlider = (percentage) => {
      handle.style.left = `${percentage}%`;
      afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    };

    updateSlider(initialPercentage);

    const handleMouseDown = (e) => {
      setDragging(true);
      e.preventDefault();
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    const handleMouseMove = (e) => {
      if (!dragging) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      let widthPercentage = (x / rect.width) * 100;
      widthPercentage = Math.max(0, Math.min(widthPercentage, 100));
      updateSlider(widthPercentage);
    };

    handle.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    // Mobile events
    const handleTouchStart = (e) => {
      setDragging(true);
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      setDragging(false);
    };

    const handleTouchMove = (e) => {
      if (!dragging) return;
      const rect = container.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      let widthPercentage = (x / rect.width) * 100;
      widthPercentage = Math.max(0, Math.min(widthPercentage, 100));
      updateSlider(widthPercentage);
    };

    handle.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      handle.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
      handle.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [dragging]);

  return (
    <div className="text-danger">
      <style>
        {`
          .slider-before, .slider-after {
            user-select: none;
          }
        `}
      </style>

      <div className="custom-image-slider" ref={containerRef}>
        <img
          className="slider-before"
          src="/images/sources-homepage/conception/alpine-bone.jpg"
          alt="Before"
        />
        <img
          className="slider-after"
          src="/images/sources-homepage/conception/alpine-skin.jpg"
          alt="After"
          ref={afterImageRef}
        />
        <div className="slider-handle" ref={handleRef}></div>
      </div>
    </div>
  );
};

export default Conception;
