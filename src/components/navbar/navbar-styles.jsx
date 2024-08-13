import styled from 'styled-components';

export const Nav = styled.nav`
    background: ${({ backgroundColor }) => backgroundColor};
    color: ${({ textColor }) => textColor};
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 950px) {
        transition: 0.9s all ease;
    }
`;
