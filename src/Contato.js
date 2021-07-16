import React from 'react'
import { Helmet } from 'react-helmet';
import imagem from './img/contato.jpg';
import styles from './Contato.module.css';

const meusDados = {
    nome: 'Guilherme Cheng',
    email: 'guilherme.cheng@gmail.com',
    numero: '+55 11 97437-5560',
    endereco: 'São Paulo, SP'
};

const Contato = () => {
    return (
        <div>
            <Helmet>
                <title>Ranek | Contato</title>                
            </Helmet>
            <div className={styles.blocoContato}>
                <img src={imagem} alt="contato" />
                <div className={styles.dadosContato}>
                    <h3>Entre em contato conosco.</h3>
                    <ul>
                        <li>{meusDados.nome}</li>
                        <li>{meusDados.email}</li>
                        <li>{meusDados.numero}</li>
                        <li>{meusDados.endereco}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contato;
