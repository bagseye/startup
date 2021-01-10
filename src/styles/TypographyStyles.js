import { createGlobalStyle } from "styled-components"
import "@fontsource/gothic-a1"

const TypographyStyles = createGlobalStyle`

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 900;
    line-height: 1.4;
  }

  h1,
  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: -1px;
    margin: 1rem 0;

    @media (min-width: 768px) {
      font-size: 1.6rem;
      line-height: 1.3;
    }

    @media (min-width: 1080px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.45;
    margin: 1rem 0;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }

    @media (min-width: 1080px) {
      font-size: 1.2rem;
      line-height: 1.4;
    }
  }
`
export default TypographyStyles
