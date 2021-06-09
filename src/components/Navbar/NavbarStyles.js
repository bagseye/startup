import styled from "styled-components"

export const NavbarStyles = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  padding: var(--borderSpacing);
  box-sizing: border-box;

  &:after {
    content: "";
    height: 1px;
    background-color: #fff;
    width: calc(100% - (var(--borderSpacing) * 2));
    left: var(--borderSpacing);
    position: absolute;
    bottom: 0;
  }

  .navbar__logo {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 10px;
    margin: 0;
  }

  .masthead {
    z-index: 3;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links {
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    text-align: left;
    background: linear-gradient(180deg, #000000, #000641);
    margin: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    max-width: 450px;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    list-style: none;
    padding: 0 var(--borderSpacing);

    li {
      list-style: none;
      font-size: 20px;
      font-weight: 400;
      margin-left: 0;
      padding: 0.75rem 0;
      letter-spacing: 15px;
      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #fff;
        transition: 0.3s;
      }
      &:hover {
        cursor: pointer;
        a {
          color: #e609b5;
        }
      }
    }

    &.show-nav {
      transform: translateX(0%);
    }
  }

  .toggle-btn {
    width: 40px;
    height: 40px;
    padding: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    span {
      display: block;
      width: 30px;
      height: 2px;
      background-color: #fff;
      transition: 0.2s ease-in;

      &:nth-child(1) {
        transform: translateY(-5px);
      }

      &:nth-child(3) {
        transform: translateY(5px);
      }
    }

    &.toggle-btn-active {
      span {
        &:nth-child(1) {
          transform: translateY(2px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-100%);
        }

        &:nth-child(3) {
          transform: translateY(-2px) rotate(-45deg);
        }
      }
    }
  }
`
