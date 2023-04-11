import { useState, useCallback } from "react";
import { RxGithubLogo, RxPlus } from "react-icons/rx";
import { ImSpinner } from "react-icons/im";

import { Container, Form, SubmitButton } from "./styles";

import api from "../../services/api";

export default function Main() {

    const [newRepo, setNewRepo] = useState("");
    const [repositories, SetRepositories] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        async function submit() {

            setLoading(true);

            try {
                const response = await api.get(`repos/${newRepo}`);

                const data = {
                    name: response.data.full_name,
                }

                SetRepositories([...repositories, data]);
                setNewRepo("");
            }catch(error) {
                console.log(error);
            }finally {
                setLoading(false);
            }
            
        }

        submit();

    }, [newRepo, repositories]);

    return (
        <Container>

            <h1>
                <RxGithubLogo size={25} />
                Meus Repositórios
            </h1>

            <Form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    placeholder="Adicionar Repositórios..." 
                    value={newRepo}
                    onChange={ (e) => setNewRepo(e.target.value) }
                />

                <SubmitButton loading={ loading ? 1 : 0 }>
                    {loading ? (
                        <ImSpinner size={15} color="#FFF" />
                    ) : (
                        <RxPlus size={15} color="#FFF" />
                    )}
                </SubmitButton>
            </Form>

        </Container>
    );
}