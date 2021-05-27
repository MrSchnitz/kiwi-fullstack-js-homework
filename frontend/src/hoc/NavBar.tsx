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
import { Link } from "react-router-dom";
import { LinkInterface, NavigationLinks } from "../internals/links";
import {Button} from "@kiwicom/orbit-components/lib";

export const withNavigation = (WrappedComponent: any) => (props: any) => {
  const dispatch = useDispatch();

  const redirect: any = (url: string) => dispatch(push(url));

  const renderLinks = (links: LinkInterface[]) => {
    return links.map((link: LinkInterface, index: number) => (
      <ButtonLink
        key={index}
        type={"primary"}
        onClick={() => redirect(link.url)}
        iconLeft={link.icon}
      >
        {link.title}
      </ButtonLink>
    ));
  };

  const renderNavigation = (children: any) => {
    return (
      <>
        <NavigationBar>
          <Stack direction="row" align="center" justify="center">
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
            {renderLinks(NavigationLinks)}
            <Stack justify="end" inline>
              <ButtonLink
                type="secondary"
                iconLeft={<CountryFlag code="gb" />}
                title="English"
              />
              <ButtonLink
                type="secondary"
                iconLeft={<QuestionCircle />}
                title="Help"
              />
              <ButtonLink
                type="secondary"
                iconLeft={<AccountCircle />}
                title="My account"
              />
            </Stack>
          </Stack>
        </NavigationBar>
        <PageContent>{children}</PageContent>
      </>
    );
  };

  return renderNavigation(<WrappedComponent {...props} />);
};

const PageContent = styled.div`
  height: calc(100vh - 64px);
  margin-top: 64px;
`;
