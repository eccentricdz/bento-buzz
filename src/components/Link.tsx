import React from "react";
import "./Link.css";

export const Link: React.FC<React.HTMLProps<HTMLAnchorElement>> = ({
  ...anchorElementProps
}) => <a className="bb-link" {...anchorElementProps} />;
