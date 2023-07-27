import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';

let noise3Ds = [];
let clock = new THREE.Clock();
let raycaster = new THREE.Raycaster();

let scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 20;

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#mycanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let whiteFilter = new THREE.Mesh(
    new THREE.PlaneGeometry(window.innerWidth, window.innerHeight),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5})
);
whiteFilter.position.z = camera.position.z - 1; // Position the filter in front of everything else
scene.add(whiteFilter);

// 球体の色と透明度
let colors = ['#9b5de5', '#f15bb5', '#fee440', '#00bbf9', '#00f5d4'];
let opacity = 1;

// 球体とそれらの移動方向を格納する配列
let spheres = [];
let directions = [];

for (let i = 0; i < 5; i++) {
    let geometry = new THREE.SphereGeometry(5, 100, 100); // increase the number of segments for smoother shape
    let material = new THREE.MeshBasicMaterial({ color: colors[i], transparent: true, opacity: opacity });
    let sphere = new THREE.Mesh(geometry, material);
    material.receiveShadow = false;
    material.castShadow = false;
    sphere.stopped = false;

    // Assign random positions for x and y, keep z at 0
    sphere.position.x = Math.random() * 10 - 5;
    sphere.position.y = Math.random() * 10 - 5;
    sphere.position.z = 0;

    scene.add(sphere);

    // Create a noise3D for each sphere
    noise3Ds.push(createNoise3D(Math.random));

    // Save the sphere and its direction
    spheres.push(sphere);
    directions.push(new THREE.Vector3((Math.random() - 0.3) * 0.3, (Math.random() - 0.3) * 0.3, 0));
}

// Listen for mouse clicks
window.addEventListener('mousedown', (event) => {
    // Convert mouse position to normalized device coordinates (-1 to +1)
    let mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Check for intersections
    let intersects = raycaster.intersectObjects(spheres);

    // Toggle stopped flag for all intersected objects
    for (let intersect of intersects) {
        intersect.object.stopped = !intersect.object.stopped;
    }
}, false);

function animate() {
    requestAnimationFrame(animate);

    let time = clock.getElapsedTime();

    for (let i = 0; i < spheres.length; i++) {
        // Skip if this sphere is stopped
        if (spheres[i].stopped) continue;

        // Current sphere and its direction
        let sphere = spheres[i];
        let direction = directions[i];

        // Move the sphere
        sphere.position.add(direction);

        // Use the noise3D corresponding to the current sphere
        let noise3D = noise3Ds[i];

        // Update the geometry for a cloud-like shape change
        let positions = sphere.geometry.attributes.position;
        for (let j = 0; j < positions.count; j++) {
            let n = noise3D(positions.getX(j) * 0.05 + time, positions.getY(j) * 0.05, positions.getZ(j) * 0.05);
            positions.setXYZ(j, positions.getX(j) + n * 0.01, positions.getY(j) + n * 0.01, positions.getZ(j) + n * 0.01);
        }
        positions.needsUpdate = true;
        sphere.geometry.computeVertexNormals();

        // Scale the sphere over time
        let scale = 0.5 + Math.abs(noise3D(time, 0, 0));
        sphere.scale.set(scale, scale, scale);

        // Check for collisions with other spheres
        raycaster.set(sphere.position, directions[i]);
        let intersects = raycaster.intersectObjects(spheres);

        // If the sphere collides with another sphere, reverse its direction
        if (intersects.length > 1) {
            directions[i].negate();
        }

        // Check for the sphere reaching the boundary
        let radius = sphere.geometry.parameters.radius;
        let maxX = camera.position.z - radius;
        let maxY = camera.position.z * Math.tan((camera.fov / 2) * (Math.PI / 180)) - radius;

        if (Math.abs(sphere.position.x) > maxX || Math.abs(sphere.position.y) > maxY) {
            direction.negate();
        }
    }

    // Update the position of the white filter
    whiteFilter.position.copy(camera.position);
    whiteFilter.position.z -= 1;

    renderer.render(scene, camera);
}

animate();