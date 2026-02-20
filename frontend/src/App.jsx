import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaWrench, 
  FaCog, 
  FaClock, 
  FaEnvelope,
  FaCheckCircle 
} from "react-icons/fa";
import "./App.css";

// Gear Component
function Gear({ rotationSpeed, direction, className, initialRotate = 0 }) {
  return (
    <motion.div
      initial={{ rotate: initialRotate }}
      animate={{ rotate: direction === "clockwise" ? 360 : -360 }}
      transition={{ 
        repeat: Infinity, 
        duration: rotationSpeed, 
        ease: "linear" 
      }}
      className={`gear ${className}`}
    >
      <FaCog className="gear-icon" />
      <span className="gear-hub" aria-hidden="true" />
      <span className="gear-hubCenter" aria-hidden="true" />
    </motion.div>
  );
}

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const year = time.getFullYear();
  const timeString = time.toLocaleTimeString();

  const features = [
    { icon: <FaWrench />, text: "System Updates" },
    { icon: <FaCog />, text: "Performance Optimization" },
    { icon: <FaCheckCircle />, text: "Security Enhancements" },
  ];

  return (
    <div className="maintenance-wrapper">
      {/* Background gradient */}
      <div className="gradient-bg"></div>
      
      {/* Animated background elements */}
      <div className="bg-pattern">
        <div className="pattern-circle"></div>
        <div className="pattern-circle"></div>
        <div className="pattern-circle"></div>
      </div>

      <div className="content-container">
        {/* Main Icon - Two Meshing Gears */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, y: [0, -6, 0] }}
          transition={{
            scale: { duration: 0.5, type: "spring" },
            y: { duration: 2.4, ease: "easeInOut", repeat: Infinity },
          }}
          className="gears-container"
        >
          {/* Larger Gear - Left side, rotates clockwise */}
          <Gear 
            rotationSpeed={4} 
            direction="clockwise"
            className="gear-large"
            initialRotate={0}
          />
          
          {/* Smaller Gear - Right side, meshing with larger gear, rotates counter-clockwise */}
          <Gear 
            rotationSpeed={3} 
            direction="counter-clockwise"
            className="gear-small"
            initialRotate={18}
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="main-content"
        >
          <h1 className="main-headline">
            We're Performing Scheduled Maintenance
          </h1>
          <p className="main-description">
            Our website is currently undergoing essential updates and improvements 
            to provide you with a better experience. We'll be back online shortly.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="features-grid"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              className="feature-card"
            >
              <div className="feature-icon">{feature.icon}</div>
              <p className="feature-text">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Status Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="status-bar"
        >
          <div className="status-content">
            <FaClock className="status-icon" />
            <span className="status-text">
              Estimated completion: {timeString}
            </span>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="footer">
          <p className="footer-text">
            &copy; {year} All rights reserved.
            <span className="footer-separator"> • </span>
            <span className="footer-time">{timeString}</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
