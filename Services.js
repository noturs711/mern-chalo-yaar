import React from 'react';
import { FaHotel } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiCruiser } from "react-icons/gi";
import { TbTrekking } from "react-icons/tb";
const Services = () => {

  return (
    <section className="service" id="service">
      <p className="bold"><b>SERVICES</b></p>
      <div className="box-container">
        <div className="box">
        <FaHotel style={{fontSize:'8rem'}}/>
          <h3>AFFORDABLE HOTELS</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="box">
        <MdOutlineFoodBank style={{fontSize:'10rem'}} />
          <h3>FOOS AND DRINKS</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="box">
        <GiCruiser style={{fontSize:'10rem'}}/>
          <h3>CRUISE</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="box">
        < TbTrekking  style={{fontSize:'10rem'}} />
          <h3>SIGHT SEEING</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
