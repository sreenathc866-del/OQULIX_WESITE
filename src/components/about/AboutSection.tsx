import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const AboutSection = () => {
    const { ref } = useScrollReveal();

    return (
        <section id="about" ref={ref} className="py-24 bg-white text-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light mb-4">About <span className="font-bold">OQULIX</span></h2>
                </div>

                <div className="flex flex-col md:flex-row gap-12 mb-20">
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Journey</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Founded in 2023, OQULIX is at the forefront of deep-tech innovation, transforming healthcare and education through immersive technology. We believe in pushing the boundaries of what is possible.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We envision a future where XR technologies enhance learning, rehabilitation, and enterprise training, making them more interactive, accessible, and ultimately more effective.
                        </p>
                    </div>
                </div>

                <div className="mb-20">
                    <h3 className="text-2xl font-bold mb-8 text-center">Milestones</h3>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm flex-1">
                            <span className="text-sm font-bold text-blue-600 mb-2 block">2023</span>
                            <h4 className="text-xl font-bold mb-3">Company Founded</h4>
                            <p className="text-gray-600">OQULIX was established to innovate in the fields of healthcare and education.</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm flex-1">
                            <span className="text-sm font-bold text-blue-600 mb-2 block">2024</span>
                            <h4 className="text-xl font-bold mb-3">First Product Launch</h4>
                            <p className="text-gray-600">Launched Happy Moves, a VR physiotherapy solution.</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default AboutSection;