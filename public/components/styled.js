import styled from "styled-components";
import { Twitter, Linkedin } from "@styled-icons/boxicons-logos";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

//Home
export const HomeWrapper = styled.div`
display: flex;
`

//Navigation
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  color: white;
`;

export const NavLogo = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

//footer
export const Foot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  color: white;
`;

//icons
export const Twit = styled(Twitter)`
  width: 50px;
  height: 50px;
  margin-right: 1em;
`;

export const Linked = styled(Linkedin)`
  width: 50px;
  height: 50px;
  margin-right: 1em;
`;

export const Email = styled(EmailOutline)`
  width: 50px;
  height: 50px;
`;