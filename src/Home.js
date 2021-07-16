import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { Helmet } from 'react-helmet';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [produtosData, setProdutosData] = useState(null);

    async function fetchingDataFromApi() {
        const data = await fetch("https://ranekapi.origamid.dev/json/api/produto");
        const json = await data.json();
        console.log(json);
        setProdutosData(json);
    }

    useEffect(() => { 
        fetchingDataFromApi();
    }, []);

    return (
        <div>
            <Helmet>
                <title>Home</title>                
            </Helmet>
            <section className={styles.mainPart}>
                {produtosData ? (
                    produtosData.map((produto) => (
                        <div key={produto.id} className={styles.produtoBloco}>
                            <Link  style={{textDecoration: "none", color: "#000"}} to={`/produtos/${produto.id}`}>
                                <img src={produto.fotos[0].src} />
                                <p>{produto.nome}</p>
                            </Link>
                        </div>
                        ))
                ) : (
                    <ReactLoading className={styles.loading} type='spin' color='#D6D6D6' height={50} width={50} />
                )}
            </section>            
        </div>
    )
}

export default Home;
