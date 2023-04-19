import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`

  :root {
    --color-main-background: #fff;
    --color-secondary: #edf0f2;
    --color-accent: #ceff1a;
    --font-heading: 'Poppins', Arial, Helvetica, sans-serif;
    --font-body: 'Alegreya Sans', Arial, Helvetica, sans-serif;
  }

  /* Reset styles */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Set default font family, size, and line height */
  body {
    font-family: var(--font-body);
    font-size: 1em;
    line-height: 1.5;
  }

  /* Set background color for entire page */
  body {
    background-color: var(--color-main-background);
  }

  /* Headings */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-heading);
    font-weight: bold;
    line-height: 1.2;
  }

  h1 {
    font-size: 2.5em;
  }

  h2 {
  font-size: 2em;
  font-weight: 100;
  transition: 1s ease-out;

  &:hover {
    font-size: 2.2em;
    transition: 1s ease-in-out;
  }
}


  /* Links */
  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: #444444;
  }

  /* Buttons */
  button {
    color:black;
    cursor: pointer;
    font-size: 1em;
    font-weight: 100;
    padding: 10px;
    transition: all 0.3s ease;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    background: linear-gradient(-100deg, rgba(154, 154, 154, 0.5), rgba(192, 193, 191, 0.5), rgba(240, 240, 240, 0.5), rgba(255, 255, 255, 0.5));
    border: 1px black lightgrey;
    width:50vw;
    border-radius:5px;

    &:hover {
        background-color:transparent;
        transition:0.5s;
    }
  }

  /* Navigation */
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
  }

  nav ul {
    display: flex;
    list-style: none;
  }

  nav li {
    margin-right: 24px;
  }

  nav a {
    color: #333;
    font-size: 1.2em;
    font-weight: bold;
  }

title {
    font-weight:100;
    color:black;
    font-size:3em;
}
`;

export default GlobalStyles;