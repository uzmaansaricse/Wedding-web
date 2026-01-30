import React, { useEffect, useState } from 'react';

const FloatingHearts = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const createHeart = () => {
            const id = Date.now() + Math.random();
            const left = Math.random() * 100; // Random horizontal position 0-100%
            const size = Math.random() * 20 + 10; // Random size between 10px and 30px
            const duration = Math.random() * 10 + 10; // Random float duration between 10s and 20s
            const delay = Math.random() * 5; // Random delay

            return { id, left, size, duration, delay };
        };

        // Initial batch of hearts
        const initialHearts = Array.from({ length: 15 }, createHeart);
        setHearts(initialHearts);

        const interval = setInterval(() => {
            setHearts((currentHearts) => {
                // Remove hearts that would have finished their animation (approx) to keep array size manageable
                // In a strictly CSS animation, they loop, but we want to re-randomize positions sometimes.
                // Actually, easiest is just to render a static set of randomized hearts that loop infinitely with different delays.
                // But for "on page load" feel and continuous stream, let's just stick to a fixed set with infinite CSS loop.
                return currentHearts;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // We will generate a fixed set of 'heart' elements that have infinite animation loops.
    // To make it look natural, we give them random params.
    const heartElements = Array.from({ length: 20 }).map((_, i) => {
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 15 + 15 + 's'; // Slow: 15-30s
        const animationDelay = '-' + (Math.random() * 30) + 's'; // Start at different times instantly
        const size = Math.random() * 1.5 + 0.5 + 'rem';
        const opacity = Math.random() * 0.3 + 0.1; // Subtle opacity

        return (
            <div
                key={i}
                className="absolute text-primary pointer-events-none"
                style={{
                    left: `${left}%`,
                    bottom: '-10%',
                    fontSize: size,
                    opacity: opacity,
                    animation: `floatUp ${animationDuration} linear infinite`,
                    animationDelay: animationDelay,
                    zIndex: 0
                }}
            >
                <i className="fa-solid fa-heart"></i>
            </div>
        );
    });

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden h-full w-full z-0">
            {heartElements}
        </div>
    );
};

export default FloatingHearts;
