// import React, { useState, useEffect } from 'react';
// import { Box, Button, Menu, MenuItem, Tab, Tabs } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import axios from 'axios';
// import { API_URL } from '../config';
// import { useNavigate } from 'react-router-dom';
// import './categorieNavBar.css'

// const CategoryNavigationBar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [ setCategories] = useState([]);
//   const [moreCategories, setMoreCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // État pour mobile
//   const [accordionOpen, setAccordionOpen] = useState(false); // Contrôler l'accordéon

//   const Navigate = useNavigate();

//   const fixedTabs = ['TOUTES CATEGORIES', 'EVENEMENT', 'SERVICES', 'FORMATION', 'E-RESTAURANT'];

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/api/categories`);
//         const fetchedCategories = response.data;

//         setCategories(fetchedCategories.slice(0, 3));
//         setMoreCategories(fetchedCategories.slice(3));

//         if (selectedTab === 0) {
//           setProducts(fetchedCategories);
//         }
//       } catch (error) {
//         console.error("Erreur lors de la récupération des catégories :", error);
//       }
//     };

//     fetchCategories();
    
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   });

//   const handleCategorie = (categorieName) => {
//     Navigate(`/category/${categorieName}`);
//   };

//   const handleTabChange = async (event, newValue) => {
//     setSelectedTab(newValue);

//     if (newValue === 0) {
//       const response = await axios.get(`${API_URL}/api/categories`);
//       setProducts(response.data);
//     } else {
//       const tabName = fixedTabs[newValue];
//       try {
//         const response = await axios.get(`${API_URL}/api/products?category=${tabName}`);
//         setProducts(response.data);
//       } catch (error) {
//         console.error(`Erreur lors de la récupération des produits pour ${tabName} :`, error);
//         setProducts([]);
//       }
//     }
//   };

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const toggleAccordion = () => {
//     setAccordionOpen(!accordionOpen);
//   };

//   return (
//     <Box sx={{ borderBottom: 1, borderColor: 'divider', padding: '10px' }}>
//       {isMobile ? (
//         <>
//           {/* Menu accordéon pour mobile */}
//           <Button className="accordion-button" onClick={toggleAccordion}>
//             Catégories <ExpandMoreIcon />
//           </Button>
//           <Box className={`accordion ${accordionOpen ? 'active' : ''}`}>
//             {fixedTabs.map((tab, index) => (
//               <Button key={index} onClick={() => handleTabChange(null, index)} className="accordion-button">
//                 {tab}
//               </Button>
//             ))}
//             {moreCategories.length > 0 && (
//               <Button onClick={handleClick} className="accordion-button">
//                 Voir plus <ExpandMoreIcon />
//               </Button>
//             )}
//           </Box>
//         </>
//       ) : (
//         <Tabs value={selectedTab} onChange={handleTabChange} textColor="primary" indicatorColor="primary" aria-label="category tabs">
//           {fixedTabs.map((tab, index) => (
//             <Tab key={index} label={tab} />
//           ))}
//           {moreCategories.length > 0 && (
//             <Tab label={<><ExpandMoreIcon /> Voir plus</>} onClick={handleClick} />
//           )}
//         </Tabs>
//       )}

//       <Menu id="more-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
//         {moreCategories.map((category, index) => (
//           <MenuItem key={index} onClick={() => {
//             handleClose();
//             setSelectedTab(fixedTabs.length);
//             handleCategorie(category);
//           }}>
//             {category}
//           </MenuItem>
//         ))}
//       </Menu>

//       <Box className="tabs-container">
//         {products.length > 0 ? (
//           products.map((product, index) => (
//             <Button key={index} variant="outlined" onClick={() => handleCategorie(product)} className="product-button">
//               {product}
//             </Button>
//           ))
//         ) : (
//           <Button variant="outlined">Aucune catégorie disponible</Button>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default CategoryNavigationBar;


// 


// import React, { useState } from 'react';
// import './categorieNavBar.css';

// const categories = [
//   { name: 'Supermarket', subCategories: ['Grains & Rice', 'Canned Foods', 'Candy & Chocolate', 'Beverages'] },
//   { name: 'Phones & Tablets', subCategories: ['Smartphones', 'Tablets'] },
//   { name: 'Health & Beauty', subCategories: ['Makeup', 'Skincare', 'Fragrances'] },
//   { name: 'Home & Office', subCategories: ['Furniture', 'Stationery'] },
//   { name: 'Appliances', subCategories: ['Refrigerators', 'Washing Machines'] },
//   { name: 'Electronics', subCategories: ['Televisions', 'Laptops'] },
//   { name: 'Computing', subCategories: ['Desktops', 'Monitors'] },
//   { name: 'Fashion', subCategories: ['Men', 'Women', 'Kids'] },
//   { name: 'Sporting Goods', subCategories: ['Gym Equipment', 'Sportswear'] },
//   { name: 'Baby Products', subCategories: ['Toys', 'Clothes'] },
//   { name: 'Gaming', subCategories: ['Consoles', 'Games'] },
// ];

// const CategoryNavigationBar = () => {
//   return (
//     <div className="category-navigation">
//       <ul className="category-list">
//         {categories.map((category, index) => (
//           <li key={index} className="category-item">
//             <a href="#" className="category-link">{category.name}</a>
//             <div className="sub-menu">
//               {category.subCategories.map((subCategory, idx) => (
//                 <a key={idx} href="#" className="sub-category-link">{subCategory}</a>
//               ))}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CategoryNavigationBar;

// import React, { useState, useEffect } from 'react';
// import { Box, Tabs, Tab, List, ListItem, ListItemText } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// // Onglets fixes (ne venant pas du backend)
// const fixedTabs = [
//   { name: 'Produit', subcategories: [], Title: [] },
//   { name: 'Evenement', subcategories: [], Title: [] },
//   { name: 'Formation', subcategories: [], Title: [] },
//   { name: 'E-Restaurant', subcategories: [], Title: [] },
//   { name: 'Service', subcategories: [], Title: [] },
//   { name: 'Autres', subcategories: [], Title: [] },
// ];

// const CategoryNavigationBar = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedTab, setSelectedTab] = useState(0); // Onglet sélectionné
//   const [openCategory, setOpenCategory] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Récupération des catégories dynamiques du backend
//     axios.get('/api/categories')
//       .then((response) => {
//         setCategories(response.data);
//       })
//       .catch((error) => {
//         console.error('Erreur lors de la récupération des catégories:', error);
//       });
//   }, []);

//   const handleMouseEnter = (categoryName) => {
//     setOpenCategory(categoryName);
//   };

//   const handleMouseLeave = () => {
//     setOpenCategory(null);
//   };

//   const handleSubcategoryClick = (subcategory) => {
//     navigate(`/subcategory/${subcategory}`);
//   };

//   const handleTitleClick = (title) => {
//     navigate(`/title/${title}`);
//   };

//   const handleTabChange = (event, newValue) => {
//     setSelectedTab(newValue);
//   };

//   return (
//     <Box display="flex">
//       {/* Onglets pour les catégories principales */}
//       <Tabs
//         orientation="vertical"
//         value={selectedTab}
//         onChange={handleTabChange}
//         sx={{ borderRight: 1, borderColor: 'divider', width: '200px', backgroundColor: '#f5f5f5' }}
//       >
//         {/* Onglets fixes */}
//         {fixedTabs.map((tab, index) => (
//           <Tab
//             key={index}
//             label={tab.name}
//             onMouseEnter={() => handleMouseEnter(tab.name)}
//           />
//         ))}

//         {/* Catégories provenant du backend */}
//         {categories.map((category, index) => (
//           <Tab
//             key={index + fixedTabs.length} // Pour éviter les collisions d'index avec les onglets fixes
//             label={category.name}
//             onMouseEnter={() => handleMouseEnter(category.name)}
//           />
//         ))}
//       </Tabs>

//       {/* Sous-catégories et titres affichés en fonction de l'onglet sélectionné */}
//       {openCategory && (
//         <Box sx={{ marginLeft: '10px', backgroundColor: '#ffffff', border: '1px solid #ddd', padding: '10px', minWidth: '300px' }}>
//           {/* Sous-catégories et titres pour les onglets fixes */}
//           {fixedTabs
//             .filter(tab => tab.name === openCategory)
//             .map((tab, index) => (
//               <Box key={index}>
//                 {tab.subcategories.length > 0 && (
//                   <List>
//                     <ListItemText primary="Subcategories:" />
//                     {tab.subcategories.map((subcategory, subIndex) => (
//                       <ListItem button key={subIndex} onClick={() => handleSubcategoryClick(subcategory)}>
//                         <ListItemText primary={subcategory} />
//                       </ListItem>
//                     ))}
//                   </List>
//                 )}
//                 {tab.Title.length > 0 && (
//                   <List>
//                     <ListItemText primary="Titles:" />
//                     {tab.Title.map((title, titleIndex) => (
//                       <ListItem button key={titleIndex} onClick={() => handleTitleClick(title)}>
//                         <ListItemText primary={title} />
//                       </ListItem>
//                     ))}
//                   </List>
//                 )}
//               </Box>
//             ))}

//           {/* Sous-catégories et titres pour les catégories provenant du backend */}
//           {categories
//             .filter(category => category.name === openCategory)
//             .map((category, index) => (
//               <Box key={index}>
//                 {category.subcategories.length > 0 && (
//                   <List>
//                     <ListItemText primary="Subcategories:" />
//                     {category.subcategories.map((subcategory, subIndex) => (
//                       <ListItem button key={subIndex} onClick={() => handleSubcategoryClick(subcategory)}>
//                         <ListItemText primary={subcategory} />
//                       </ListItem>
//                     ))}
//                   </List>
//                 )}
//                 {category.Title.length > 0 && (
//                   <List>
//                     <ListItemText primary="Titles:" />
//                     {category.Title.map((title, titleIndex) => (
//                       <ListItem button key={titleIndex} onClick={() => handleTitleClick(title)}>
//                         <ListItemText primary={title} />
//                       </ListItem>
//                     ))}
//                   </List>
//                 )}
//               </Box>
//             ))}
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default CategoryNavigationBar;



import React, { useState, useEffect } from 'react';
import { Box, Tabs, Tab, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './categorieNavBar.css'
import { API_URL } from '../config';

// Importation des icônes de Material UI
import StoreIcon from '@mui/icons-material/Store';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BuildIcon from '@mui/icons-material/Build';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// Onglets fixes (ne venant pas du backend)
const fixedTabs = [
  { name: 'Produit', icon: <StoreIcon />, subcategories: [], Title: [] },
  { name: 'Evenement', icon: <EventIcon />, subcategories: [], Title: [] },
  { name: 'Formation', icon: <SchoolIcon />, subcategories: [], Title: [] },
  { name: 'E-Restaurant', icon: <RestaurantIcon />, subcategories: [], Title: [] },
  { name: 'Service', icon: <BuildIcon />, subcategories: [], Title: [] },
  { name: 'Autres', icon: <MoreHorizIcon />, subcategories: [], Title: [] },
];

const CategoryNavigationBar = () => {
  const [categories, setCategories] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0); // Onglet sélectionné
  const [openCategory, setOpenCategory] = useState(null);
  const [hovering, setHovering] = useState(false); // Pour suivre si l'utilisateur est sur l'accordéon
  const navigate = useNavigate();

  useEffect(() => {
    // Récupération des catégories dynamiques du backend
    axios.get(`${API_URL}/api/categories`)
      .then((response) => {
        setCategories(response.data);
        console.log('category',setCategories);
      })
      
      .catch((error) => {
        console.error('Erreur lors de la récupération des catégories:', error);
      });
  }, []);

  const handleMouseEnter = (categoryName) => {
    setOpenCategory(categoryName);
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setTimeout(() => {
      if (!hovering) setOpenCategory(null); // Fermer l'accordéon si le curseur est sorti
    }, 1); // Délais de fermeture pour une meilleure expérience utilisateur
  };

  const handleSubcategoryClick = (subcategory) => {
    navigate(`/subcategory/${subcategory}`);
  };

  const handleTitleClick = (title) => {
    navigate(`/title/${title}`);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box display="flex" onMouseLeave={handleMouseLeave}>
      {/* Onglets pour les catégories principales */}
      <Tabs
        orientation="vertical"
        value={selectedTab}
        onChange={handleTabChange}
        sx={{ borderRight:1,height:'450px',marginLeft:'20px',marginTop:'-440px', fontSize:"1px", borderColor: 'divider', width: '200px', backgroundColor: '#f5f5f5' }}
      >
        {/* Onglets fixes avec icônes */}
        {fixedTabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.name}
            icon={tab.icon}
            onMouseEnter={() => handleMouseEnter(tab.name)}
          />
        ))}

        {/* Catégories provenant du backend */}
        {categories.map((category, index) => (
          <Tab
            key={index + fixedTabs.length} // Pour éviter les collisions d'index avec les onglets fixes
            label={category.name}
            onMouseEnter={() => handleMouseEnter(category.name)}
          />
        ))}
      </Tabs>

      {/* Sous-catégories et titres affichés en fonction de l'onglet sélectionné */}
      {openCategory && (
        <Box
          sx={{ marginLeft: '5px',marginTop:'-440px', backgroundColor: '#ffffff', border: '1px solid #ddd', padding: '10px', minWidth: '300px' }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Sous-catégories et titres pour les onglets fixes */}
          {fixedTabs
            .filter(tab => tab.name === openCategory)
            .map((tab, index) => (
              <Box key={index}>
                {tab.subcategories.length > 0 && (
                  <List>
                    <ListItemText primary="Subcategories:" />
                    {tab.subcategories.map((subcategory, subIndex) => (
                      <ListItem button key={subIndex} onClick={() => handleSubcategoryClick(subcategory)}>
                        <ListItemText primary={subcategory} />
                      </ListItem>
                    ))}
                  </List>
                )}
                {tab.Title.length > 0 && (
                  <List>
                    <ListItemText primary="Titles:" />
                    {tab.Title.map((title, titleIndex) => (
                      <ListItem button key={titleIndex} onClick={() => handleTitleClick(title)}>
                        <ListItemText primary={title} />
                      </ListItem>
                    ))}
                  </List>
                )}
              </Box>
            ))}

          {/* Sous-catégories et titres pour les catégories provenant du backend */}
          {categories
            .filter(category => category.name === openCategory)
            .map((category, index) => (
              <Box key={index}>
                {category.subcategories.length > 0 && (
                  <List>
                    <ListItemText primary="Subcategories:" />
                    {category.category.map((subcategory, subIndex) => (
                      <ListItem button key={subIndex} onClick={() => handleSubcategoryClick(subcategory)}>
                        <ListItemText primary={subcategory} />
                      </ListItem>
                    ))}
                  </List>
                )}
                {category.Title.length > 0 && (
                  <List>
                    <ListItemText primary="Titles:" />
                    {category.Title.map((title, titleIndex) => (
                      <ListItem button key={titleIndex} onClick={() => handleTitleClick(title)}>
                        <ListItemText primary={title} />
                      </ListItem>
                    ))}
                  </List>
                )}
              </Box>
            ))}
        </Box>
      )}
    </Box>
  );
};

export default CategoryNavigationBar;
