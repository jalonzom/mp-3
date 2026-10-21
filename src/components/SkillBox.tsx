import styled from "styled-components";

const StyledSkillBox = styled.section`
    width: 80%;
    margin: 10% auto;
    padding: 1%;
    background-color: #f5bebd;
    border: 4px solid #c75664;
    border-radius: 15px;
    text-align: center;

    @media screen and (max-width: 750px) {
        width: 95%;
        padding: 5%;
    }
`;

const StyledTitle = styled.h4`
    color: #c75664;
    margin-bottom: 3%;
    font-size: calc(2px + 2vw);
`;

const StyledText = styled.p`
    background-color: #d1e5f0;
    border: 3px solid #67a9cf;
    border-radius: 10px;
    padding: 3%;
    margin: 1% 0;
    font-size: calc(2px + 1.5vw);

    @media screen and (max-width: 750px) {
        font-size: calc(2px + 2vw);
        padding: 1%;
    }
`;

interface SkillBoxProps {
    title: string;
    skills: string;
}

export default function SkillBox(props: SkillBoxProps) {
    return (
        <StyledSkillBox>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledText>{props.skills}</StyledText>
        </StyledSkillBox>
    );
}
