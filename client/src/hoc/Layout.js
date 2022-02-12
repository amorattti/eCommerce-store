import PropTypes from "prop-types"
import React from 'react'
import styled from "styled-components"
import { Wrapper } from "../components"

const Jumbotron = styled.article`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  background: linear-gradient(0deg,#f4f4f4,#f4f4f4);
  /* box-shadow: -2px 4px 9px 0px #efeeee; */
  margin-bottom: 40px;

  h2 {
   font-size: 1.5em;
  }

  p {
    font-size: 1.1rem;
  }
`

const SectionWrapper = styled.section`
    margin-bottom: 100px;
`

const Layout = ({
  title = '',
  description = '',
  children
}) => {
  return (
    <>
      <Jumbotron position>
        <Wrapper>
          <h2>{title}</h2>
          <p className="lead">{description}</p>
        </Wrapper>
      </Jumbotron>
      <SectionWrapper>
        <Wrapper>
          {children}
        </Wrapper>
      </SectionWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  description: PropTypes.string,
  title: PropTypes.string
}

export default Layout


