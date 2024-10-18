// import React, { useState } from 'react';
// import { Box, Grid, Typography, Button, List, ListItem, ListItemText, IconButton, Drawer } from '@mui/material';
// import { PhoneAndroid, ShoppingBasket, LocalOffer, Menu as MenuIcon } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// const SalesPage = () => {
//   const [hoveredCategory, setHoveredCategory] = useState(null);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const Navigate = useNavigate()

//   const handleMouseOver = (category) => {
//     setHoveredCategory(category);
//   };

//   const handleMouseOut = () => {
//     setHoveredCategory(null);
//   };

//   const toggleDrawer = (open) => () => {
//     setIsDrawerOpen(open);
//   };

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Grid container spacing={2}>
//         {/* Sidebar - Categories for Desktop */}
//         <Grid item xs={12} md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
//           <Box sx={{ backgroundColor: '#ffff', padding: 2, borderRadius: '8px' }}>
//             <Typography variant="h6" gutterBottom>DUBON SERVICE</Typography>
//             <List>
//               {['Categories des Produit', 'Evenement', 'Formation', 'E-restaurant', 'Service', 'Autres'].map((category, index) => (
//                 <ListItem
//                   button
//                   key={index}
//                   onMouseOver={() => handleMouseOver(category)}
//                 >
//                   <ListItemText primary={category} />
//                 </ListItem>
//               ))}
//             </List>
//           </Box>
//         </Grid>

//         {/* Hamburger Menu for Mobile */}
//         <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
//           <IconButton onClick={toggleDrawer(true)}>
//             <MenuIcon />
//           </IconButton>
//           <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
//             <Box sx={{ width: 250, padding: 2 }}>
//               <Typography variant="h6" gutterBottom>DUBON SERVICE</Typography>
//               <List>
//                 {['Categories des Produit', 'Evenement', 'Formation', 'E-restaurant', 'Service', 'Autres'].map((category, index) => (
//                   <ListItem button key={index}>
//                     <ListItemText primary={category} />
//                   </ListItem>
//                 ))}
//               </List>
//             </Box>
//           </Drawer>
//         </Grid>

//         {/* Main banner */}
//         <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
//           <Box sx={{ position: 'relative' }}>
//             <img
//               src="https://via.placeholder.com/600x300.png?text=OCTOBER+SALES+-+UP+TO+60%25+OFF"
//               alt="October Sales"
//               style={{ width: '100%', borderRadius: '8px' }}
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ position: 'absolute', bottom: 20, right: 0 }}
//             >
//               Passez Commandes
//             </Button>
//           </Box>
//           {/* Dropdown based on hovered category for Desktop */}
//           {hoveredCategory && (
//             <Box
//               onMouseLeave={handleMouseOut}
//               sx={{
//                 position: 'absolute',
//                 top: 15,
//                 left: 0,
//                 width: '98%',
//                 height: '91%',
//                 backgroundColor: '#fff',
//                 padding: 1,
//                 border: '1px solid #ccc',
//                 boxShadow: 3,
//                 borderRadius: '8px',
//                 zIndex: 10,
//               }}
//             >
//               <Typography variant="body1">Options for: {hoveredCategory}</Typography>
//               <List>
//                 <ListItem button>
//                   <ListItemText primary="Option 1" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="Option 2" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="Option 3" />
//                 </ListItem>
//               </List>
//             </Box>
//           )}
//         </Grid>

//         {/* Right action section */}
//         <Grid item xs={12} md={3}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             <Button
//               variant="outlined"
//               sx={{ textTransform: 'none', justifyContent: 'flex-start' }}
//               startIcon={<PhoneAndroid />}
//             >
//               Contactez-nous: +229 00 00 00 00
//             </Button>
//             <Button
//               variant="outlined"
//               sx={{ textTransform: 'none', justifyContent: 'flex-start' }}
//               startIcon={<ShoppingBasket />}
//             >
//               Voir tes commandes
//             </Button>
//             <Button
//               variant="outlined"
//               sx={{ textTransform: 'none', justifyContent: 'flex-start' }}
//               startIcon={<LocalOffer />}
//             >
//               Devenir vendeur
//             </Button>
//             <Box sx={{ marginTop: 2, padding: 2, backgroundColor: '#f0f0f0', borderRadius: '8px', textAlign: 'center' }}>
//   <img
//     src="https://via.placeholder.com/300x150.png?text=PUBLICITE+-+OFFRES+EXCLUSIVES"
//     alt="Publicité Offres Exclusives"
//     style={{ width: '100%', borderRadius: '8px', marginBottom: '8px' }}
//   />
//   <Button variant="contained" color="primary">En savoir plus</Button>
// </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default SalesPage;

// import React, { useState, useEffect } from 'react';
// import { Box, Grid, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import { PhoneAndroid, ShoppingBasket, LocalOffer, Menu as MenuIcon } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';

