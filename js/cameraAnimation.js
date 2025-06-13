//import { camera, controls } from './initScene.js';

let autoRotateEnabled = true;
let angle = 0;
const radius = 10;
const height = 5;
const rotationSpeed = 0.5; // degrees per frame

function setupCameraAnimation() {
    // Enable auto-rotation
    document.addEventListener('keydown', (event) => {
        if (event.key === ' ') {
            autoRotateEnabled = !autoRotateEnabled;
        }
    });
}

function animateCamera(deltaTime) {
    if (!autoRotateEnabled) return;

    angle += rotationSpeed * deltaTime;
    if (angle > 360) angle -= 360;

    // Convert angle to radians
    const radians = angle * (Math.PI / 180);
    
    // Calculate new camera position
    camera.position.x = radius * Math.sin(radians);
    camera.position.z = radius * Math.cos(radians);
    camera.position.y = height;
    
    // Make camera look at the center
    camera.lookAt(0, 0, 0);
    
    // Update controls target
    controls.target.set(0, 0, 0);
    controls.update();
}

//export { setupCameraAnimation, animateCamera };