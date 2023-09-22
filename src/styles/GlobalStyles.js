import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --color-main-purple : #635FC7;
        --color-main-purple-hover : #A8A4FF;
        --color-black : #000112;
        --color-dark-grey : #2B2C37;
        --color-medium-grey : #828FA3;
        --color-white : #FFFFFF;
        --color-red : #EA5555;
        --color-red-hover : #FF9898;
        --color-backdrop : rgba(0,0,0,0.5);

        /* LIGHT MODE */
        --color-light-grey-light : #F4F7FD;
        --color-lines-light : #E4EBFA;


        /* DARK MODE */
        --color-lines-dark : #3E3F4E;
        --color-very-dark-grey-dark : #20212C;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        /* Creating animations for dark mode */
        transition: background-color 0.3s, border 0.3s;
    }

    html {
        font-size: 62.5%;
        font-family: 'Plus Jakarta Sans', sans-serif;
    }

    body {
        overflow: hidden;
    }
`;

export default GlobalStyles;
