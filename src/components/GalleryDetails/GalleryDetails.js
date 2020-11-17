// // This file will list an image and title of all things submitted to the site. Essentially the content on the landing page. 

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GalleryDetails = () => {
    const [gallery, setGallery] = useState([]);
    const nostalgia = "OURAPIORJSONHERE";

    useEffect(() => {
        fetch(nostalgia)
        .then((res) => res.json())
        .then((res) => {
            setGallery(res);
        })
        .catch((err) => {
            return "There appears to be a file with Details.js. Is the API or JSON connected properly?"
        })
    })

    return (
        <div>
            {gallery.map((detail) => {
                return (
                    <Link to={`/gallery/${detail.id}`} key={detail.id}>
                    <div className="card">{detail.title}</div>
                    </Link>
                )
            })}
        </div>
    );
};

export default GalleryDetails;