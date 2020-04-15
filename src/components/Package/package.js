import React from "react"
import styled from "styled-components"

const Package = ({ title, children, active }) => {
  return (
    <PackageWrapper id="packages" className={active ? "active" : "not-active"}>
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
  width: 100%;
  max-width: 350px;
  margin-bottom: 3rem;

  @media (min-width: 992px) {
    width: calc(100% / 3);
    margin-bottom: 0;
  }

  .content {
    background: #0b132e;
    color: #fff;
    text-align: center;
    padding: 1.5rem;

    ul {
      padding-left: 0;
      list-style: none;
      margin: 2.5rem 0;

      li {
        line-height: 26px;
        padding-left: 0.5rem;

        &::marker {
          content: "Yes";
          display: inline-block;
        }
      }

      .linethrough {
        text-decoration: line-through;
        opacity: 0.25;
      }
    }
  }

  &.not-active {
    button {
      background: transparent;
      border: 1px solid #e609b5;
    }
  }

  &.active {
    order: 1;
    z-index: 3;
    transform: scale(1.09);

    @media (min-width: 992px) {
      order: 0;
      transform: scale(1.25);
    }

    .content {
      background: #14214b;
    }

    &::before {
      content: "";
      position: absolute;
      top: -5px;
      right: 0px;
      bottom: -5px;
      left: 0px;
      background: linear-gradient(to right, #fc466b, #3f5efb);
      z-index: -1;
      transform: skew(3deg, 3deg);
    }
  }
`

export default Package
