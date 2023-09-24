import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'; // Step 2
import { getProductDetails } from '../../Redux/Product/ProductAction';

const ProductDetail = () => {
  const dispatch = useDispatch();

  const { product } = useSelector(state => state.details);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  if (!product || Object.keys(product).length === 0) {
    return <div className="product-detail">Product not found</div>;
  }

  const rawHTML = `${product.description}`;

  return (
    <motion.div
      className="product-detail"
      initial={{ opacity: 0, y: 20 }} // Initial animation values
      animate={{ opacity: 1, y: 0 }} // Animation on mount
      transition={{ duration: 0.5 }} // Animation duration
    >
        <div className='row_1'>
      <div className="product-image">
        <motion.img
          src={product.images[0].url}
          alt={product.name}
          initial={{ opacity: 0, y: 20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation on mount
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
        />
      </div>
      <div className="product-info">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation on mount
          transition={{ duration: 0.5, delay: 0.4 }} // Animation duration and delay
        >
          {product.name}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation on mount
          transition={{ duration: 0.5, delay: 0.8 }} // Animation duration and delay
        >
          Price: ₹{product.price}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation on mount
          transition={{ duration: 0.5, delay: 1 }} // Animation duration and delay
        >
          Stock: {product.Stock}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation on mount
          transition={{ duration: 0.5, delay: 1.2 }} // Animation duration and delay
        >
          Category: {product.category}
        </motion.p>
        
      </div>
      </div>
      <motion.p
          initial={{ opacity: 0, y: 20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation on mount
          transition={{ duration: 0.5, delay: 0.6 }} // Animation duration and delay
        >
           <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
          
        </motion.p>
    </motion.div>
  );
};

export default ProductDetail;
