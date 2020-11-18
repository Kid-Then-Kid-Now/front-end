import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import GalleryTitles from '../GalleryTitles/GalleryTitles';
import Submit from '../Submit/Submit';
import GalleryDetail from '../GalleryDetail/GalleryDetail';

const App = (props) => {
	return (
		<div className='App'>
			<Header />
			<main>
				<Switch>
					<Route path='/' exact component={GalleryTitles} />
					<Route path='/submit' exact component={Submit} />
					
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
