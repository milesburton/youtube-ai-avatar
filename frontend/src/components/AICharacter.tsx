import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const AICharacter: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });

        renderer.setSize(300, 300);
        mountRef.current?.appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshStandardMaterial({ color: "blue" });
        const avatar = new THREE.Mesh(geometry, material);

        scene.add(avatar);
        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            avatar.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();
    }, []);

    return <div ref={mountRef} />;
};

export default AICharacter;
