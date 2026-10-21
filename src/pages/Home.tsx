import styled from "styled-components";

const StyledImg = styled.img`
    max-width: 40%;
    margin: 2% 0;
`;

export default function Home() {
    return (
        <>
            <h3>Home</h3>
            <StyledImg src="/jen.png" alt="Jennifer Alonzo Moreno's photo" />
            <p>
                My name is Jennifer Alonzo Moreno, and I am currently a senior studying Computer Science at Boston University. I am looking for a full-time position where I can continue to develop my
                frontend and backend skills. I'm especially interested in Web/Software Development and Project Management. I am open to continuing my studies into a masters program if the opportunity is financed by a potential employer.
            </p>
        </>
    );
}
