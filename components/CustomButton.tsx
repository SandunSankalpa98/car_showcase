"use client";

import { CustomButtonProps } from '@/types';
import React from 'react';
import Image from 'next/image';

const CustomButton: React.FC<CustomButtonProps> = ({ 
  title, 
  containerStyles, 
  textStyles, // Accept textStyles prop 
  rightIcon, // Accept rightIcon prop
  handleClick, 
  btnType 
}) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}> 
        {title}
      </span>
      {rightIcon && (  // Conditionally render rightIcon
        <div className="relative w-6 h-6 ml-2">
          <Image 
            src={rightIcon} 
            alt="right arrow" 
            fill 
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
