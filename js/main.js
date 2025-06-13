
// Initialize the scene
initScene();

// Create the product
createProduct();

// Add lighting
addLighting();

// Setup interaction
setupInteraction();

// Setup camera animation
setupCameraAnimation();

// Animation loop
let clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);
    
    const deltaTime = clock.getDelta();
    
    // Animate camera
    animateCamera(deltaTime);
    
    // Render scene
    renderer.render(scene, camera);
}

animate();