import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 1.8rem;
    margin: 6rem auto;
    border-radius: .2rem;

    h1 {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin-right: .5rem;
        }
    }
`;

export const Form = styled.form`
    margin-top: 1.5rem;
    display: flex;

    input {
        flex: 1;
        border: 1px solid ${props => (props.error ? '#e61e1e' : '#DDD') };
        border-radius: .2rem;
        padding: 10px 15px;
    }
`;

// Crindo animação do botão
const animate = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading
}))`
    background-color: #15171a;
    border: 0;
    border-radius: .2rem;
    margin-left: .5rem;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
    }

    ${props => props.loading && 
        css`
            svg {
                animation: ${animate} 2s linear infinite;
            }
        `
    }
`;

export const List = styled.ul`
    list-style: none;
    margin-top: 2rem;

    li {
        padding: .6rem 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & + li {
            border-top: 1px solid #eee;
        }

        a {
            color: #15171a;
            text-decoration: none;
        }
    }
`;

export const DeleteButton = styled.button.attrs({
    type: 'button'
})`
    background: none;
    border: 0;
    padding: 0 7px;
    color: #e61e1e;
    vertical-align: middle;
`;