import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #c75664;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>All rights reserved by Jennifer Alonzo <a href="">Credits</a> &#169;</p>
        </StyledFooter>
    );
}
