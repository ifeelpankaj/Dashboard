import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'

const UserCard = ({userId,avatar,role,name,cart,wishlist}) => {
    const dispatch =useDispatch();

  return (
    <motion.div
      className="productCard"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/user/${userId}`}>
        <motion.img
          src={avatar}
          alt={name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ width: "15vw", marginRight: "1rem" }}
        />

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
            User Id: {userId}
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
        <span style={{ fontSize: "larger", color: "$black" }}> {role}</span>
      </motion.p>


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
        {cart}
      </motion.h5>
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
        {wishlist}
      </motion.h5>
      {/* <motion.div
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
          <Button onClick={handleUpdate}>Update</Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            isDisabled={loading}
            isLoading={loading}
            onClick={handleDelete}
            colorScheme="red"
          >
            Delete
          </Button>
        </motion.div>
      </motion.div> */}
    </motion.div>
  )
}

export default UserCard