import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FiArrowLeftCircle } from "react-icons/fi";
import { ImSpinner } from "react-icons/im";

import { Container, Owner, Loading, BackButton } from "./styles";

import api from "../../services/api";

export default function Repository() {

    const { repository } = useParams();

    const [repositorio, setRepositorio] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function load() {
            const nomeRepo = repository;
            
            const [repositorioData, issuesData] = await Promise.all([
                api.get(`repos/${nomeRepo}`),
                api.get(`repos/${nomeRepo}/issues`, {
                    params: {
                        state: 'open',
                        per_page: 5
                    }
                })
            ]);

            setRepositorio(repositorioData.data);
            setIssues(issuesData.data);
            setLoading(false);
        }

        load();

    }, [repository])

    if(loading) {
        return (
            <Loading spinner={ loading ? 1 : 0 }>
                <ImSpinner size={50} color="#FFF" />
            </Loading>
        ); 
    }

    return (
        <Container>

            <BackButton to="/">
                <FiArrowLeftCircle size={25} color="#000" />
            </BackButton>

            <Owner>
                <img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
                <h1>{repositorio.name}</h1>
                <p>{repositorio.description}</p>
            </Owner>
        </Container>
    );
}