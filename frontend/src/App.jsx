import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const year = time.getFullYear();
  const timeString = time.toLocaleTimeString();

  return (
    <div className="wrapper">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="gear-icon"
      >
        <FaTools size={100} />
      </motion.div>
      <h1 className="headline">We'll Be Back Soon!</h1>
      <p className="description">
        We're currently making some improvements to bring you a better experience.
        <br />
        Our team is working hard behind the scenes. 🚧
      </p>
      <p className="comeback">
        Please check back shortly. Thanks for your patience! 💜
      </p>

      {/* Footer Section */}
      <footer className="footer">
        <p>
          &copy; {year} mossZmossZ. All rights reserved.
          <br />
          ⏰ {timeString}
        </p>
      </footer>
    </div>
  );
}

export default App;
