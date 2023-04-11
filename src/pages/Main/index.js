import { useState, useCallback, useEffect } from "react";
import { RxGithubLogo, RxPlus } from "react-icons/rx";
import { ImSpinner } from "react-icons/im";
import { FiTrash, FiArrowRightCircle } from "react-icons/fi";

import { Container, Form, SubmitButton, List, DeleteButton } from "./styles";

import api from "../../services/api";

export default function Main() {

    const [newRepo, setNewRepo] = useState("");
    const [repositories, SetRepositories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    // Buscar repositórios
    useEffect(() => {
        const repoStorage = localStorage.getItem("@repos");

        if(repoStorage) {
            SetRepositories(JSON.parse(repoStorage));
        }
    }, [])

    // Salvar alterações
    useEffect(() => {
        localStorage.setItem("@repos", JSON.stringify(repositories));
    }, [repositories])

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        async function submit() {

            setLoading(true);
            setAlert(null);

            try {

                if(newRepo === "") {
                    throw new Error("Você precisa indicar um repositório!");
                }

                const response = await api.get(`repos/${newRepo}`);

                const hasRepo = repositories.find(repo => repo.name === newRepo);

                if(hasRepo) {
                    throw new Error("Repositório Duplicado!");
                }

                const data = {
                    name: response.data.full_name,
                }

                SetRepositories([...repositories, data]);
                setNewRepo("");
            }catch(error) {
                setAlert(true);
                console.log(error);
            }finally {
                setLoading(false);
            }
            
        }

        submit();

    }, [newRepo, repositories]);

    function handleInputChange(e) {
        setNewRepo(e.target.value);
        setAlert(null);
    }

    const handleDelete = useCallback((repo) => {
        const find = repositories.filter(r => r.name !== repo);
        SetRepositories(find);
    }, [repositories]);

    return (
        <Container>

            <h1>
                <RxGithubLogo size={25} />
                Meus Repositórios
            </h1>

            <Form onSubmit={ handleSubmit } error={alert} >
                <input 
                    type="text" 
                    placeholder="Adicionar Repositórios..." 
                    value={newRepo}
                    onChange={ handleInputChange }
                />

                <SubmitButton loading={ loading ? 1 : 0 }>
                    {loading ? (
                        <ImSpinner size={15} color="#FFF" />
                    ) : (
                        <RxPlus size={15} color="#FFF" />
                    )}
                </SubmitButton>
            </Form>

            <List>
                {repositories.map(repo => (
                    <li key={repo.name}>
                        <span>
                            <DeleteButton onClick={ () => handleDelete(repo.name) }>
                                <FiTrash size={15} />
                            </DeleteButton>
                         
                            {repo.name}
                        </span>
                        <a href="">
                            <FiArrowRightCircle size={20} />
                        </a>
                    </li>
                ))}
            </List>

        </Container>
    );
}