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

        // Update or create Open Graph meta tags
        const imageUrl = 'https://img.youtube.com/vi/' + `${lastPart}` + '/0.jpg'; // Replace with your image URL

        const metaTags = [
            { property: 'og:title', content: `About - ${lastPart}` },
            { property: 'og:description', content: `This is the about page for ${lastPart}.` },
            { property: 'og:image', content: imageUrl },
            { property: 'og:url', content: window.location.href },
            { property: 'og:type', content: 'website' } // Optional, specify the type of content
        ];

        metaTags.forEach(({ property, content }) => {
            const metaTag = document.querySelector(`meta[property="${property}"]`);
            if (metaTag) {
                metaTag.setAttribute('content', content);
            } else {
                const newMetaTag = document.createElement('meta');
                newMetaTag.setAttribute('property', property);
                newMetaTag.content = content;
                document.head.appendChild(newMetaTag);
            }
        });
    }, []);

    return (
        <div>
            <h1>Hello!</h1>
            <p>This is a page.</p>
        </div>
    );
};

export default AboutPage;