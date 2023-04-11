import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background-color: #15171a;
        font-size: 15px;
        color: #222;
    }

    body, input, button {
        color: #222;
        font-size: 15px;
        font-family: 'Mulish', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;