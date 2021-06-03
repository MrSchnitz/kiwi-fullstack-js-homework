import React, { ReactNode } from "react";

interface PhoneLayoutProps {
  children: ReactNode;
}

const PhoneLayout: React.FC<PhoneLayoutProps> = ({
  children,
}: PhoneLayoutProps) => {
  return (
    <div className="device-google-pixel-2-xl">
      <div className="device-frame">
        <div className="device-content">{children}</div>
      </div>
      <div className="device-stripe" />
      <div className="device-header" />
      <div className="device-sensors" />
      <div className="device-btns" />
      <div className="device-power" />
    </div>
  );
};

export default PhoneLayout;
