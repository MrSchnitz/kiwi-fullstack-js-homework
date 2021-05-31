import React, { ReactNode } from "react";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import CountryFlag from "@kiwicom/orbit-components/lib/CountryFlag";
import NavigationBar from "@kiwicom/orbit-components/lib/NavigationBar";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import AirplaneTakeoff from "@kiwicom/orbit-components/lib/icons/AirplaneTakeoff";
import Accommodation from "@kiwicom/orbit-components/lib/icons/Accommodation";
import Partners from "@kiwicom/orbit-components/lib/icons/Partners";
import QuestionCircle from "@kiwicom/orbit-components/lib/icons/QuestionCircle";
import AccountCircle from "@kiwicom/orbit-components/lib/icons/AccountCircle";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { log } from "util";
import { Link, useLocation } from "react-router-dom";
import { LinkInterface, NavigationLinks } from "../internals/links";
import { Button, Heading } from "@kiwicom/orbit-components/lib";

export const withNavigation = (WrappedComponent: any) => (props: any) => {
  const dispatch = useDispatch();

  const location = useLocation();

  const redirect: any = (url: string) => dispatch(push(url));

  const isActive = (url: string) => location.pathname === url;

  const renderLinks = (links: LinkInterface[]) => {
    return links.map((link: LinkInterface, index: number) => (
      <ButtonLink
        key={index}
        type={"primary"}
        onClick={() => redirect(link.url)}
        iconLeft={link.icon}
      >
        {isActive(link.url) ? <strong>{link.title}</strong> : link.title}
      </ButtonLink>
    ));
  };

  const renderNavigation = (children: any) => {
    return (
      <>
        <NavigationBar>
          <Stack direction="row" align="center" justify="start">
            <ButtonLink href="https://orbit.kiwi">
              <div
                style={{
                  maxWidth: "40px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://orbit.kiwi/files/2019/08/cropped-OrbitLogo-1.png"
                  alt="Orbit by Kiwi.com"
                  height="40px"
                />
              </div>
            </ButtonLink>
            <PageHeading>
              <Heading type={"title1"}>T9</Heading>
            </PageHeading>
            {renderLinks(NavigationLinks)}
          </Stack>
        </NavigationBar>
        <PageContent>{children}</PageContent>
      </>
    );
  };

  return renderNavigation(<WrappedComponent {...props} />);
};

const PageHeading = styled.div`
  margin-left: -2rem !important;
`;

const PageContent = styled.div`
  height: calc(100vh - 64px);
  margin-top: 64px;
`;
