import { useMemo } from 'react'
import './gallery.css'
import coneMobile from '../../assets/images/mobile/image-gallery-cone.jpg'
import milkbottlesMobile from '../../assets/images/mobile/image-gallery-milkbottles.jpg'
import orangeMobile from '../../assets/images/mobile/image-gallery-orange.jpg'
import sugarcubesMobile from '../../assets/images/mobile/image-gallery-sugar-cubes.jpg'

import coneDesktop from '../../assets/images/desktop/image-gallery-cone.jpg'
import milkbottlesDesktop from '../../assets/images/desktop/image-gallery-milkbottles.jpg'
import orangeDesktop from '../../assets/images/desktop/image-gallery-orange.jpg'
import sugarcubesDesktop from '../../assets/images/desktop/image-gallery-sugarcubes.jpg'

const images = {
    mobile: [
      milkbottlesMobile, 
      orangeMobile, 
      coneMobile,  
      sugarcubesMobile
    ],
    desktop: [
      milkbottlesDesktop, 
      orangeDesktop, 
      coneDesktop, 
      sugarcubesDesktop
    ]
  };

const Gallery = ({ size }) => {
    
    const selectedImages = useMemo(() => size < 500 ? images.mobile : images.desktop, [size]);
  
    return (
      <div className="gallery">
        {selectedImages.map((picture, i) => (
          <img src={picture} alt="" key={i} />
        ))}
      </div>
    );
  };

export default Gallery
