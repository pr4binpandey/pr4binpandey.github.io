import image1 from '../medias/image1.png';

import logo from '../medias/logo.png';
import pic from '../medias/pic.png';


function Photos() {
  return (
    <div className="photo-section">
      <h2>Photo Gallery</h2>

      <div className="photo-list">
      
        <img src={logo} alt="Brand mark" />
  
        <img src={pic} alt="Profile illustration" />
      
        <img src={image1} alt="Portrait 4" />
 
      </div>
    </div>
  );
}

export default Photos;
