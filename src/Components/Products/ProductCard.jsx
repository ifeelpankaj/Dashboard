
import React from "react";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {LiaBanSolid} from "react-icons/lia";

const ProductCard = ({ productId, category, Stock, name, avatar, price }) => {



  return (
    <motion.div
      className="productCard"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/product/${productId}`}>
      <div>
      {avatar ? (
        <motion.img
          src={avatar}
          alt={name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ width: "15vw", marginRight: "1rem" }}
        />
      ) : (
        <LiaBanSolid size={40} color="gray" /> // Render an icon (e.g., user icon) as a placeholder
      )}
    </div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontWeight: 300,
            fontSize: "1.4rem",
            padding: "1rem",
            borderLeft: "1px dashed $black",
            width: "25vw",
          }}
        >
          {name}
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "1px",
              color: "$color1",
            }}
          >
            Product Id: {productId}
          </p>
        </motion.h3>
      </Link>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          padding: "2rem",
          borderLeft: "1px dashed $black",
          width: "10vw",
        }}
      >
        <span style={{ fontSize: "larger", color: "$black" }}> ₹{price}</span>
      </motion.p>

      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          padding: "2rem",
          fontSize: "larger",
          borderLeft: "1px dashed $black",
          width: "10vw",
        }}
      >
        {category}
      </motion.h4>

      <motion.h5
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{
          padding: "2rem",
          fontSize: "larger",
          borderLeft: "1px dashed $black",
          borderRight: "1px dashed $black",
          width: "10vw",
        }}
      >
        {Stock}
      </motion.h5>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ display: "flex" }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link to={`/product/${productId}`}>
          <Button>Action</Button>
          </Link>
        </motion.div>

        
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
