import React from "react";
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

export const withNavigation = (WrappedComponent: any) => (props: any) => {
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
            <ButtonLink
              type="secondary"
              iconLeft={<AirplaneTakeoff />}
              title="Travel"
            />
            <ButtonLink
              type="secondary"
              iconLeft={<Accommodation />}
              title="Rooms"
            />
            <ButtonLink
              type="secondary"
              iconLeft={<Partners />}
              title="Careers"
            />
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
