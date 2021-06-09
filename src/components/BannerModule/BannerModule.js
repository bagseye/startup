import React from "react"
import { Link, navigate } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/Button"

const BannerModule = ({ children, title, subTitle, enquire }) => {
  function scrollToArea() {
    navigate("#topContent")
  }

  return (
    <>
      <BannerModuleStyles>
        {children ? (
          children
        ) : (
          <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../images/buildings.jpg"
            alt="Banner Image"
            layout="fullWidth"
            placeholder="blurred"
          />
        )}
        <div className="banner__overlay"></div>

        <div className="container">
          <div className="banner__content">
            {title && <h1>{title}</h1>}
            {subTitle && <h2>{subTitle}</h2>}
            {/* {enquire && <Button text="Enquire Now" as={Link} to="/contact" />} */}
            <Button text="Learn More" onClick={scrollToArea} />
          </div>
        </div>
      </BannerModuleStyles>
      <span id="topContent"></span>
    </>
  )
}

export default BannerModule
