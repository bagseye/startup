import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"

export default () => (
  <>
    <Layout>
      <Banner />
      <TextBlock
        title="Aliquam id pulvinar lorem, nec rutrum nunc. Phasellus eu velit eu est
          scelerisque sodales"
        paragraph="Cras ut finibus urna. Nulla convallis ut nunc vel faucibus. Etiam
          magna sem, vehicula quis nunc et, tincidunt mollis leo. Nullam
          vulputate, odio nec malesuada pharetra, est leo tristique nisi, nec
          sollicitudin felis arcu non nibh. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Praesent ac sodales libero. Vivamus consequat, orci non tincidunt
          efficitur, libero purus sollicitudin mi, ac dapibus risus neque nec
          lacus. Donec eu lacus non justo cursus tristique. Quisque odio massa,
          iaculis id dolor at, porttitor ultricies ex."
      >
        <Button cta="I'm in!" anchor={true} href="/" />
      </TextBlock>
      <TextBlockImg title="We have the tools to help you suceed">
        <p>Some content</p>
        <Perk
          title="Speedy"
          content=" Vivamus consequat, orci non tincidunt
          efficitur, libero purus sollicitudin mi"
        />
        <Perk
          title="Affordable"
          content=" Vivamus consequat, orci non tincidunt
          efficitur, libero purus sollicitudin mi"
        />
        <Perk
          title="Friendly"
          content=" Vivamus consequat, orci non tincidunt
          efficitur, libero purus sollicitudin mi"
        />
      </TextBlockImg>
    </Layout>
  </>
)
