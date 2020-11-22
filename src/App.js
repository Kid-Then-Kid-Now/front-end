import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import GalleryTitles from './components/GalleryTitles/GalleryTitles';
import Submit from './components/Submit/Submit';
import GalleryDetail from './components/GalleryDetail/GalleryDetail';
import Login from "./components/Login/Login"

const App = (props) => {
	return (
		<div className='App'>
			<Header />
			<main>
				<Switch>
					<Route path='/' exact component={GalleryTitles} />
					<Route path='/submit' exact component={Submit} />
					<Route path="/login" exact component={Login} />
					<Route
						path='/:id'
						render={(routerProps) => {
							return <GalleryDetail match={routerProps.match} />;
						}}
					/>
				</Switch>
			</main>
		</div>
	);
};

export default App;
