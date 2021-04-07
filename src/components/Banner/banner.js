import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import Button from "../Button/button"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { BannerStyles } from "../../styles/bannerStyles"

const Banner = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "flames.jpg" }) {
          childImageSharp {
            gatsbyImageData(quality: 90, width: 1920, formats: [AUTO, WEBP])
          }
        }
      }
    `
  )

  const image = getImage(placeholderImage)

  const bgImage = convertToBgImage(image)

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

  return (
    <BannerStyles>
      <BackgroundImage
        Tag="section"
        {...bgImage}
        preserveStackingContext
        className="hero-image"
      >
        <GatsbyImage image={image} />
        <div className="hero-content">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
          >
            It's time to make your business <span>stand out</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1.5 }}
          >
            Startup is here to help you achieve your business and personal
            goals, all through a stylish theme
          </motion.p>
          <Link to="about" smooth={true} duration={500}>
            <span className="sr-only">Jump to about</span>
            <Button
              cta="Learn More"
              label="Banner Learn More"
              anchor={true}
              href="linking"
            />
          </Link>
        </div>
      </BackgroundImage>
    </BannerStyles>
  )
}

export default Banner
