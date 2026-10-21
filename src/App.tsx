import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import Education from "./pages/Education.tsx";
import Projects from "./pages/Projects.tsx";
import WorkExperience from "./pages/WorkExperience.tsx";
import Skills from "./pages/Skills.tsx";
import References from "./pages/References.tsx";
import Certifications from "./pages/Certifications.tsx";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-family: Consolas, "Courier New", monospace;
    }
    @media screen and (max-width: 750px) {
        main * {
            margin: 2%;
        }
    }
`;

const StyledApp = styled.div`
    background-color: #d1e5f0;
    width: 80%;
    margin: 0 auto;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 130vh;

    @media screen and (max-width: 750px) {
        flex-direction: column;
        height: 100vh;
    }
`;

function Root() {
    return (
        <>
            <Header />
            <Container>
                <Nav />
                <Main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/work" element={<WorkExperience />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/references" element={<References />} />
                        <Route path="/certifications" element={<Certifications />} />
                    </Routes>
                </Main>
            </Container>
            <Footer />
        </>
    );
}

const router = createBrowserRouter(
    [{ path: "*", Component: Root }]
);

export default function App() {
    return (
        <StyledApp>
            <GlobalStyle />
            <RouterProvider router={router} />
        </StyledApp>
    );
}
