import styled from "styled-components";
import type { Entry } from "../interfaces/Resume.ts";

const StyledWorkEntry = styled.section`
    width: 95%;
    margin: 3%;
    padding: 3%;
    background-color: #d1e5f0;
    border-left: 8px solid #67a9cf;
    border-radius: 10px;
    text-align: left;

    @media screen and (max-width: 750px) {
        padding: 4%;
        border-left: 6px solid #67a9cf;
    }
`;

const StyledText = styled.p`
    margin: 2% 0;
    font-size: calc(2px + 1vw);

    @media screen and (max-width: 750px) {
        font-size: calc(2px + 1.5vw);
    }
`;

const StyledRole = styled.em`
    color: #c75664;
    font-style: normal;
    font-weight: bold;
`;

export default function WorkEntry(props: Entry) {
    return (
        <StyledWorkEntry>
            <StyledText><strong>{props.place}</strong><br />{props.dates}</StyledText>
            <StyledText><StyledRole>{props.role}</StyledRole></StyledText>
            {
                props.details.map((detail: string) =>
                    <StyledText key={detail}>{detail}</StyledText>
                )
            }
        </StyledWorkEntry>
    );
}
