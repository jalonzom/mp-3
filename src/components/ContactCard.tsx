import styled from "styled-components";
import type { Contact } from "../interfaces/Resume.ts";

const StyledContactCard = styled.p`
    background-color: #d1e5f0;
    border: 3px solid #67a9cf;
    border-radius: 10px;
    padding: 1%;
    margin: 1% 0;
    font-size: calc(2px + 1.5vw);
    text-align: center;

    @media screen and (max-width: 750px) {
        font-size: calc(2px + 2vw);
    }
`;

export default function ContactCard(props: Contact) {
    return (
        <StyledContactCard>
            <strong>{props.name}</strong><br />
            {props.title}<br />
            Email: {props.email}<br />
            Phone: {props.phone}
        </StyledContactCard>
    );
}
