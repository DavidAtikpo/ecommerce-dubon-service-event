// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../../styles/pages/productPage.css';
// import Footer from '../../components/Footer';

// import BeforeFooter from '../../components/BeforeFooter';
// import { API_URL } from '../../config';

// const ProductManagement = () => {
//     const { productId } = useParams();
//     const navigate = useNavigate();
//     const [product, setProduct] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isEditing, setIsEditing] = useState(false); // Pour basculer entre l'affichage et l'édition
//     const [updatedProduct, setUpdatedProduct] = useState(null); // Données modifiées du produit

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const { data } = await axios.get(`${API_URL}/api/product/get-product/${productId}`);
//                 setProduct(data);
//                 setUpdatedProduct(data); // Initialiser les données modifiées avec les données existantes
//                 setIsLoading(false);
//             } catch (error) {
//                 console.error("Erreur lors de la récupération des détails du produit :", error);
//                 setIsLoading(false);
//             }
//         };
//         fetchProduct();
//     }, [productId]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setUpdatedProduct((prevProduct) => ({
//             ...prevProduct,
//             [name]: value,
//         }));
//     };

//     const handleSaveProduct = async () => {
//         try {
//             await axios.put(`${API_URL}/api/product/update-product/${productId}`, updatedProduct);
//             setProduct(updatedProduct); // Met à jour les données affichées
//             setIsEditing(false); // Quitter le mode édition
//             alert('Produit mis à jour avec succès');
//         } catch (error) {
//             console.error("Erreur lors de la mise à jour du produit :", error);
//             alert("Erreur lors de la mise à jour du produit.");
//         }
//     };

//     const handleDeleteProduct = async () => {
//         if (!window.confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) return;

//         try {
//             await axios.delete(`${API_URL}/api/product/delete-product/${productId}`);
//             alert("Produit supprimé avec succès.");
//             navigate('/admin/products'); // Redirige vers la liste des produits après suppression
//         } catch (error) {
//             console.error("Erreur lors de la suppression du produit :", error);
//             alert("Erreur lors de la suppression du produit.");
//         }
//     };

//     const handleEditProduct = () => {
//         setIsEditing(true);
//     };

//     const handleCancelEdit = () => {
//         setIsEditing(false);
//         setUpdatedProduct(product); // Annule les modifications
//     };

//     if (isLoading) {
//         return <div>Chargement...</div>;
//     }

//     if (!product) {
//         return <div>Produit introuvable.</div>;
//     }

//     return (
//         <div className="product-page">
//             <div className="product-container">
//                 <div className="product-details">
//                     {isEditing ? (
//                         <>
//                             <input
//                                 type="text"
//                                 name="title"
//                                 value={updatedProduct.title}
//                                 onChange={handleInputChange}
//                             />
//                             <textarea
//                                 name="description"
//                                 value={updatedProduct.description}
//                                 onChange={handleInputChange}
//                             />
//                             <input
//                                 type="number"
//                                 name="price"
//                                 value={updatedProduct.price}
//                                 onChange={handleInputChange}
//                             />
//                             <input
//                                 type="number"
//                                 name="discount"
//                                 value={updatedProduct.discount}
//                                 onChange={handleInputChange}
//                             />
//                             {/* Ajouter d'autres champs modifiables selon les besoins */}

//                             <div className="admin-actions">
//                                 <button className="save-product-btn" onClick={handleSaveProduct}>
//                                     Sauvegarder
//                                 </button>
//                                 <button className="cancel-edit-btn" onClick={handleCancelEdit}>
//                                     Annuler
//                                 </button>
//                             </div>
//                         </>
//                     ) : (
//                         <>
//                             <h1>{product.title}</h1>
//                             <p>{product.description}</p>
//                             <div className="product-price">
//                                 {product.discount ? (
//                                     <>
//                                         <span className="price-discount">{product.finalPrice} FCFA</span>
//                                         <span className="price-original">{product.price} FCFA</span>
//                                         <span className="price-percentage">-{product.discount}%</span>
//                                     </>
//                                 ) : (
//                                     <span className="price">{product.price} FCFA</span>
//                                 )}
//                             </div>

