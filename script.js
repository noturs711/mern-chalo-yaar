import React, { useState, useEffect } from 'react';

useEffect(() => {
  const handleScroll = () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  };
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
