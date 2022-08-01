import React, { useEffect } from "react";

export function WithLogging<P>(WrappedComponent: React.FC<P>) {
  const ComponentWithLogging = (props: P) => {
    useEffect(() => {
      console.log("component mounted");
      return () => console.log("component unmounted");
    }, []);

    useEffect(() => {
      console.log("component rendered");
    });

    return <WrappedComponent {...props} />;
  };

  return ComponentWithLogging;
}
