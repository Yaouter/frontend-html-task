import Sidebar from "./Sidebar.jsx";
import styled from "styled-components";
import * as animate from "./animations.js";
import { device } from "./device.js";

export default Sidebar;

export const ImgLogo = styled.img`
  width: 2rem;
  height: 2rem;
  padding-left: 0.37rem;
`;

export const ToggleSidebarButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border-radius: 50%;
  background: var(--color-button-background-${(props) => props.$color}-${(props) => props.$isOpened ? 'active': 'default'});
  cursor: pointer;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 2.25rem;
  left: ${(props) => props.$isOpened ? 'calc(100dvw - 89.35dvw)' : 'calc(100dvw - 95dvw)'};
  transition: background 300ms, left 200ms ease-in-out;
  &:hover {
    svg {
      color: var(--color-text-${(props) => props.$color}-hover);
    }
  }
  svg {
    color: var(--color-text-${(props) => props.$color}-default);
    transition: color 200ms ease-in-out;
  }
  @media ${device.mobileS}{
    left: ${(props) => props.$isOpened ? 'calc(100dvw - 18.35dvw)' : 'calc(100dvw - 60.85dvw)'};
  }
  @media ${device.mobileM}{
    left: ${(props) => props.$isOpened ? 'calc(100dvw - 16.35dvw)' : 'calc(100dvw - 65.85dvw)'};
  }
  @media ${device.mobileL}{
    left: ${(props) => props.$isOpened ? 'calc(100dvw - 15.35dvw)' : 'calc(100dvw - 67.85dvw)'};
  }
  @media ${device.tablet}{
    left: ${(props) => props.$isOpened ? 'calc(100dvw - 68.35dvw)' : 'calc(100dvw - 82.85dvw)'};
  }
  @media ${device.laptop}{
    left: ${(props) => props.$isOpened ? 'calc(100dvw - 75.85dvw)' : 'calc(100dvw - 87.85dvw)'};
  }
  @media ${device.laptopL}{
    left: ${(props) => props.$isOpened ? 'calc(100dvw - 83.25dvw)' : 'calc(100dvw - 90.85dvw)'};
  }
  @media ${device.desktop}{
    left: ${(props) => props.$isOpened ? 'calc(100dvw - 90.15dvw)' : 'calc(100dvw - 95dvw)'};
  }
`;

export const LinkInnerBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.8rem;
  border-radius: 1rem;
  height: 1.25rem;
  width: ${(props) => props.$isOpened ? 'auto': '1.25rem'};
  cursor: pointer;
  transition: background 400ms, width 400ms ease-in-out;

  svg {
    color: var(--color-text-${(props) => props.$color}-default);
    transition: color 300ms ease-in-out;
  }

  &#theme-toggle { 
    span {
      margin-left: ${(props) => props.$color === 'light' ? '1rem' : '0.82rem'};
    }

    svg {
      margin-left: ${(props) => props.$color === 'light' ? '0.15rem' : '0.1rem'};
    }
  }

  &:hover {
    background: var(--color-sidebar-background-${(props) => props.$color}-hover);
    transition: background 300ms ease-in-out;

    span {
      color: var(--color-text-${(props) => props.$color}-hover);
      transition: color 300ms ease-in-out;
    }

    svg {
      color: var(--color-text-${(props) => props.$color}-hover);
      transition: color 300ms ease-in-out;
    }
  }

  &.active {
    background: var(--color-sidebar-background-${(props) => props.$color}-active);
    width: ${(props) => props.$isOpened ? 'auto': '1.25rem'};
    transition: background 400ms, width 400ms ease-in-out;

    span {
      visibility: ${(props) => props.$isOpened ? 'visible' : 'hidden'};
      opacity: ${(props) => props.$isOpened ? '1' : '0'};
      color: var(--color-text-${(props) => props.$color}-active);
      transition: visibility 0ms, opacity 300ms, color 300ms ease-in-out;
    }

    svg {
      color: var(--color-text-${(props) => props.$color}-active);
      transition: color 300ms ease-in-out;
    }
  }

`;

export const LinkDesc = styled.span`
  visibility: ${(props) => props.$show ? 'visible' : 'hidden'};
  opacity: ${(props) => props.$show ? '1' : '0'};
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-text-${(props) => props.$color}-default);
  transition: visibility 0ms, opacity 300ms, color 300ms ease-in-out;
`;

export const LogoDesc = styled(LinkDesc)`
  font-size: 1.25rem;
  margin-left: 0.75rem;
  font-weight: 600;
  color: var(--color-text-logo-${(props) => props.$color}-default);
  visibility: ${(props) => props.$show ? 'visible' : 'hidden'};
  opacity: ${(props) => props.$show ? '1' : '0'};
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  position: relative;
`;

export const SidebarContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  width: ${(props) => props.$isOpened ? `calc(100dvw - 90dvw)` : `calc(100dvw - 85.5dvw)`};
  height: 92.5dvh;
  padding: 1.75rem;
  border-radius: 1.25rem;
  background: var(--color-sidebar-background-${(props) => props.$color}-default);
  transition: background 300ms, width 200ms ease-in-out;

  @media ${device.mobileS} {
    width: ${(props) => props.$isOpened ? `calc(100dvw - 22.5dvw)` : `calc(100dvw - 85.5dvw)`};
  }
  @media ${device.mobileM} {
    width: ${(props) => props.$isOpened ? `calc(100dvw - 19.5dvw)` : `calc(100dvw - 87.5dvw)`};
  }
  @media ${device.mobileL} {
    width: ${(props) => props.$isOpened ? `calc(100dvw - 17.5dvw)` : `calc(100dvw - 87.5dvw)`};
  }
  @media ${device.tablet} {
    width: ${(props) => props.$isOpened ? `calc(100dvw - 74.5dvw)` : `calc(100dvw - 93.5dvw)`};
  }
  @media ${device.laptop} {
    width: ${(props) => props.$isOpened ? `calc(100dvw - 80.5dvw)` : `calc(100dvw - 95.5dvw)`};
  }
  @media ${device.laptopL} {
    width: ${(props) => props.$isOpened ? `calc(100dvw - 86.5dvw)` : `calc(100dvw - 96.5dvw)`};
  }
  @media ${device.desktop} {
    width: ${(props) => props.$isOpened ? `calc(100dvw - 92dvw)` : `calc(100dvw - 98dvw)`};
  }
`;

export const NavContainer = styled.nav`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 0.5rem;
  height: fit-content;
`;

export const NavBottomContainer = styled(NavContainer)`
  align-self: end;
`;


// use TS for props type control

/* SidebarContainer.propTypes = {
  $color: PropTypes.string,
  $isOpened: PropTypes.boolean,
}

LinkDesc.propTypes = {
  $color: PropTypes.string,
  $show: PropTypes.boolean,
}

LinkInnerBox.propTypes = {
  $color: PropTypes.string,
  $isOpened: PropTypes.boolean,
}

ToggleSidebarButton.propTypes = {
  $color: PropTypes.string,
  $isOpened: PropTypes.boolean,
} */