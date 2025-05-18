import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Italiana&family=Raleway:ital,wght@0,300;1,300&display=swap');

:root {
    --bg-light-gray: #C4C4C4;
    --bg-dark-gray: #202020;
    --bg-dark-blue: #172735;
    --white: #FFFFFF;
    --black: #000000;
}

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
}

a {
    text-decoration: none;
}

a:hover {
    cursor: pointer;
}

button {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    outline: none;
    font: inherit;
    cursor: pointer;
    appearance: none;
}

`