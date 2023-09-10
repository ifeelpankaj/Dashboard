import React from "react";
import SidNav from "./SidNav"; // Import your SidNav component
import MainDash from "./MainDash"; // Import your MainDash component
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.section
      className="mainDash"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SidNav />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <MainDash />
      </motion.div>
    </motion.section>
  );
};

export default Dashboard;
