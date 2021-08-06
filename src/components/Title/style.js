import styled from "styled-components";

export const Title = styled.h2`
    margin-bottom: 2rem;
    font-size: 3rem;
    color: ${ props => props.theme.title.primary };

    span {
        color: ${ props => props.theme.title.secondary };
    }
`