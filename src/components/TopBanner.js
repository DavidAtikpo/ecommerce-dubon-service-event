// import React from 'react';
// // import banner1 from '../assets/thumb (2).gif'

// const AdBanner = ({ videoUrl, linkUrl, altText }) => {
//   videoUrl = "https://v.ftcdn.net/06/91/42/57/700_F_691425741_LL4zDPuIJ8csuhi4JuXoJSqkm06jcd1F_ST.mp4";
//   linkUrl = "http://banner-link.com";
//   altText = "Banner Ad";

//   return (
//     <div style={{ backgroundColor: '#4682B4', padding: '10px' }}> {/* Conteneur avec fond bleu */}
//       <a href={linkUrl} target="_blank" rel="noopener noreferrer">
//         <video
//           src={videoUrl}
//           alt={altText}
//           style={{ width: '100%', height: '50px' }}
//           autoPlay
//           loop
//           muted // Permet de lire automatiquement sans intervention de l'utilisateur
//         />
//       </a>
//     </div>
//   );
// };



// export default AdBanner;
import React, { useEffect, useRef } from 'react';
import './TopBanner.css';

const AdBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;
    banner.classList.add('bounce-slide-cycle');
  }, []);

  return (
    <div className="banner-container">
      <div ref={bannerRef} className="banner-text">ce site sera bien disponible ! dubonservicesevent.com est votre plateforme idéale pour acheter des produits frais et congelés, profiter d'événements exclusifs et accéder à divers services</div>
    </div>
  );
};

export default AdBanner;
