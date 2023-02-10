import React, { useState } from "react";
import "./Button.css";
import Icon from "../Icon/Icon";


export default function ({ icon, value, bgColor, textColor, iconColor, fontSize, padding }) {

  return (
    <button
      className="faq-btn flex items-center"
      style={{
        color: textColor,
        backgroundColor: bgColor,
        padding: padding ?? '6px 8px',
        borderRadius: 7,
        fontSize: `${fontSize ?? 15}px`
      }}
    >
      {icon && <Icon color={iconColor} name={icon} sizeText="small" />}
      <span className="faq-btn__value">{value}</span>
    </button>
  );
}
