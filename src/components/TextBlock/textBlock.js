import React, { useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const TextBlock = ({ title, paragraph, children, id }) => {
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
    <TextBlockWrapper id={id}>
      <div className="content-container">
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
          <h2>{title}</h2>
          <p>{paragraph}</p>
          {children}
        </motion.div>
      </div>
    </TextBlockWrapper>
  )
}

const TextBlockWrapper = styled.section`
  background: linear-gradient(45deg, #060c21, #0d0139);
  color: #fff;
  text-align: left;
  padding: 60px 20px;

  @media (min-width: 768px) {
    padding: 80px 30px;
    text-align: center;
  }

  h2 {
    color: #ee00b3;
    background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin-bottom: 40px;
    text-shadow: 0px 0px 5px rgba(8, 0, 8, 1);
    opacity: 0.85;
  }
`

export default TextBlock
