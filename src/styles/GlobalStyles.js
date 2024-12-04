import 'modern-normalize/modern-normalize.css';
import { createGlobalStyle } from 'styled-components';
import './fonts/fonts.css'; 


const GlobalStyles = createGlobalStyle`



  * {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    position: relative;
    font-family: 'PT Serif', serif;
    line-height: 1;
    background-color: #0d1b2a;
    color: #e0e1dd;
  }

  h1, h2, h3 {
    font-family: 'DM Serif Text', serif;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  img {
    display: block;
    max-width: 100%;
    height: 100%;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  html {
    scroll-behavior: smooth;
  }

  img {
    display: block;
    width: 100%;
    border-radius: 12px;
    height: auto;
  }

  .container {
    margin: 0;
    padding: 0 60px;

     @media (min-width: 576px) and (max-width: 1024px) {
    padding: 0 25px;
  }

  @media (max-width: 575px) {
    padding: 0 15px;
  }
  }

  .section {
   padding-top: 140px;
   padding-bottom: 30px;

      @media (min-width: 576px) and (max-width: 1024px) {
    padding-top: 120px;
  }

  @media (max-width: 575px) {
    padding-top: 120px;
  }
  }
`;

export default GlobalStyles;
