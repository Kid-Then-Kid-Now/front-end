import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import GalleryTitles from '../GalleryTitles/GalleryTitles';
import Submit from '../Submit/Submit';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<main>
				<Switch>
					<Route path='/' exact component={GalleryTitles} />

					<Route
						path='gallery/:id'
						render={(routerProps) => {
							return <GalleryTitles match={routerProps.match} />;
						}}
					/>

					<Route path='/submit' exact component={Submit} />
				</Switch>
			</main>
		</div>
	);
};

export default App;
