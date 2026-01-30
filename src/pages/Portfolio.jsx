import React from 'react';
import { Link } from 'react-router-dom';
import FloatingHearts from '../components/ui/FloatingHearts';

const Portfolio = () => {
    const portfolioItems = [
        {
            id: 1,
            couple: 'Aditi & Rohan',
            location: 'Udaipur, Rajasthan',
            date: 'Nov 2023',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB8HoXSEm7wgVllu-ForsyVFwj-9Dr5eh11zoRHmJVv-rOZurCDHaFYo-r7SwVq1Bn5fMsOnoqfIT53h0ms_e3wItYzbXYEw7qd35ckeeIK2fg_AAY7SJMBrs6ngW9t5dfLGo220crP8SDGd3R3zKxQe2m_NwAZnZy6VnT-4zX8UFErE61PAyiis0SY5gcML5wz7DbRRJ6iL2QiwrE810iAsUT_pVVlVDifv2jb7qWwKYsiCeaZtt47OOhurpH4HRojI-9sp4zYgyd',
            category: 'Royal'
        },
        {
            id: 2,
            couple: 'Priya & Amit',
            location: 'Bikaner, Rajasthan',
            date: 'Dec 2023',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiLtS26EHZZV2-hqCG3BWnwRnt-7CdbNPcW3zBmj25PhwD_AWvbsnhNI23zYe7bXn3yKGFu1-OL5iaIzK5nzOlK5X3gcldW8UdRwy9VTeQeGVfNChRYPQLpISI7EU0fvy-Vpq3YDG3K2Yqml74Dw2XT-HbTH6N9BwkDH1lOFcJ80SMoFt3N5k5jbmia5e63NqUIxn1Cfxyp7VNCjRHPq3B3B_f7UXPG7QNJ-kYOiluF0v93Am8A28af3tPUbMSDsYbemUfpkfYjZDv',
            category: 'Intimate'
        },
        {
            id: 3,
            couple: 'Sana & Kabir',
            location: 'Nokha, Rajasthan',
            date: 'Jan 2024',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwbnfvmspUMZARV5Ybbtr_7xm_RgF2N1aZamQ8w_cekB3xI8hyXwt_XJSX-BJsTcS8AAwbaDA21w5d1XX10-TBwUJyynlU6mD_p26HZ81Z_wU6-u59T23xcYEh8CAQKlq0pPPkgcKG3KvGsm0lc7rRK5JHNq7OWtp12EPiYkvou8iRNq7V9Ydt-DsIG7bwTHB_gGteBvffVcEjLT-sxtJSPLF8Z-fr9TQUZI2tFeG8qEYni8Ot-fDyRGQorwxJcMP0dB0NG2JgQ0Cu',
            category: 'Modern'
        },
        {
            id: 4,
            couple: 'Lakshmi & Arjun',
            location: 'Jodhpur, Rajasthan',
            date: 'Feb 2024',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtGYIce2Grnb5NWT01BYg0QBON2cisMXNkInaQaqQBdcJBb20wOUizoIGMQG-CwdP8PMNLCPO0hAVuOrGg_LMnBcKv7XoTpHZCXxPA3GKda7Desgyza-EZba0JFNZNGas379Cq7Clz_xPTCV5HL-E23PxnsURcGDgHOUKaZJ5ozwiWxi-JGk8gjCUBkJj2LvigzXNebEiwNQpmfp4Uu4QTiWbPBplF6GUcmXxqBDo-OKVX1-9RIrHajQPf0mT8naPP9zlpY_0i1Owj',
            category: 'Traditional'
        },
        {
            id: 5,
            couple: 'Meera & Dev',
            location: 'Udaipur, Rajasthan',
            date: 'Mar 2024',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb8CBe_P5JhPEpje7a9kmty35VuMIgEOea_rO-uVJLPaHR8bN1wxbeXELmloWJcq6bXjCxytBeGR1gWmLMh-AZOWwPUfbuBbKu_7EcMB3lCJx7tr9JTT_aXAWMesUKhSTSMdfSgQNCK2TKzJ1qHgIXmS8WsC3Ea4AVSGaw7Ug-H27_lYi3kUY_m4D7MBj9mlmrN9wUMnRmGKPjiz9bIjb898DdDKxCX2aqkF4FkWinwIGF9-3u4sWojlrRYGHBwpHoW24SYisnCifJ',
            category: 'Luxury'
        },
        {
            id: 6,
            couple: 'Simran & Raj',
            location: 'Jaipur, Rajasthan',
            date: 'Apr 2024',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVmFIAh_p5egams2QLxCb8sUyTrcbOUFRALJPJG571KMVoM6lEIsbPvXs7xU7XuVnpsjx4Wz8J-Bcaiyt3eoybJGBu1OHx9b8vCZDKxfmBSUutHoIXq9uUjGktA7B-R2WFOSvke4coUbdEkkT7zl-w3ue5iuzrq0oIPAylilan3bJtTS56szPGyN3k1qVUdK_SQfEmllWYBbkh3pAbu9YQp-XW8s1lHEznHY_eAm5BIsp7us4q_jomUXwqSOgjCu2FxI4eiQ1DzxHY',
            category: 'Fun'
        }
    ];

    return (
        <div className="w-full relative bg-background-light">
            <FloatingHearts />

            {/* Hero Section */}
            <div className="relative w-full h-[50vh] flex items-center justify-center bg-black/50 overflow-hidden">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2670&auto=format&fit=crop")' }}
                >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
                    <span className="block text-primary text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4">
                        Captured Moments
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6">
                        Our Gallery
                    </h1>
                    <div className="h-[2px] w-24 bg-primary mx-auto"></div>
                </div>
            </div>

            {/* Gallery Grid */}
            <main className="max-w-[1400px] mx-auto px-6 py-24 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map(item => (
                        <div key={item.id} className="group relative break-inside-avoid mb-8 cursor-pointer">
                            <div className="relative overflow-hidden w-full aspect-[4/5] bg-gray-200">
                                <div className="absolute inset-0 border-[8px] border-white z-10 transition-all duration-500 group-hover:border-[0px]"></div>
                                <img
                                    src={item.image}
                                    alt={item.couple}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-6 bg-blend-multiply">
                                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.category}</span>
                                    <h3 className="text-3xl text-white font-serif mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.couple}</h3>
                                    <p className="text-white/80 font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{item.location}</p>
                                    <div className="mt-6 border border-white/30 px-6 py-2 rounded-full text-white text-xs uppercase tracking-widest hover:bg-white hover:text-accent transition-all translate-y-4 group-hover:translate-y-0 duration-500 delay-200">View Album</div>
                                </div>
                            </div>
                            <div className="text-center mt-6">
                                <h3 className="text-xl font-serif text-accent">{item.couple}</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-widest">{item.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* CTA */}
            <div className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[800px] mx-auto px-6 text-center">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6">camera_alt</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-accent mb-6">Let Us Tell Your Story</h2>
                    <p className="text-gray-500 text-lg mb-10 font-light">
                        Every picture tells a story. Let us help you write yours with moments that you'll cherish forever.
                    </p>
                    <Link to="/contact" className="inline-block bg-accent text-white hover:bg-primary transition-all px-10 py-3 text-sm font-bold uppercase tracking-widest">
                        Book Photography
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
