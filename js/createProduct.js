

// Create a simple chair using basic geometries
function createProduct() {
    const chairGroup = new THREE.Group();
    
    // Materials
    const woodMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x8B4513,
        roughness: 0.8,
        metalness: 0.2
    });
    
    const cushionMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x556B2F,
        roughness: 0.5,
        metalness: 0.0
    });

    // Chair legs
    const legGeometry = new THREE.CylinderGeometry(0.2, 0.2, 2, 8);
    const leg1 = new THREE.Mesh(legGeometry, woodMaterial);
    leg1.position.set(-2, -1, -1);
    leg1.userData = { name: "Front Left Leg" };
    
    const leg2 = new THREE.Mesh(legGeometry, woodMaterial);
    leg2.position.set(2, -1, -1);
    leg2.userData = { name: "Front Right Leg" };
    
    const leg3 = new THREE.Mesh(legGeometry, woodMaterial);
    leg3.position.set(-2, -1, 1);
    leg3.userData = { name: "Back Left Leg" };
    
    const leg4 = new THREE.Mesh(legGeometry, woodMaterial);
    leg4.position.set(2, -1, 1);
    leg4.userData = { name: "Back Right Leg" };

    // Seat
    const seatGeometry = new THREE.BoxGeometry(5, 0.5, 3);
    const seat = new THREE.Mesh(seatGeometry, cushionMaterial);
    seat.position.set(0, 0, 0);
    seat.userData = { name: "Seat" };

    // Backrest
    const backrestGeometry = new THREE.BoxGeometry(5, 3, 0.5);
    const backrest = new THREE.Mesh(backrestGeometry, cushionMaterial);
    backrest.position.set(0, 1.5, -1.5);
    backrest.userData = { name: "Backrest" };

    // Add all parts to the group
    chairGroup.add(leg1, leg2, leg3, leg4, seat, backrest);
    
    // Center the chair at origin
    chairGroup.position.set(0, 0, 0);
    
    // Add to scene
    scene.add(chairGroup);

    return chairGroup;
}

