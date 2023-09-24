
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'; // Step 2
import { getProductDetails } from '../../Redux/Product/ProductAction';

// const ProductDetail = () => {
//   const dispatch = useDispatch();

//   const [name, setName] = useState("");
//   const [images, setSelectedImages] = useState([]); // Use a different name for the state variable
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [Stock, setStock] = useState("");
//   const [imagePreview, setImagePreview] = useState([]);


//   const { product } = useSelector((state) => state.details);

//   const { id } = useParams();

//   useEffect(() => {
//     dispatch(getProductDetails(id));
//   }, [dispatch, id]);

//   if (!product || Object.keys(product).length === 0) {
//     return <div className="product-detail">Product not found</div>;
//   }

//   const rawHTML = `${product.description}`;

//   const updateProductSubmitHandler = (e) => {
//     e.preventDefault();

//     const myForm = new FormData();

//     myForm.set("name", name);
//     myForm.set("price", price);
//     myForm.set("description", description);
//     myForm.set("category", category);
//     myForm.set("Stock", Stock);

//     images.forEach((image) => {
//       myForm.append("images", image);
//     });
//     dispatch(updateProduct(productId, myForm));
//   };

//   const updateProductImagesChange = (e) => {
//     const files = Array.from(e.target.files);

//     setImages([]);
//     setImagesPreview([]);
//     setOldImages([]);

//     files.forEach((file) => {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setImagesPreview((old) => [...old, reader.result]);
//           setImages((old) => [...old, reader.result]);
//         }
//       };

//       reader.readAsDataURL(file);
//     });
//   };

  

//   return (
//     <motion.div
//       className="product-detail"
//       initial={{ opacity: 0, y: 20 }} 
//       animate={{ opacity: 1, y: 0 }} 
//       transition={{ duration: 0.5 }} 
//     >
//       <form
//             className="createProductForm"
//             encType="multipart/form-data"
//             onSubmit={updateProductSubmitHandler}
//           >
//       <div className="row_1">
//         <div className="product-image">
//         <div id="createProductFormImage">
//               {oldImages &&
//                 oldImages.map((image, index) => (
//                   <img key={index} src={image.url} alt="Old Product Preview" />
//                 ))}
//             </div>

//             <div id="createProductFormImage">
//               {imagesPreview.map((image, index) => (
//                 <img key={index} src={image} alt="Product Preview" />
//               ))}
//             </div>
//         </div>
//         <div className="product-info">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }} // Initial animation values
//             animate={{ opacity: 1, y: 0 }} // Animation on mount
//             transition={{ duration: 0.5, delay: 0.4 }} // Animation duration and delay
//           >
//           <input
//                 type="text"
//                 placeholder="Product Name"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }} // Initial animation values
//             animate={{ opacity: 1, y: 0 }} // Animation on mount
//             transition={{ duration: 0.5, delay: 0.8 }} // Animation duration and delay
//           >
//             <input
//                 type="number"
//                 placeholder="Price"
//                 required
//                 onChange={(e) => setPrice(e.target.value)}
//                 value={price}
//               />
//           </motion.p>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }} // Initial animation values
//             animate={{ opacity: 1, y: 0 }} // Animation on mount
//             transition={{ duration: 0.5, delay: 1 }} // Animation duration and delay
//           >
//              <input
//                 type="number"
//                 placeholder="Stock"
//                 required
//                 onChange={(e) => setStock(e.target.value)}
//                 value={Stock}
//               />
//           </motion.p>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }} // Initial animation values
//             animate={{ opacity: 1, y: 0 }} // Animation on mount
//             transition={{ duration: 0.5, delay: 1.2 }} // Animation duration and delay
//           >
//             <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               >
//                 <option value="">Choose Category</option>
//                 {categories.map((cate) => (
//                   <option key={cate} value={cate}>
//                     {cate}
//                   </option>
//                 ))}
//               </select>
//           </motion.p>
//         </div>
//       </div>
//       <motion.p
//         initial={{ opacity: 0, y: 20 }} // Initial animation values
//         animate={{ opacity: 1, y: 0 }} // Animation on mount
//         transition={{ duration: 0.5, delay: 0.6 }} // Animation duration and delay
//       >
//         <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
//         <textarea
//                 placeholder="Product Description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 cols="30"
//                 rows="1"
//               ></textarea>
//       </motion.p>
//       </form>
//     </motion.div>
//   );
// };
const ProductDetail = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.details);
  const { id } = useParams();

  const [name, setName] = useState('');
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [imagePreview, setImagePreview] = useState([]);
  const [oldImages, setOldImages] = useState([]);

  const categories = [
    "Attar",
    "Surma",
    "Others",
    "Dhoop",
    "M-special",
  ];

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    // Set initial values for the fields based on the product data
    if (product) {
      setName(product.name || '');
      setDescription(product.description || '');
      setPrice(product.price || '');
      setCategory(product.category || '');
      setStock(product.stock || '');
      setOldImages(product.oldImages || []);
      setImagePreview(product.imagePreview || []);
    }
  }, [product]);

  const rawHTML = `${description}`;

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.set('name', name);
    formData.set('price', price);
    formData.set('description', description);
    formData.set('category', category);
    formData.set('stock', stock);

    images.forEach((image) => {
      formData.append('images', image);
    });

    dispatch(updateProduct(id, formData)); // Assuming `productId` should be `id`
  };

  const updateProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagePreview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  if (!product || Object.keys(product).length === 0) {
    return <div className="product-detail">Product not found</div>;
  }

  return (
    <motion.div
      className="product-detail"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form
        className="createProductForm"
        encType="multipart/form-data"
        onSubmit={updateProductSubmitHandler}
      >
        <div className="row_1">
          <div className="product-image">
            <div id="createProductFormImage">
              {oldImages &&
                oldImages.map((image, index) => (
                  <img key={index} src={image.url} alt="Old Product Preview" />
                ))}
            </div>

            <div id="createProductFormImage">
              {imagePreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={updateProductImagesChange}
            />
          </div>
          <div className="product-info">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <input
                type="number"
                placeholder="Price"
                required
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <input
                type="number"
                placeholder="Stock"
                required
                onChange={(e) => setStock(e.target.value)}
                value={stock}
              />
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </motion.p>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div> */}
          <textarea
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            cols="100"
            rows="5"
          ></textarea>
        </motion.p>
        <button type="submit">Update Product</button>
      </form>
    </motion.div>
  );
};
export default ProductDetail;
