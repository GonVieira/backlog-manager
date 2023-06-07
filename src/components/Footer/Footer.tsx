import React from "react";
import {
  FooterContainer,
  FooterContentWrapper,
  HalfWidthContainer,
  LinkContainer,
  StyledLink,
} from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentWrapper>
        <HalfWidthContainer>
          <h2>Socials</h2>
          <LinkContainer>
            <StyledLink target="_blank" href="https://github.com/GonVieira">
              GitHub
            </StyledLink>
            <StyledLink target="_blank" href="https://github.com/GonVieira">
              LinkedIn
            </StyledLink>
          </LinkContainer>
        </HalfWidthContainer>
        <HalfWidthContainer>
          <h2>Information</h2>
          <LinkContainer>
            <StyledLink
              target="_blank"
              href="https://github.com/GonVieira/backlog-manager"
            >
              Frontend GitHub Repository
            </StyledLink>
            <StyledLink
              target="_blank"
              href="https://github.com/GonVieira/Backlog-Manager-BE"
            >
              Backend GitHub Repository
            </StyledLink>
            <StyledLink target="_blank" href="https://rawg.io/apidocs">
              RAWG API Website
            </StyledLink>
          </LinkContainer>
        </HalfWidthContainer>
      </FooterContentWrapper>
    </FooterContainer>
  );
};

export default Footer;
