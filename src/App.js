import { React, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import GalleryTitles from './components/GalleryTitles/GalleryTitles';
import Submit from './components/Submit/Submit';
import GalleryDetail from './components/GalleryDetail/GalleryDetail';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const App = (props) => {
	const [token, setToken] = useState(null);
	const [user, setUser] = useState('');
	return (
		<div className='App'>
			<Header token={token} />
			<main>
				<Switch>
					<Route
						path='/'
						exact
						render={() => {
							return <GalleryTitles token={token} />;
						}}
					/>
					<Route
						path='/submit'
						exact
						render={() => (
							<Submit token={token} user={user} setUser={setUser} />
						)}
					/>
					<Route
						path='/login'
						exact
						render={() => {
							return <Login setToken={setToken} setUser={setUser} />;
						}}
					/>
					<Route path='/register' exact component={Register} />
					<Route
						path='/:id'
						render={(routerProps) => {
							return <GalleryDetail token={token} match={routerProps.match} />;
						}}
					/>
				</Switch>
			</main>
		</div>
	);
};

export default App;
