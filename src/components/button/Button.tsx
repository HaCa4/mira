import React from "react";
import { ButtonProps, EColorOptions } from "@/utilities/types/componentTypes";
import styles from "./button.module.css";

// ----------------------------------------------------------------------

const Button = ({ title, variant, color, onClick }: ButtonProps) => {
  const baseClass = styles.base;
  const outlinedClass = variant === "outlined" ? styles.outlined : "";
  const containedClass = variant === "contained" ? styles.contained : "";

  return (
    <div
      className={`${baseClass} ${outlinedClass} ${containedClass}`}
      style={{ borderColor: variant === "outlined" ? color : "transparent", backgroundColor: variant === "contained" ? color : "transparent" }}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Button;
