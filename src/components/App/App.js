import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import GalleryDetails from "../GalleryDetails/GalleryDetails"

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Switch>
                <Route path='/' exact component={GalleryDetails} /> 

                <Route
                    path="gallery/:id"
                    render={(routerProps) => {
                        return <GalleryDetails match={routerProps.match} />
                    }}
                />

                <Route path="/submit" exact component={Submit} />
                </Switch>
            </main>
        </div>
    );
};

export default App;