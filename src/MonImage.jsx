import React from 'react';
import { cld } from './cloudinary'; // On importe la config Cloudinary
import { AdvancedImage } from '@cloudinary/react';
import { scale } from '@cloudinary/url-gen/actions/resize';

function MonImage() {
  // Crée l'image Cloudinary avec son identifiant public
  const image = cld.image('public_id_de_limage'); // Remplacez par l'identifiant de votre image Cloudinary
  
  // Applique une transformation (redimensionnement)
  image.resize(scale().width(250).height(250));
  
  // Retourne l'image avec la transformation appliquée
  return <AdvancedImage cldImg={image} />;
}

export default MonImage;
