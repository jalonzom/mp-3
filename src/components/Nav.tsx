import { Link } from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    background-color: #67a9cf;

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const StyledList = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 750px) {
        flex-direction: row;
        justify-content: center;
    }
`;

const StyledItem = styled.li`
    border: solid #f5bebd 4px;
    text-align: center;
    margin: 11%;
    font-size: calc(2px + 2vw);

    @media screen and (max-width: 750px) {
        border: #f5bebd 3px solid;
        margin: 0;
        padding: 2px;
        font-size: calc(2px + 1.5vw);
    }
`;

const linkStyles = {
    color: "antiquewhite",
    textDecoration: "none",
};

export default function Nav() {
    return (
        <StyledNav>
            <StyledList>
                <StyledItem> <Link to="/" style={linkStyles}>Home</Link> </StyledItem>
                <StyledItem> <Link to="/education" style={linkStyles}>Education</Link> </StyledItem>
                <StyledItem> <Link to="/projects" style={linkStyles}>Projects</Link> </StyledItem>
                <StyledItem> <Link to="/work" style={linkStyles}>Work Experience</Link> </StyledItem>
                <StyledItem> <Link to="/skills" style={linkStyles}>Skills</Link> </StyledItem>
                <StyledItem> <Link to="/references" style={linkStyles}>References</Link> </StyledItem>
                <StyledItem> <Link to="/certifications" style={linkStyles}>Certifications</Link> </StyledItem>
            </StyledList>
        </StyledNav>
    );
}
