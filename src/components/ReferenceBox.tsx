import type { ReactNode } from "react";
import styled from "styled-components";

const StyledReferenceBox = styled.section`
    width: 85%;
    margin: 2% auto;
    padding: 1%;
    background-color: #f5bebd;
    border: 4px solid #c75664;
    border-radius: 15px;

    @media screen and (max-width: 750px) {
        width: 95%;
        padding: 1%;
    }
`;

const StyledTitle = styled.h4`
    color: #c75664;
    margin-bottom: 1%;
    font-size: calc(2px + 2vw);
`;

interface ReferenceBoxProps {
    title: string;
    children: ReactNode;
}

export default function ReferenceBox(props: ReferenceBoxProps) {
    return (
        <StyledReferenceBox>
            <StyledTitle>{props.title}</StyledTitle>
            {props.children}
        </StyledReferenceBox>
    );
}
