import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Html, useProgress, Image as Image3D } from '@react-three/drei';
import characterImageUrl from '../../assets/models/character.png';

function Loader() {
  const { progress } = useProgress();
  return <Html center><div className="text-white text-sm font-bold bg-black/50 px-4 py-2 rounded-lg backdrop-blur-md">{progress ? progress.toFixed(0) : 0}% loaded</div></Html>;
}

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
    constructor(props: {children: React.ReactNode}) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error: any) {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return (
                <Html center>
                    <div className="bg-red-500/80 text-white p-4 rounded-xl text-center max-w-xs backdrop-blur-md">
                        <p className="font-bold mb-2">Model Error</p>
                        <p className="text-sm">Please ensure the image file is valid.</p>
                    </div>
                </Html>
            );
        }
        return this.props.children;
    }
}

const CharacterModel = () => {
    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
            {/* Displaying the 2D image cleanly in 3D space */}
            <Image3D 
                url={characterImageUrl} 
                transparent 
                scale={[3, 3]} 
                position={[0, 0, 0]} 
            />
        </Float>
    );
};

const ExperienceSection = () => {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-light mb-4">Explore Our <span className="font-bold text-blue-400">3D Experiences</span></h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">Immerse yourself in our innovative solutions, from VR headsets to AR cards. Interact with the canvas below.</p>
                </div>

                <div className="w-full max-w-4xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] bg-black/50 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl relative">
                    <Canvas shadows className="w-full h-full" camera={{ position: [0, 0, 5], fov: 50 }}>
                        {/* Ambient Light for soft overall illumination */}
                        <ambientLight intensity={0.6} />
                        
                        {/* Main Directional Light (Key Light) */}
                        <directionalLight 
                            castShadow 
                            position={[5, 5, 5]} 
                            intensity={1.5} 
                            shadow-mapSize-width={1024} 
                            shadow-mapSize-height={1024} 
                        />
                        
                        {/* Fill Light for softening shadows */}
                        <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#a0aec0" />
                        
                        {/* Rim Light for a premium cinematic edge glow */}
                        <spotLight position={[0, 5, -5]} intensity={2} color="#60a5fa" penumbra={1} />
                        
                        <ErrorBoundary>
                            <Suspense fallback={<Loader />}>
                                <CharacterModel />
                            </Suspense>
                        </ErrorBoundary>
                        
                        <OrbitControls enableZoom={false} />
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