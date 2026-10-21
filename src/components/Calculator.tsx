import styled from "styled-components";
import useCalculator from "../hooks/useCalculator.ts";

const StyledCalculator = styled.div`
    font-family: "Trebuchet MS", sans-serif;
    background-color: #f5bebd;
    border: 4px solid #c75664;
    width: 70%;
    margin: 2% auto;
    padding: 2%;
    border-radius: 15px;
    text-align: center;

    @media screen and (max-width: 750px) {
        width: 90%;
        padding: 4%;
    }
`;

const StyledLabel = styled.label`
    display: block;
    margin: 2% 0 1% 0;
    color: #c75664;
    font-weight: bold;
`;

const StyledInput = styled.input`
    width: 80%;
    padding: 1%;
    border-radius: 10px;
    border: 3px solid #67a9cf;
    background-color: #d1e5f0;
    font-size: calc(2px + 1.5vw);

    @media screen and (max-width: 750px) {
        width: 90%;
    }
`;

const StyledButton = styled.button`
    background-color: #67a9cf;
    color: antiquewhite;
    border: 3px solid #f5bebd;
    padding: 1% 3%;
    margin: 2%;
    border-radius: 10px;
    font-size: calc(2px + 1.5vw);

    @media screen and (max-width: 750px) {
        padding: 3% 5%;
        font-size: calc(2px + 3vw);
    }
`;

const StyledOutput = styled.h3`
    margin-top: 3%;
    padding: 2%;
    background-color: #d1e5f0;
    border: 3px solid #c75664;
    border-radius: 10px;
    font-size: calc(2px + 2vw);

    @media screen and (max-width: 750px) {
        font-size: calc(2px + 3vw);
    }
`;

export default function Calculator() {
    const { firstRef, secondRef, output, calculate, clearAll } = useCalculator();

    return (
        <StyledCalculator>
            <StyledLabel htmlFor="first-input">First Number</StyledLabel>
            <StyledInput id="first-input" type="text" ref={firstRef} />
            <StyledLabel htmlFor="second-input">Second Number</StyledLabel>
            <StyledInput id="second-input" type="text" ref={secondRef} />
            <StyledButton onClick={() => calculate("+")}> + </StyledButton>
            <StyledButton onClick={() => calculate("-")}> - </StyledButton>
            <StyledButton onClick={() => calculate("*")}> * </StyledButton>
            <StyledButton onClick={() => calculate("/")}> / </StyledButton>
            <StyledButton onClick={() => calculate("**")}> ** </StyledButton>
            <StyledButton onClick={clearAll}> Clear </StyledButton>
            <StyledOutput style={{ color: Number(output) < 0 ? "red" : "black" }}>{output}</StyledOutput>
        </StyledCalculator>
    );
}
