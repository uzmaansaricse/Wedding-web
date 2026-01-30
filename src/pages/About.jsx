import React from 'react';
import FloatingHearts from '../components/ui/FloatingHearts';

const About = () => {

    return (
        <div className="w-full relative bg-background-light">
            <FloatingHearts />

            {/* Hero Section */}
            <div className="relative w-full h-[60vh] flex items-center justify-center bg-black/50 overflow-hidden">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop")' }}
                >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
                    <span className="block text-primary text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4">
                        ABOUT US
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6">
                        Celebrating Love, Within Your Budget
                    </h1>
                    <div className="h-[2px] w-24 bg-primary mx-auto"></div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1200px] mx-auto px-6 py-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Grid */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-6">
                            <img
                                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2574&auto=format&fit=crop"
                                alt="Royal Decor"
                                className="w-full h-80 object-cover rounded-tr-[4rem] rounded-bl-[4rem] shadow-2xl mt-12 border-2 border-primary/20"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2574&auto=format&fit=crop"
                                alt="Indian Bride"
                                className="w-full h-80 object-cover rounded-tl-[4rem] rounded-br-[4rem] shadow-2xl -mt-12 border-2 border-primary/20"
                            />
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/30 rounded-full flex items-center justify-center bg-white/90 backdrop-blur shadow-lg">
                            <span className="text-4xl text-primary font-script">
                                Est. 2014
                            </span>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-[#181118] mb-6 leading-tight">
                                10+ Years of Experience, <span className="text-primary italic">Endless Trust</span>
                            </h2>

                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                For over a decade, we have been helping couples turn their wedding dreams into reality —
                                without stretching their budget. We believe a beautiful wedding doesn’t have to be expensive,
                                it just needs the right planning, honest guidance, and creative execution.
                            </p>

                            <p className="text-gray-600 text-lg leading-relaxed">
                                From intimate ceremonies to grand celebrations, we specialize in delivering premium-quality
                                services within limited budgets. Every detail is thoughtfully planned, every rupee is valued,
                                and every celebration is handled with care — just like family.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                            <div>
                                <h3 className="text-4xl font-serif text-primary mb-2">100+</h3>
                                <p className="text-sm uppercase tracking-wider text-gray-500 font-bold">
                                    Weddings Planned
                                </p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-serif text-primary mb-2">10+ Years</h3>
                                <p className="text-sm uppercase tracking-wider text-gray-500 font-bold">
                                    Experience
                                </p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <img
                                src="https://signature.freefire-name.com/img.php?f=7&t=The%20Marwad"
                                alt="Signature"
                                className="h-12 opacity-60"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision / Mission */}
            <div className="bg-[#1a0b0b] text-white py-24 relative overflow-hidden">
                <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
                    <span className="material-symbols-outlined text-6xl text-primary mb-8 opacity-80">
                        diamond
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                        Our mission is simple — deliver the best wedding experience,
                        no matter the budget, with honesty, creativity, and heart.
                    </h2>
                    <p className="text-white/60 text-lg font-light tracking-wide">
                        Because memories matter more than money.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
