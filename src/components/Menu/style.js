import styled from "styled-components";

export const Nav = styled.ul`
    display: flex;
    align-items: center;
`

export const Link = styled.li`
    cursor: pointer;
    font-size: 1.2rem;
    margin-right: 1.5rem;
    color: ${ (props) => props.theme.text.primary };
    text-decoration: none;

    &:first-child {
        color: ${ (props) => props.theme.text.secondary };

        &:hover {
            color: ${ (props) => props.theme.text.primary };
        }
    }

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        color: ${ props => props.theme.text.secondary };
    }
`