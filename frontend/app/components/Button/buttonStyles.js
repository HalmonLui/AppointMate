import { css } from 'styled-components';

const buttonStyles = css`
  display: flex;
  padding: 1em;
  margin: auto;
  justify-content: center;
  text-decoration: none;
  border-radius: 50px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  background: #5DB075;
  color: #fff;

  &:hover {
    color: #fff;
    opacity: 0.9;
  }
`;

export default buttonStyles;
