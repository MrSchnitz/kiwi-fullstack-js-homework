import React, { ReactNode } from "react";
import { Airplane, Partners } from "@kiwicom/orbit-components/lib/icons";

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
    icon: <Airplane />,
  },
  {
    title: "Homework Description",
    url: Links.descriptionPage,
    icon: <Partners />,
  },
];
