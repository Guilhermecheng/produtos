import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { Helmet } from 'react-helmet';
import styles from './Produto.module.css';

const Produto = () => {
    const [dataFromProduct, setdataFromProduct] = useState(null);
    const params = useParams();

    async function getProductData() {
        const data = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.produto}`);
        const json = await data.json();
        setdataFromProduct(json);
    }

    useEffect(() => {
        getProductData();
    }, []);


    return (
        <div>
            <Helmet>
                <title>Ranek | {dataFromProduct ? dataFromProduct.nome : 'Produto'}</title>                
            </Helmet>
            {dataFromProduct ? (
                <div className={styles.productDiv + " animeLeft"}>
                    <img src={dataFromProduct.fotos[0].src} /> 
                    <div className={styles.infoDoProduto}>                    
                        <h2>{dataFromProduct.nome}</h2>
                        <p className={styles.preco}>R$ {dataFromProduct.preco}</p>
                        <p>{dataFromProduct.descricao}</p>
                    </div>
                </div>
            ) : (
                <ReactLoading className={styles.loading} type='spin' color='#D6D6D6' height={50} width={50} />
            )}
        </div>
    )
}

export default Produto;
