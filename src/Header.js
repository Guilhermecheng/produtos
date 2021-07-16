import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const [corDoBotao, setCorDoBotao] = useState('');

    

    return (
        <nav className={styles.header}>      
            <NavLink 
                className={styles.headerButtons}
                to="/"
                exact
                end
            >
                Produtos
            </NavLink>
            <NavLink 
                className={styles.headerButtons}
                to="/contato"
                end
            >
                Contato
            </NavLink>
        </nav>
    )
}

export default Header;
