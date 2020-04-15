import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"

export default () => (
  <>
    <Layout>
      <Banner />
      <TextBlock
        id="about"
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
        <p>
          {" "}
          Sed ac posuere urna. Vivamus non sodales dui. Nulla posuere quam eget
          nisl viverra, placerat posuere justo scelerisque. Aenean sagittis orci
          odio. Donec id augue metus. Donec ligula diam, tempor sed mi in,
          auctor ultrices ipsum.
        </p>
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Super fast speed increases"
            title="Speedy"
            content=" Vivamus consequat, orci non tincidunt
          efficitur, libero purus sollicitudin mi"
          />
          <Perk
            img={perk2Img}
            alt="Great savings to be made"
            title="Affordable"
            content=" Vivamus consequat, orci non tincidunt
          efficitur, libero purus sollicitudin mi"
          />
          <Perk
            img={perk3Img}
            alt="Super fast speed increases"
            title="Friendly"
            content=" Vivamus consequat, orci non tincidunt
          efficitur, libero purus sollicitudin mi"
          />
        </div>
      </TextBlockImg>
      <Packages title="Our Packages">
        <Package title="Standard">
          <ul>
            <li>Great for teams</li>
            <li>Great for teams</li>
            <li className="linethrough">Great for teams</li>
            <li className="linethrough">Great for teams</li>
          </ul>
          <Button cta="I want this!" />
        </Package>
        <Package title="Super" active={true}>
          <ul>
            <li>Great for teams</li>
            <li>Great for teams</li>
            <li>Great for teams</li>
            <li>Great for teams</li>
          </ul>
          <Button cta="I want this!" />
        </Package>
        <Package title="Hyper">
          <ul>
            <li>Great for teams</li>
            <li>Great for teams</li>
            <li>Great for teams</li>
            <li className="linethrough">Great for teams</li>
          </ul>
          <Button cta="I want this!" />
        </Package>
      </Packages>
      <Contact title="Get in Touch" />
    </Layout>
  </>
)
