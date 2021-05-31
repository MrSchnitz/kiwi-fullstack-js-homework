import React, { ReactNode } from "react";
import { DeviceMobile, Document } from "@kiwicom/orbit-components/lib/icons";

export interface LinkInterface {
  title: string;
  url: string;
  icon?: ReactNode;
}

export const Links = {
  mainPage: "/",
  descriptionPage: "/description",
};

export const NavigationLinks: LinkInterface[] = [
  {
    title: "Main",
    url: Links.mainPage,
    icon: <DeviceMobile />,
  },
  {
    title: "Homework Description",
    url: Links.descriptionPage,
    icon: <Document />,
  },
];
