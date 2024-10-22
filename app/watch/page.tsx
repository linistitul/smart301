// app/watch/page.tsx

"use client"; // This directive makes the component a Client Component

import React, { useEffect } from 'react';

const Watch = () => {
    useEffect(() => {
        // Get the last part of the URL
        const pathParts = window.location.pathname.split('/');
        const lastPart = pathParts[pathParts.length - 1];

        // Update meta tags
        document.title = `Watch - ${lastPart}`;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', `This page is for ${lastPart}.`);
        } else {
            const newMetaDescription = document.createElement('meta');
            newMetaDescription.name = 'description';
            newMetaDescription.content = `This page is for ${lastPart}.`;
            document.head.appendChild(newMetaDescription);
        }
    }, []);

    return (
        <div>
            <h1>Hello!</h1>
            <p>This is a page.</p>
        </div>
    );
};

export default Watch;