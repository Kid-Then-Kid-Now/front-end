import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import GalleryDetails from "../GalleryDetails/GalleryDetails"

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Route path='/' exact component={GalleryDetails} /> 

                <Route
                    path="gallery/:id"
                    render={(routerProps) => {
                        return <GalleryDetails match={routerProps.match} />
                    }}
                />
            </main>
        </div>
    );
};

export default App;