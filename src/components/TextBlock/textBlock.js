import React from "react"
import styled from "styled-components"

const TextBlock = ({ title, paragraph, children }) => {
  return (
    <TextBlockWrapper>
      <div className="content-container">
        <h2>{title}</h2>
        <p>{paragraph}</p>
        {children}
      </div>
    </TextBlockWrapper>
  )
}

const TextBlockWrapper = styled.section`
  background: #060c21;
  color: #fff;
  text-align: center;
  padding: 100px 30px;

  .content-container {
    margin: 0 auto;
    width: 100%;
    max-width: 850px;

    h2 {
      font-weight: 900;
      font-size: 2rem;
      line-height: 1.4;
    }

    p {
      margin-bottom: 40px;
    }
  }
`

export default TextBlock