// const images = [
//   'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWk1M282NGlhYmFubmg2NHJxejRrbnM4a2wzbm5kODhtcXQ1cXJuMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vnbLLprWUIGlTdXNrK/giphy.webp',
//   'https://via.placeholder.com/600x300.png?text=EXCLUSIVE+DEALS',
//   'https://via.placeholder.com/600x300.png?text=HOLIDAY+SPECIALS',
//   'https://via.placeholder.com/600x300.png?text=LIMITED+TIME+OFFER',
// ];

// const offerImages = [
//   'https://via.placeholder.com/300x150.png?text=PUBLICITE+-+OFFRES+EXCLUSIVES',
//   'https://via.placeholder.com/300x150.png?text=PUBLICITE+-+DEALS+OF+THE+WEEK',
//   'https://via.placeholder.com/300x150.png?text=PUBLICITE+-+BEST+PRICES',
// ];

// const SalesPage = () => {
//   const [hoveredCategory, setHoveredCategory] = useState(null);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const bannerInterval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     const offerInterval = setInterval(() => {
//       setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offerImages.length);
//     }, 7000);

//     return () => {
//       clearInterval(bannerInterval);
//       clearInterval(offerInterval);
//     };
//   }, []);

//   const handleMouseOver = (category) => setHoveredCategory(category);
//   const handleMouseOut = () => setHoveredCategory(null);
//   const toggleDrawer = (open) => () => setIsDrawerOpen(open);
//   const handleDotClick = (index) => setCurrentImageIndex(index);

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Grid container spacing={2}>
//         {/* Sidebar Desktop */}
        // <Grid item xs={12} md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
//           <Box sx={{ backgroundColor: '#fff', padding: 2, borderRadius: '8px' }}>
//             <Typography variant="h6" gutterBottom>DUBON SERVICE</Typography>
//             <List>
//               {['Produit', 'Événement', 'Formation', 'E-restaurant', 'Service'].map((category, index) => (
//                 <ListItem button key={index} onMouseOver={() => handleMouseOver(category)}>
//                   <ListItemText primary={category} />
//                 </ListItem>
//               ))}
//             </List>
//           </Box>
//         </Grid>

//         {/* Hamburger Menu Mobile */}
//         <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
//           <IconButton onClick={toggleDrawer(true)}>
//             <MenuIcon />
//           </IconButton>
//           <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
//             <Box sx={{ width: 250, padding: 2 }}>
//               <Typography variant="h6" gutterBottom>DUBON SERVICE</Typography>
//               <List>
//                 {['Produit', 'Événement', 'Formation', 'E-restaurant', 'Service'].map((category, index) => (
//                   <ListItem button key={index}>
//                     <ListItemText primary={category} />
//                   </ListItem>
//                 ))}
//               </List>
//             </Box>
//           </Drawer>
//         </Grid>

//         {/* Bannière principale avec défilement horizontal */}
//         <Grid item xs={12} md={7}>
//           <Box sx={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', height: '300px' }}>
//             <Box
//               sx={{
//                 display: 'flex',
//                 transform: `translateX(-${currentImageIndex * 100}%)`,
//                 transition: 'transform 0.5s ease-in-out',
//                 width: `${images.length * 100}%`,
//               }}
//             >
//               {images.map((img, index) => (
//                 <img key={index} src={img} alt={`Slide ${index}`} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
//               ))}
//             </Box>

//             {/* Bouton Passez Commandes */}
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ position: 'absolute', bottom: 20, right: 20 }}
//             >
//               Passez Commandes
//             </Button>

//             {/* Pagination avec points */}
//             <Box sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
//               {images.map((_, index) => (
//                 <Box
//                   key={index}
//                   onClick={() => handleDotClick(index)}
//                   sx={{
//                     width: 12,
//                     height: 12,
//                     borderRadius: '50%',
//                     backgroundColor: currentImageIndex === index ? 'blue' : 'gray',
//                     margin: '0 5px',
//                     cursor: 'pointer',
//                   }}
//                 />
//               ))}
//             </Box>
//           </Box>
//         </Grid>

//         {/* Section actions à droite */}
//         <Grid item xs={12} md={3}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             <Button variant="outlined" startIcon={<PhoneAndroid />}>
//               Contactez-nous: +229 00 00 00 00
//             </Button>
//             <Button variant="outlined" startIcon={<ShoppingBasket />}>
//               Voir vos commandes
//             </Button>
//             <Button variant="outlined" startIcon={<LocalOffer />}>
//               Devenir vendeur
//             </Button>
//             <Box sx={{ marginTop: 2, padding: 2, backgroundColor: '#f0f0f0', borderRadius: '8px', textAlign: 'center' }}>
//               <img
//                 src={offerImages[currentOfferIndex]}
//                 alt="Publicité"
//                 style={{ width: '100%', objectFit: 'cover', marginBottom: '8px' }}
//               />
//               <Button variant="contained" color="primary">En savoir plus</Button>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default SalesPage;


