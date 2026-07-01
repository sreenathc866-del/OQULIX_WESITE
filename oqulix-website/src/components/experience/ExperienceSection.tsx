import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ExperienceSection = () => {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-light mb-4">Explore Our <span className="font-bold text-blue-400">3D Experiences</span></h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">Immerse yourself in our innovative solutions, from VR headsets to AR cards. Interact with the canvas below.</p>
                </div>
                
                <div className="w-full max-w-4xl mx-auto h-[500px] bg-black/50 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl relative">
                    <Canvas className="w-full h-full">
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        {/* Placeholder for 3D models */}
                        <mesh rotation={[1, 1, 0]}>
                            <boxGeometry args={[2, 2, 2]} />
                            <meshStandardMaterial color="#2563eb" />
                        </mesh>
                        <OrbitControls enableZoom={false} autoRotate />
                    </Canvas>
                    <div className="absolute bottom-4 right-4 text-xs text-gray-500 bg-black/80 px-3 py-1 rounded-full backdrop-blur-sm">
                        Drag to rotate
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;