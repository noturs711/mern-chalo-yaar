import React from 'react';
import Pack from './Pack';
import jaipur from './jaipur.jpg';
import mum from './mumbai.jpg';
import manali from './manali.jpg';
import ker from './kerala.jpg';
import del from './delhi.jpg';
import assam from './Majuli-Assam.jpg';

const packageData = [
  {
    imgSrc: jaipur,
    location: "Jaipur",
    description: "Explore the Pink City with its vibrant culture and stunning architecture.",
    stars: 5,
   
  },
  {
    imgSrc: mum,
    location: "Mumbai",
    description: "Experience the bustling city of dreams.",
    stars: 4,
   
  },
  {
    imgSrc: del,
    location: "Delhi",
    description: "Discover the capital city with its rich history.",
    stars: 4,
   
  },
  {
    imgSrc: manali,
    location: "Manali",
    description: "Enjoy the serene beauty of the Himalayas.",
    stars: 4,
    
  },
  {
    imgSrc: ker,
    location: "Kerala",
    description: "Relax in the backwaters of God's Own Country.",
    stars: 5,
    
  },
  {
    imgSrc: assam,
    location: "Assam",
    description: "Experience the lush greenery and tea gardens.",
    stars: 4,
   
  },
];

const Packages = () => {
  return (
    <section className="packages" id="package">
      <h1 className="heading">PACKAGES</h1>
      <div className="pak-box-container">
        {packageData.map((pkg, index) => (
          <Pack
            key={index}
            imgSrc={pkg.imgSrc}
            location={pkg.location}
            description={pkg.description}
            stars={pkg.stars}
           
          />
        ))}
      </div>
    </section>
  );
};

export default Packages;
