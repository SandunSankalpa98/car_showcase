"use client";

import { CustomButtonProps } from '@/types';
import React from 'react';

const CustomButton: React.FC<CustomButtonProps> = ({ title, containerStyles, handleClick,btnType }) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}  // Fix: Added correct backticks here
      onClick={handleClick}
    >
      <span className="flex-1"> 
        {title}  
      </span>
    </button>
  );
};

export default CustomButton;
