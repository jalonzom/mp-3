import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #c75664;
    padding-left: 2%;

    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Jennifer Alonzo Moreno's Resume</h1>
            <p><em>My Online Resume</em></p>
        </StyledHeader>
    );
}
