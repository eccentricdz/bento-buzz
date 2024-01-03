import React from "react";
import "./Link.css";

export const Link: React.FC<React.HTMLProps<HTMLAnchorElement>> = ({
  className = "",
  ...anchorElementProps
}) => <a className={className + " bb-link"} {...anchorElementProps} />;
