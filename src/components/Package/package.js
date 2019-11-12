import React from "react"
import styled from "styled-components"

const Package = ({ title, benefits, children, active }) => {
  return (
    <PackageWrapper className={active ? "active" : null}>
      <div className="content">
        <h3>{title}</h3>
        {children}
      </div>
    </PackageWrapper>
  )
}

const PackageWrapper = styled.article`
  position: relative;
  z-index: 1;

  .content {
    background: #0b132e;
    color: #fff;
    text-align: center;
    padding: 1.5rem;
  }

  &.active {
    z-index: 3;
    transform: scale(1.2);

    .content {
      padding: 1.5rem;
      background: #14214b;
    }

    &::before {
      content: "";
      position: absolute;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      background: linear-gradient(to right, #fc466b, #3f5efb);
      z-index: -1;
      transform: skew(2deg, 2deg);
    }
  }
`

export default Package
