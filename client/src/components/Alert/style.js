import styled, { css } from "styled-components";

const themes = {
  error: css`
    color: #e4401c; // red
    border-color: #e4401c; // light red
    background-color: #fff3f3; // lighter red 
  `,
  success: css`
    color: #055160; // dark green
    border-color: #b6effb; // light white
    background-color: #cff4fc; // lighter white
  `
}

export const StyledAlert = styled.div(({ theme, value }) => `
  font-size: 1.4rem;
  padding: 1.6rem 3.2rem;
  display: ${value ? 'block' : 'none'}; 
  margin-bottom: 4rem;
  border: 0.1rem solid;
  border-radius: 4px;
  border-left: 0;
  border-right: 0;

  ${theme ? themes[theme] : ''}
`)

