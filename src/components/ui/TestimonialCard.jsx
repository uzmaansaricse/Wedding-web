import React from 'react';

const TestimonialCard = ({ stars = 5, title, quote, image, name, location, date }) => {
    return (
        <div className="bg-background-light dark:bg-[#2a1a2a] p-8 rounded-2xl relative shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(212,17,212,0.1)] transition-all h-full flex flex-col justify-between border border-gray-100 dark:border-gray-800">
            <div>
                {/* Quote Icon */}
                <span className="material-symbols-outlined absolute top-6 right-6 text-primary/20 text-6xl select-none">format_quote</span>

                {/* Stars */}
                <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={`material-symbols-outlined text-xl ${i < stars ? 'fill-current' : ''}`}>
                            {i < Math.floor(stars) ? 'star' : (stars % 1 !== 0 && i === Math.floor(stars) ? 'star_half' : 'star_border')}
                        </span>
                    ))}
                </div>

                {/* Title (Optional) */}
                {title && <h3 className="mb-3 text-lg font-bold leading-tight text-[#181118] dark:text-white">"{title}"</h3>}

                {/* Quote */}
                <p className="text-[#181118] dark:text-gray-200 text-lg leading-relaxed italic mb-6 relative z-10 text-sm">
                    "{quote}"
                </p>
            </div>

            {/* Client Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="size-12 rounded-full bg-gray-300 overflow-hidden shrink-0">
                    <img alt={name} className="w-full h-full object-cover" src={image} />
                </div>
                <div>
                    <h4 className="font-bold text-[#181118] dark:text-white text-sm">{name}</h4>
                    <p className="text-xs text-gray-500">{date ? `Married ${date} • ` : ''}{location}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
