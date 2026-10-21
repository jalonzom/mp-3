import styled from "styled-components";
import type { Entry } from "../interfaces/Resume.ts";

const StyledEduEntry = styled.section`
    width: 80%;
    margin: 1% auto;
    padding: 1%;
    background-color: #d1e5f0;
    border-left: 8px solid #c75664;
    border-radius: 10px;
    text-align: left;

    @media screen and (max-width: 750px) {
        width: 95%;
        border-left: 6px solid #c75664;
    }
`;

const StyledText = styled.p`
    margin: 1% 0;
    font-size: calc(2px + 1.5vw);

    @media screen and (max-width: 750px) {
        font-size: calc(2px + 2vw);
    }
`;

export default function EduEntry(props: Entry) {
    return (
        <StyledEduEntry>
            <StyledText>
                <strong>{props.place}</strong><br />
                {props.role ? <>{props.role}<br /></> : ""}
                {props.dates}
            </StyledText>
            {
                props.details.map((detail: string) =>
                    <StyledText key={detail}>{detail}</StyledText>
                )
            }
        </StyledEduEntry>
    );
}
