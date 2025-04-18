import React, { useState, useEffect } from "react";
const ClickEffect = () => {
  const [clicks, setClicks] = useState([]);
  

  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const id = Date.now();

    setClicks((prev) => [...prev, { x, y, id }]);

    // Auto-remove after animation is done
    setTimeout(() => {
      setClicks((prev) => prev.filter((click) => click.id !== id));
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[9999] pointer-events-none">
      {clicks.map(({ x, y, id }) => (
        <Ripple x={x} y={y} key={id} />
      ))}
    </div>
  );
};

const Ripple = ({ x, y }) => {
  return (
    <div
      className="absolute"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute block w-2 h-2 rounded-full bg-white opacity-60 animate-ripple"
          style={{
            animationDelay: `${i * 0.2}s`,
          }}
        ></span>
      ))}
    </div>
  );
};
export default ClickEffect;
