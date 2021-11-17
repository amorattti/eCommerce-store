import styled, { css } from "styled-components";

const themes = {
  error: css`
    background-color: #fff3f3;
    border-color: #e4401c;
    color: #e4401c;
  `,
  success: css`
    color: #055160;
    background-color: #cff4fc;
    border-color: #b6effb;
  `
}

export const StyledAlert = styled.div(({ theme, value }) => `
  padding: 16px 32px;
  display: ${value ? 'block' : 'none'}; 
  margin-bottom: 40px;
  border-bottom: 1px solid;
  border-top: 1px solid;
  border-radius: 8px;

  ${theme ? themes[theme] : ''}
`)

