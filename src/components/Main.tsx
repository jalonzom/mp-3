import type { ReactNode } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
    width: 70%;
    font-size: calc(2px + 1.5vw);
    text-align: center;
    padding: 1%;

    @media screen and (max-width: 750px) {
        width: 100%;
        font-size: calc(2px + 2.5vw);
    }
`;

interface MainProps {
    children: ReactNode;
}

export default function Main(props: MainProps) {
    return (
        <StyledMain>{props.children}</StyledMain>
    );
}