//                             <div className="admin-actions">
//                                 <button className="edit-product-btn" onClick={handleEditProduct}>
//                                     Modifier le produit
//                                 </button>
//                                 <button className="delete-product-btn" onClick={handleDeleteProduct}>
//                                     Supprimer le produit
//                                 </button>
//                             </div>
//                         </>
//                     )}
//                 </div>
//             </div>
//             <BeforeFooter />
//             <Footer />
//         </div>
//     );
// };

// export default ProductManagement;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductManagement.css';
import Footer from '../../components/Footer';
import BeforeFooter from '../../components/BeforeFooter';
import { API_URL } from '../../config';

const ProductManagement = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/product/get-product/${productId}`);
        setProduct(data);
        setUpdatedProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du produit:', error);
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (index, value) => {
    const newImages = [...updatedProduct.images];
    newImages[index] = value;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      images: newImages,
    }));
  };

  const addImageField = () => {
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      images: [...prevProduct.images, ''],
    }));
  };

  const removeImageField = (index) => {
    const newImages = updatedProduct.images.filter((_, i) => i !== index);
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      images: newImages,
    }));
  };

  const handleSaveProduct = async () => {
    try {
      await axios.put(`${API_URL}/api/product/update-product/${productId}`, updatedProduct);
      setProduct(updatedProduct);
      setIsEditing(false);
      alert('Produit mis à jour avec succès');
    } catch (error) {
      console.error('Erreur lors de la mise à jour du produit:', error);
      alert('Erreur lors de la mise à jour du produit.');
    }
  };

  const handleDeleteProduct = async () => {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) return;

    try {
      await axios.delete(`${API_URL}/api/product/delete-product/${productId}`);
      alert('Produit supprimé avec succès.');
      navigate('/admin/products');
    } catch (error) {
      console.error('Erreur lors de la suppression du produit:', error);
      alert('Erreur lors de la suppression du produit.');
    }
  };

  const handleEditProduct = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedProduct(product);
  };

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (!product) {
    return <div>Produit introuvable.</div>;
  }

  return (
    <div className="product-manager-page">
      <div className="product-manager-container">
        <div className="product-manager-details">
          {isEditing ? (
            
            <>
            <label>Titre</label>
              <input
                type="text"
                name="title"
                value={updatedProduct.title}
                onChange={handleInputChange}
              />
              <label>Description</label>
              <textarea
                name="description"
                value={updatedProduct.description}
                onChange={handleInputChange}
              />
              <label>Prix</label>
              <input
                type="number"
                name="price"
                value={updatedProduct.price}
                onChange={handleInputChange}
              />
              <label>Remise</label>
              <input
                type="number"
                name="discount"
                value={updatedProduct.discount}
                onChange={handleInputChange}
              />

              <div className="images-manager-section">
                <h3>Images</h3>
                {updatedProduct.images.map((image, index) => (
                  <div key={index} className="image-manager-field">
                    <label>Lien image</label>
                    <input
                      type="text"
                      value={image}
                      onChange={(e) => handleImageChange(index, e.target.value)}
                    />
                    <span type="button" onClick={() => removeImageField(index)}>
                      Supprimer
                    </span>
                  </div>
                ))}
                <span type="button" onClick={addImageField}>
                  Ajouter une image
                </span>
              </div>

              <div className="admin-manager-actions">
                <button onClick={handleSaveProduct}>Sauvegarder</button>
                <button onClick={handleCancelEdit}>Annuler</button>
              </div>
            </>
          ) : (
            <>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <div className="product-manager-price">
                {product.discount ? (
                  <>
                    <span className="price-manager-discount">{product.finalPrice} FCFA</span>
                    <span className="price-manager-original">{product.price} FCFA</span>
                    <span className="price-manager-percentage">-{product.discount}%</span>
                  </>
                ) : (
                  <span className="price-manager">{product.price} FCFA</span>
                )}
              </div>

              <div className="images-manager-section">
                <h3>Images</h3>
                {product.images.map((image, index) => (
                  <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
              </div>

              <div className="admin-manager-actions">
                <button className='edit-manager-product-btn' onClick={handleEditProduct}>Modifier</button>
                <button className='delete-manager-product-btn' onClick={handleDeleteProduct}>Supprimer</button>
              </div>
            </>
          )}
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default ProductManagement;
