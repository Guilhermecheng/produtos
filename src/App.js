import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contato from './Contato';
import Produto from './Produto';
import Other from './Other';
import './style.css';

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook



function App() {


	return (
		<BrowserRouter>
			<div className="container">
				<Header />
				<div className="containerContent">
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/contato" exact>
							<Contato />
						</Route>
						<Route path="/produtos/:produto" >
							<Produto />
						</Route>
						<Route >
							<Other />
						</Route> 

					</Switch>
				</div>
				<Footer />
			</div>

		</BrowserRouter>
	)

}

export default App;
