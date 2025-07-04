import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,500;1,500&family=Italiana&family=Raleway:ital,wght@0,300;1,300&display=swap');

#root {
    width: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
}

:root {
    --header-height: 168.13px;

    --bg-light-gray: #C4C4C4;
    --bg-dark-gray: #202020;
    --bg-dark-blue: #172735;
    --white: #FFFFFF;
    --of-white: #EEEEEE;
    --black: #000000;
    --glacier-50: #F1F8FA;
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

body {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--bg-dark-gray);
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

h1 {
    font-family: "Italiana", sans-serif;
    font-weight: 400;
    font-style: normal;
}

h2 {
    font-weight: 400;
    font-style: normal;
}

table {
    width: 97%;

    border-collapse: separate;
    border-spacing: 10px;

    margin-top: 20px;
}

th {
    font-weight: 600;
    font-size: 32px;
    color: white;

    padding: 5px;
    margin: 10px;

    background-color: #444343;

    border-radius: 6px;
}

td {
    font-size: 24px;
    color: white;
    text-align: center;
    padding: 5px;

    border-radius: 6px;

    background-color: #444343;
}

i {
    width: 100%;
    height: 100%;
}

`