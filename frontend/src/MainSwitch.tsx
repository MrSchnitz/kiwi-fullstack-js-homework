import React, { ReactNode } from "react";
import { withNavigation } from "./hoc/NavBar";
import { useLocation } from "react-router-dom";
import { AnimatedSwitch, spring } from "react-router-transition";
import { Links } from "./internals/links";

interface MainSwitchProps {
  children: ReactNode;
}

const MainSwitch: React.FC<MainSwitchProps> = ({
  children,
}: MainSwitchProps) => {
  const location = useLocation();

  const mapStyles = (styles: any) => {
    return {
      opacity: styles.opacity,
      transform: `translateY(${styles.translateY}%)`,
    };
  };

  const bounce = (val: any) => {
    return spring(val, {
      stiffness: 300,
      damping: 40,
    });
  };

  return (
    <AnimatedSwitch
      atEnter={{
        opacity: 0,
        translateY: location.pathname === Links.mainPage ? -100 : 100,
      }}
      atActive={{ opacity: bounce(1), translateY: bounce(0) }}
      atLeave={{
        opacity: 0,
        translateY:
          location.pathname === Links.mainPage ? bounce(100) : bounce(-100),
      }}
      mapStyles={mapStyles}
      className="switch-wrapper"
    >
      {children}
    </AnimatedSwitch>
  );
};

export default withNavigation(MainSwitch);