import React, { useState } from 'react';
import { Box, Grid, Typography, Button, List, ListItem, ListItemText, IconButton, Drawer } from '@mui/material';
import { PhoneAndroid, ShoppingBasket, LocalOffer, Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '../assets/logo.png'

const SalesPage = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const Navigate = useNavigate();

  const handleMouseOver = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseOut = () => {
    setHoveredCategory(null);
  };

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {/* Sidebar - Categories for Desktop */}
        <Grid item xs={12} md={2} sx={{ display: { xs: 'none', md: 'block' },fontSize:'10px'  }}>
          <Box sx={{ backgroundColor: '#333', padding: 2, borderRadius: '8px', minHeight: '300px',color:'#fff' }}>
            <Typography variant="h6" gutterBottom>DUBON SERVICE</Typography>
            <List>
              {['Categories des Produit', 'Evenement', 'Formation', 'E-restaurant', 'Service', 'Autres'].map((category, index) => (
                <ListItem
                  button
                  key={index}
                  onMouseOver={() => handleMouseOver(category)}
                >
                  <ListItemText primary={category} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>

        {/* Hamburger Menu for Mobile */}
        <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
          <div onClick={toggleDrawer(true)}>
            <MenuIcon />
          </div>
          <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 250, padding: 2 ,height:'20%'}}>
              <Typography variant="h6" gutterBottom>DUBON SERVICE</Typography>
              <List>
                {['Categories des Produit', 'Evenement', 'Formation', 'E-restaurant', 'Service', 'Autres'].map((category, index) => (
                  <ListItem button key={index}>
                    <ListItemText primary={category} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Grid>

        {/* Main banner with image slider */}
        <Grid item xs={12} md={7} sx={{ position: 'relative', minHeight: '300px' }}>
          <Box sx={{ position: 'relative', width: '100%' }}>
            <Slider {...sliderSettings}>
              {['https://as2.ftcdn.net/v2/jpg/03/52/56/21/1000_F_352562191_p3xAUaRENs0tidjSm3wpOdalNbc2xT8c.jpg?text=OCTOBER+SALES+-+UP+TO+60%25+OFF', 
                'https://www.shutterstock.com/image-vector/new-website-click-button-learn-600nw-2435075711.jpg?text=NEW+ARRIVALS',
                'https://as1.ftcdn.net/v2/jpg/02/41/43/18/1000_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg?text=LIMITED+OFFER']
                .map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`Slide ${index}`} style={{ width: '100%', borderRadius: '8px', height: '100%', }} />
                  </div>
              ))}
            </Slider>
            {/* <Button
              variant="contained"
              color="primary"
              sx={{ position: 'absolute', bottom: 20, right: 0 }}
            >
              Passez Commandes
            </Button> */}
          </Box>

          {/* Dropdown based on hovered category for Desktop */}
          {hoveredCategory && (
            <Box
              onMouseLeave={handleMouseOut}
              sx={{
                position: 'absolute',
                top: 15,
                // height: '100%',
                 minHeight: '350px',
                left: 0,
                width: '100%',
                backgroundColor: '#fff',
                padding: 1,
                border: '1px solid #ccc',
                boxShadow: 3,
                borderRadius: '8px',
                zIndex: 10,
              }}
            >
              <Typography variant="body1">Options for: {hoveredCategory}</Typography>
              <List>
                <ListItem button>
                  <ListItemText primary="Option 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Option 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Option 3" />
                </ListItem>
              </List>
            </Box>
          )}
        </Grid>

        {/* Right action section with animated banner */}
        <Grid item xs={12} md={3} sx={{ minHeight: '300px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              variant="outlined"
              sx={{ textTransform: 'none', justifyContent: 'flex-start' }}
              startIcon={<PhoneAndroid />}
            >
              Contactez-nous: +229 00 00 00 00
            </Button>
            <Button
              variant="outlined"
              sx={{ textTransform: 'none', justifyContent: 'flex-start' }}
              startIcon={<ShoppingBasket />}
            >
              Voir tes commandes
            </Button>
            <Button
              variant="outlined"
              sx={{ textTransform: 'none', justifyContent: 'flex-start' }}
              startIcon={<LocalOffer />}
            >
              Devenir vendeur
            </Button>
            <Box sx={{ marginTop: 2, padding: 2, backgroundColor: '#f1f0f0', borderRadius: '8px', textAlign: 'center' }}>
              <Slider {...sliderSettings}>
                {['https://as1.ftcdn.net/v2/jpg/05/98/60/72/1000_F_598607218_FArhauhUjcUWFl4GXeqlGcTq8IIwT2Tw.jpg?text=PUBLICITE+-+OFFRES+EXCLUSIVES',
                  'https://as1.ftcdn.net/v2/jpg/00/60/73/12/1000_F_60731257_2hr4sKbBhLjPVBiOBGGxUQ1nWOv6cYFU.jpg?text=PUBLICITE+-+OFFRES+EXCLUSIVES'
                  ]
                  .map((img, index) => (
                    <div key={index}>
                      <img src={img} alt={`Publicité ${index}`} style={{ width: '100%', borderRadius: '8px', marginBottom: '8px', height: '100%', }} />
                    </div>
                ))}
              </Slider>
             
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Animated text for "New application soon" */}
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
        </motion.div>
      </Box>
    </Box>
  );
};

export default SalesPage;
