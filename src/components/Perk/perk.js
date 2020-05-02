import React, { useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const Perk = ({ img, alt, title, content }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    // Percentage of item in view to trigger animation
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 25 },
      }}
      transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
    >
      <PerkWrapper className="perk">
        <img src={img} alt={alt} />
        <h3>{title}</h3>
        <p>{content}</p>
      </PerkWrapper>
    </motion.div>
  )
}

const PerkWrapper = styled.article`
  padding: 1rem;
  max-width: 260px;
  margin: 0 auto;

  img {
    box-sizing: border-box;
    width: 100%;

    @media (min-width: 992px) {
      padding: 0 1.75rem;
    }
  }

  h3 {
    font-weight: 400;
  }
`

export default Perk
