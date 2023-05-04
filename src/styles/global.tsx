import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        outline: none;
    }

    body {
        font-family: "Titillium Web";
        background-color: ${(props) =>
				props.theme.colors.background_color};
        color: ${(props) => props.theme.colors.light_gray};
    }

    button {
        cursor: pointer;
    }
`;
