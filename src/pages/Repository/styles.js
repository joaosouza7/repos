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

export const FilterList = styled.div`
    margin: 1.3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        border: 0;
        padding: .5rem .7rem;
        border-radius: .2rem;
        margin: 0 .4rem;

        &:nth-child(${props => props.active + 1}) {
            background: #0071db;
            color: #FFF
        }
    }
`;

export const IssuesList = styled.ul`
    list-style: none;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #eee;

    li {
        display: flex;
        padding: 15px 10px;

        & + li {
            margin-top: .7rem;
        }

        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #15171a;
        }

        div {
            flex: 1;
            margin-left: .7rem;

            p {
                font-size: 14px;
                margin-top: .6rem;
            }
        }

        strong {
            font-size: 16px;

            a {
                text-decoration: none;
                color: #222;
                transition: all .3s;

                &:hover {
                    color: #0071db;
                }
            }

            p {
                display: inline-block;
                background: #222;
                color: #efefef;
                padding: .5rem .7rem;
                border-radius: .2rem;
                font-size: 12px;
                font-weight: 600;
                margin-left: .5rem;
            }

        }
    }
`;

export const PageActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    button {
        border: 0;
        background: none;

        &:disabled {
            cursor: not-allowed;
            
            svg {
                color: #8a8787!important;
            }
        }
    }
`;