//import { scene, camer, renderer } from './initScene.js';

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let intersectedObject = null;
const infoPanel = document.getElementById('info-panel');

function setupInteraction() {
    window.addEventListener('click', onClick);
    window.addEventListener('mousemove', onMouseMove);
}

function onMouseMove(event) {
    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the ray
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        // Restore previously intersected object
        if (intersectedObject) {
            intersectedObject.material.emissive.setHex(intersectedObject.currentHex);
        }

        // Highlight new intersected object
        intersectedObject = intersects[0].object;
        intersectedObject.currentHex = intersectedObject.material.emissive.getHex();
        intersectedObject.material.emissive.setHex(0x888800);
        
        // Show info panel
        if (intersectedObject.userData.name) {
            infoPanel.textContent = intersectedObject.userData.name;
            infoPanel.style.display = 'block';
        }
    } else {
        // Hide info panel if no intersection
        infoPanel.style.display = 'none';
        
        // Restore previously intersected object
        if (intersectedObject) {
            intersectedObject.material.emissive.setHex(intersectedObject.currentHex);
            intersectedObject = null;
        }
    }
}

function onClick(event) {
    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the ray
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        
        // Animate the clicked object
        const originalScale = clickedObject.scale.clone();
        clickedObject.scale.multiplyScalar(1.2);
        
        // Reset after animation
        setTimeout(() => {
            clickedObject.scale.copy(originalScale);
        }, 300);
        
        // Show info panel with the part name
        if (clickedObject.userData.name) {
            infoPanel.textContent = `Clicked: ${clickedObject.userData.name}`;
            infoPanel.style.display = 'block';
            
            // Hide after 3 seconds
            setTimeout(() => {
                infoPanel.style.display = 'none';
            }, 3000);
        }
    }
}

//export { setupInteraction };