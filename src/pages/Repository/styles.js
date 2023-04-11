import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

// Crindo animação de loading
const animate = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    ${props => props.spinner && 
        css`
            svg {
                animation: ${animate} 2s linear infinite;
            }
        `
    }
`;

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 1.8rem;
    margin: 6rem auto;
    border-radius: .2rem;
`;

export const BackButton = styled(Link)`
    border: 0;
    background: none;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 120px;
        object-fit: cover;
        margin: 1rem 0;
    }

    h1 {
        font-size: 1.7rem;
        color: #15171a;
    }

    p {
        text-align: center;
        max-width: 300px;
        margin-top: .7rem;
        line-height: 1.4;
    }
`;


