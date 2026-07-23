import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const AboutSection = () => {
    const { ref } = useScrollReveal();

    return (
        <section id="about" ref={ref} className="py-24 bg-white text-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="section-title mb-4">About <span>OQULIX</span></h2>
                </div>

                <div className="flex flex-col md:flex-row gap-12 mb-20">
                    <div className="w-full md:w-1/2">
                        <h3 className="card-title mb-4 text-blue-600">Our Journey</h3>
                        <p className="card-desc text-gray-600">
                            Founded in 2023, OQULIX is at the forefront of deep-tech innovation, transforming healthcare and education through immersive technology. We believe in pushing the boundaries of what is possible.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className="card-title mb-4 text-blue-600">Our Vision</h3>
                        <p className="card-desc text-gray-600">
                            We envision a future where XR technologies enhance learning, rehabilitation, and enterprise training, making them more interactive, accessible, and ultimately more effective.
                        </p>
                    </div>
                </div>




            </div>
        </section>
    );
};

export default AboutSection;