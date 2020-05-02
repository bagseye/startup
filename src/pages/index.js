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

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

export default () => (
  <>
    <Layout>
      <Banner />
      <TextBlock
        id="about"
        title="Developing a new business is never easy, but Startup is here to help"
        paragraph="With a super-fast Gatsby powered website you have the perfect platform to get your idea off the ground. Its the perfect template to help turn your idea into a reality."
      >
        <Button cta="Tell Me More!" anchor={true} href="/" />
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
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.15em",
            style: { verticalAlign: "middle" },
          }}
        >
          <Package title="Standard">
            <ul>
              <li>
                <MdDone />
                Great for teams
              </li>
              <li>
                <MdDone />
                Great for teams
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Great for teams
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Great for teams
              </li>
            </ul>
            <Button cta="I want this!" />
          </Package>
          <Package title="Super" active={true}>
            <ul>
              <li>
                <MdDone />
                Great for teams
              </li>
              <li>
                <MdDone />
                Great for teams
              </li>
              <li>
                <MdDone />
                Great for teams
              </li>
              <li>
                <MdDone />
                Great for teams
              </li>
            </ul>
            <Button cta="I want this!" />
          </Package>
          <Package title="Hyper">
            <ul>
              <li>
                <MdDone />
                Great for teams
              </li>
              <li>
                <MdDone />
                Great for teams
              </li>
              <li>
                <MdDone />
                Great for teams
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Great for teams
              </li>
            </ul>
            <Button cta="I want this!" />
          </Package>
        </IconContext.Provider>
      </Packages>
      <Contact
        title="Contact Startup today and see how we can help your business grow"
        subtitle="Every second counts when you're looking to get your new business started. Drop Startup a message and one of our representatives will be in contact"
      />
    </Layout>
  </>
)
