import React from "react"
import styled from "styled-components"
import Button from "../Button/button"

const Contact = ({ title }) => {
  return (
    <ContactWrapper>
      <div className="container">
        <h2>{title}</h2>
        <form name="contact" netlify>
          <div className="input-area">
            <input type="text" name="name" required autocomplete="off" />
            <label className="label-name">
              <span className="content-name">Name</span>
            </label>
          </div>

          <div className="input-area">
            <input type="email" name="email" required autocomplete="off" />
            <label className="label-name">
              <span className="content-name">Email</span>
            </label>
          </div>

          <div className="input-area">
            <textarea
              type="text"
              name="message"
              rows="5"
              required
              autocomplete="off"
            />
            <label className="label-name">
              <span className="content-name">Message</span>
            </label>
          </div>

          <div className="input-area button-area">
            <Button cta="Send" type="submit" />
          </div>
        </form>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.section`
  padding: 100px 30px;

  .container {
    width: 100%;
    max-width: 650px;
    margin: 0 auto;

    h2 {
      text-align: center;
      margin-bottom: 100px;
    }

    form {
      position: relative;
      overflow: hidden;

      .input-area {
        margin-bottom: 40px;
        position: relative;

        &.button-area {
          text-align: center;
        }
      }

      input,
      textarea {
        height: 100%;
        font-size: 1rem;
        letter-spacing: 0.25rem;
        padding: 20px;
        display: block;
        width: 100% !important;
        border: none;
        background-color: #0b132e;
        color: #fff;
        text-transform: uppercase;
        position: relative;
        box-sizing: border-box;
        outline: none;

        &:focus,
        &:valid {
          + .label-name {
            .content-name {
              transform: translateY(-25%);
              font-size: 0.7rem;
              opacity: 0.2;
            }
            &::after {
              transform: translateX(0%);
            }
          }
        }
      }

      label {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        pointer-events: none;

        &::after {
          content: "";
          position: absolute;
          left: 0px;
          bottom: -1px;
          height: 4px;
          background: linear-gradient(
            90deg,
            #03a9f4,
            #f441a5,
            #ffeb3b,
            #03a9f4
          );
          width: 100%;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
      }

      .content-name {
        position: absolute;
        top: 10px;
        left: 20px;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        font-size: 0.8rem;
      }
    }
  }
`

export default Contact
