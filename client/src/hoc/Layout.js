import PropTypes from "prop-types"
import React from 'react'
import styled from "styled-components"
import { Wrapper } from "../components"

const Jumbotron = styled.article`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  background: linear-gradient(0deg,#f4f4f4,#f4f4f4);
  margin-bottom: 4rem;

  h2 {
   font-size: 2.2rem;
  }

  p {
    font-size: 1.6rem;
    font-style: italic;
  }
`

const SectionWrapper = styled.section`
    margin-bottom: 10rem;
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


