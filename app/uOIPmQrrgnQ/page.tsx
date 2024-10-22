"use client"; // This directive makes the component a Client Component

import React, { useEffect } from 'react';

const AboutPage = () => {
    useEffect(() => {
        // Get the last part of the URL
        const pathParts = window.location.pathname.split('/');
        const lastPart = pathParts[pathParts.length - 1];

        // Update meta tags
        document.title = `About - ${lastPart}`;
        
        // Update or create meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', `This is the about page for ${lastPart}.`);
        } else {
            const newMetaDescription = document.createElement('meta');
            newMetaDescription.name = 'description';
            newMetaDescription.content = `This is the about page for ${lastPart}.`;
            document.head.appendChild(newMetaDescription);
        }

        // Update or create Open Graph image meta tag
        const metaImage = document.querySelector('meta[property="og:image"]');
        const imageUrl = 'https://img.youtube.com/vi/' + `${lastPart}` + '/0.jpg'; // Replace with your image URL
        if (metaImage) {
            metaImage.setAttribute('content', imageUrl);
        } else {
            const newMetaImage = document.createElement('meta');
            newMetaImage.setAttribute('property', 'og:image');
            newMetaImage.content = imageUrl;
            document.head.appendChild(newMetaImage);
        }
    }, []);

    return (
        <div>
            <h1>Hello!</h1>
            <p>This is a page.</p>
        </div>
    );
};

export default AboutPage;