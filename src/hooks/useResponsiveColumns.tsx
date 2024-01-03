import React, { useCallback, useEffect } from "react";

const widthColumnBreakpoints = [768, 1024, 1280];

const getColumns = (width: number): number =>
  widthColumnBreakpoints.findIndex((breakpoint) => width < breakpoint) + 1 || 3;

/**
 * Calculates the number of columns based on the current window width.
 * @returns {number} columns
 */
export const useResponsiveColumns = (): number => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [columns, setColumns] = React.useState(getColumns(width));
  const handleResize = useCallback(
    () => setWidth(window.innerWidth),
    [setWidth]
  );

  useEffect(() => {
    setColumns(getColumns(width));
  }, [width, setColumns]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize, setWidth]);

  return columns;
};
