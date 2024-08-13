import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#fff',
    text: 'rgb(19, 28, 35)',
    bodyInverse: 'rgb(19, 28, 35)',
    textInverse: '#fff',
    cardfixtureBoxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;',
    navBarText: 'white'
};

export const darkTheme = {
    body: 'rgb(19, 28, 35)',
    text: '#fff',
    bodyInverse: '#fff',
    textInverse: 'rgb(19, 28, 35)',
    cardfixtureBg: '#24486f',
    cardfixtureBoxShadow: 'rgb(51, 69, 138) 0px 14px 28px,rgba(0, 0, 0, 0.22) 0px 10px 10px;',
    navBarText: 'black'
}

export const GlobalStyle = createGlobalStyle`
    body { 
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all .5s linear;
    }

    .card-fixture {
        background: ${({ theme }) => theme.cardfixtureBg};
        transition: all .5s linear;
        box-shadow: ${({ theme }) => theme.cardfixtureBoxShadow};
    }
`;

