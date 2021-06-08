import styled from "styled-components"

export const BannerModuleStyles = styled.section`
  height: 100vh;
  position: relative;
  padding: var(--borderSpacing);

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }

  .banner__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 1;
  }
  .banner__content {
    position: relative;
    z-index: 2;
    width: 100%;
    text-align: center;

    @media (min-width: 768px) {
      width: 66vw;
    }

    h1 {
      text-transform: uppercase;
      margin-top: 0;
      margin-bottom: 10px;
      font-weight: 400;
      font-size: var(--bannerTitle);
      letter-spacing: 20px;
      margin-bottom: 30px;
    }

    h2 {
      margin-top: 0;
      margin-bottom: 30px;
      font-weight: 300;
      font-size: var(--bannerSubTitle);
      letter-spacing: -0.5px;
    }

    button {
      width: 30px;
      height: 30px;
      background-color: transparent;
      border: none;
      color: #fff;
      font-size: 22px;
      display: flex;
      margin-top: 30px;
    }
  }
`
