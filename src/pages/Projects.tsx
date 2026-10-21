import styled from "styled-components";
import Calculator from "../components/Calculator.tsx";

const StyledProject = styled.p`
    margin-bottom: 5%;
`;

export default function Projects() {
    return (
        <>
            <h3>Projects</h3>
            <StyledProject>
                <em>BostonHacks BUdget Project</em>: Developed a student friendly budgeting website called BUdget for BU students using CSS, HTML, Javascript, npm, and React that eased the stress of organizing your finances while also offering financial advice using AI.
            </StyledProject>

            <h3>Calculator</h3>
            <Calculator />
        </>
    );
}
