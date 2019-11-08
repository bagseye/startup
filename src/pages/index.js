import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
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
    </Layout>
  </>
)
