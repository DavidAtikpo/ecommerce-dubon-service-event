import React, { useState, useRef, useEffect } from 'react';
import { Button, Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';
import './ShippingAddress.css';

const ShippingAddressPage = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [state, setState] = useState('');
  const [useGeoLocation, setUseGeoLocation] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: '', lng: '' });
  const navigate = useNavigate();
  const addressInputRef = useRef(null);

  // Détection automatique du pays
  useEffect(() => {
    const fetchGeoInfo = async () => {
      try {
        const response = await fetch('https://ipinfo.io/json?token=YOUR_API_TOKEN');
        const data = await response.json();
        setCountry(data.country);
        setCountryCode(data.country.toLowerCase());
      } catch (error) {
        console.error('Erreur lors de la récupération de la géolocalisation', error);
      }
    };
    fetchGeoInfo();
  }, []);

  // Google Places Autocomplete
  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(addressInputRef.current, {
      types: ['geocode'],
      componentRestrictions: { country: countryCode || 'TG' },
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      setAddress(place.formatted_address);
      place.address_components.forEach(component => {
        const types = component.types;
        if (types.includes('locality')) setCity(component.long_name);
        if (types.includes('administrative_area_level_1')) setState(component.long_name);
        if (types.includes('postal_code')) setPostalCode(component.long_name);
      });

      const location = place.geometry.location;
      setCoordinates({ lat: location.lat(), lng: location.lng() });
    });
  }, [countryCode]);

  const handleShipping = () => {
    if (!acceptTerms) {
      setErrorMessage('Vous devez accepter les termes et conditions.');
      return;
    }

    const shippingData = {
      name, mobile, address, city, postalCode, state, country,
      ...(useGeoLocation ? { coordinates } : {}),
    };

    localStorage.setItem('shippingAddress', JSON.stringify(shippingData));
    navigate('/summary');
  };

  return (
    <Box className="shipping-address-container">
      <Typography variant="h6" className="shipping-address-header">
        Adresse de livraison
      </Typography>
      <Typography variant="body2" className="shipping-address-subtitle">
        Vos informations sont cryptées et utilisées uniquement pour la livraison.
      </Typography>

      <input
        placeholder="Pays/Région"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="shipping-address-field"
      />

      <Box className="shipping-address-row">
        <input
          placeholder="Prénom et nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shipping-address-field"
        />
        <PhoneInput
          country={countryCode}
          value={mobile}
          onChange={setMobile}
          inputStyle={{ width: '100%' }}
        />
      </Box>

      <input
        placeholder="Adresse ou boîte postale"
        ref={addressInputRef}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="shipping-address-autocomplete"
      />

      <Box className="shipping-address-location-row">
        <input
          placeholder="État/Province"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="shipping-address-field"
        />
        <input
          placeholder="Ville"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="shipping-address-field"
        />
        <input
          placeholder="Code Postal"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          className="shipping-address-field"
        />
      </Box>

      <FormControlLabel
        control={<Checkbox checked={useGeoLocation} onChange={(e) => setUseGeoLocation(e.target.checked)} />}
        label="Utiliser ma position actuelle"
        className="shipping-address-checkbox"
      />
      <FormControlLabel
        control={<Checkbox checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} />}
        label="J'accepte les conditions d'utilisation."
        className="shipping-address-checkbox"
      />

      {errorMessage && <Typography color="error" className="shipping-address-error">{errorMessage}</Typography>}

      <Button fullWidth variant="contained" onClick={handleShipping} className="shipping-address-button">
        Continuer au paiement
      </Button>
    </Box>
  );
};

export default ShippingAddressPage;
