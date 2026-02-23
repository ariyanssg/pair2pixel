// import React, { Suspense, useRef, useState } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Environment, Html } from '@react-three/drei';
// import { EarbudsModel } from './EarbudsModel';
// import { MouseModel } from './MouseModel';
// import { PowerbankModelAlt } from './PowerbankModelAlt';

// // Rotating Model Wrapper
// const RotatingModel = ({ children, speed = 1 }) => {
//   const groupRef = useRef();
  
//   useFrame((state, delta) => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y += delta * speed;
//     }
//   });
  
//   return <group ref={groupRef}>{children}</group>;
// };

// // Individual Product Card
// const ProductCard = ({ ModelComponent, title, scale = 1, autoRotate = true, cameraPosition = [0, 0, 5] }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div 
//       className="relative w-full h-[400px] rounded-xl overflow-hidden"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Canvas
//         camera={{ position: cameraPosition, fov: 50 }}
//         style={{ background: 'transparent' }}
//         gl={{ 
//           antialias: true,
//           alpha: true,
//           powerPreference: "high-performance"
//         }}
//       >
//         <Suspense fallback={<Html center><div className="text-white">Loading...</div></Html>}>
          
//           {/* Enhanced Lighting Setup */}
//           <ambientLight intensity={1.2} />
//           <directionalLight 
//             position={[5, 5, 5]} 
//             intensity={2} 
//             castShadow
//           />
//           <directionalLight 
//             position={[-5, 5, 5]} 
//             intensity={1.5} 
//           />
//           <spotLight 
//             position={[10, 10, 10]} 
//             angle={0.3} 
//             penumbra={1} 
//             intensity={2} 
//           />
//           <pointLight 
//             position={[-10, -10, -10]} 
//             intensity={1} 
//           />
//           <pointLight 
//             position={[0, 10, 0]} 
//             intensity={1.5} 
//             color="#ffffff"
//           />
          
//           {/* Environment for reflections and ambient lighting */}
//           <Environment preset="sunset" intensity={1.5} />
          
//           {autoRotate && !isHovered ? (
//             <RotatingModel speed={0.5}>
//               <ModelComponent scale={scale} />
//             </RotatingModel>
//           ) : (
//             <ModelComponent scale={scale} />
//           )}
          
//           {isHovered && (
//             <OrbitControls 
//               enableZoom={true}
//               enablePan={false}
//               maxDistance={15}
//               minDistance={3}
//             />
//           )}
//         </Suspense>
//       </Canvas>
      
//       {/* Title Overlay */}
//       {title && (
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
//           <h3 className="text-white text-lg font-semibold text-center">{title}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// // Main Showcase Section
// const ProductShowcase = () => {
//   return (
//     <section className="py-16 md:py-24 px-4 md:px-16 lg:px-24">
//       <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12">
//         Spin It. Explore It. Experience It.
//       </h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {/* Left Product - Powerbank */}
//         <ProductCard 
//           ModelComponent={PowerbankModelAlt}
//           scale={0.57}
//           cameraPosition={[0, 0, 8]}
//         />
        
//         {/* Center Product - Mouse (Larger but zoomed out more) */}
       
//          <ProductCard 
//           ModelComponent={EarbudsModel}
//           scale={0.9}
//           cameraPosition={[0, 0, 5]}
//         />
//         {/* Right Product - Earbuds */}
       
//          <ProductCard 
//           ModelComponent={MouseModel}
//           scale={1}
//           cameraPosition={[0, 0, 10]}
//         />
//       </div>
//     </section>
//   );
// };

// export default ProductShowcase;
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { EarbudsModel } from './EarbudsModel';
import { MouseModel } from './MouseModel';
import { PowerbankModelAlt } from './PowerbankModelAlt';  // ✅ FIX - Use correct name

// Rotating Model Wrapper
const RotatingModel = ({ children, speed = 1 }) => {
  const groupRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed;
    }
  });
  
  return <group ref={groupRef}>{children}</group>;
};

// Individual Product Card with Intersection Observer
const ProductCard = ({ ModelComponent, title, scale = 1, autoRotate = true, cameraPosition = [0, 0, 5] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
        } else {
          setShouldRender(false);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {shouldRender ? (
        <Canvas
          camera={{ position: cameraPosition, fov: 50 }}
          style={{ background: 'transparent' }}
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
          }}
        >
          <Suspense fallback={<Html center><div className="text-white">Loading...</div></Html>}>
            
            {/* Enhanced Lighting Setup */}
            <ambientLight intensity={1.2} />
            <directionalLight 
              position={[5, 5, 5]} 
              intensity={2} 
              castShadow
            />
            <directionalLight 
              position={[-5, 5, 5]} 
              intensity={1.5} 
            />
            <spotLight 
              position={[10, 10, 10]} 
              angle={0.3} 
              penumbra={1} 
              intensity={2} 
            />
            <pointLight 
              position={[-10, -10, -10]} 
              intensity={1} 
            />
            <pointLight 
              position={[0, 10, 0]} 
              intensity={1.5} 
              color="#ffffff"
            />
            
            {/* Environment for reflections and ambient lighting */}
            <Environment preset="sunset" intensity={1.5} />
            
            {autoRotate && !isHovered ? (
              <RotatingModel speed={0.5}>
                <ModelComponent scale={scale} />
              </RotatingModel>
            ) : (
              <ModelComponent scale={scale} />
            )}
            
            {isHovered && (
              <OrbitControls 
                enableZoom={true}
                enablePan={false}
                maxDistance={15}
                minDistance={3}
              />
            )}
          </Suspense>
        </Canvas>
      ) : (
        // Placeholder when not rendering
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-400">3D Model</p>
            <p className="text-xs text-gray-500 mt-2">Scroll to view</p>
          </div>
        </div>
      )}
      
      {/* Title Overlay */}
      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-white text-lg font-semibold text-center">{title}</h3>
        </div>
      )}
    </div>
  );
};

// Main Showcase Section
const ProductShowcase = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-16 lg:px-24">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12">
        Spin It. Explore It. Experience It.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Left Product - Powerbank */}
        <ProductCard 
          ModelComponent={PowerbankModelAlt}  // ✅ Use correct component name
          scale={0.57}
          cameraPosition={[0, 0, 8]}
        />
        
        {/* Center Product - Earbuds */}
        <ProductCard 
          ModelComponent={EarbudsModel}
          scale={0.9}
          cameraPosition={[0, 0, 5]}
        />
        
        {/* Right Product - Mouse */}
        <ProductCard 
          ModelComponent={MouseModel}
          scale={1}
          cameraPosition={[0, 0, 10]}
        />
      </div>
    </section>
  );
};

export default ProductShowcase;