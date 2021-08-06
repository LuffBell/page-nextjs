import styled from "styled-components";

export const FooterContainer = styled.footer`
    padding: 3rem 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const FooterSocial = styled.h6`
    color: ${ props => props.theme.text.primary };
`