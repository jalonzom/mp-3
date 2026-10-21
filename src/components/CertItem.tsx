import styled from "styled-components";
import type { Certification } from "../interfaces/Resume.ts";

const StyledCertItem = styled.section`
    width: 75%;
    margin: 5% auto;
    padding-left: 3%;
    border-left: 6px solid #c75664;
    text-align: left;

    @media screen and (max-width: 750px) {
        width: 70%;
        padding-left: 5%;
        border-left: 5px solid #c75664;
    }
`;

const StyledText = styled.p`
    margin: 1.5% 0;
    font-size: calc(2px + 1.5vw);
    line-height: 1.4;

    @media screen and (max-width: 750px) {
        font-size: calc(2px + 2vw);
    }
`;

export default function CertItem(props: Certification) {
    return (
        <StyledCertItem>
            <h4>{props.name}</h4>
            <StyledText>{props.description}</StyledText>
        </StyledCertItem>
    );
}
