const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add light
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

// Load texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('earth.jpg');

// Create globe
const geometry = new THREE.SphereGeometry(5, 64, 64);
const material = new THREE.MeshStandardMaterial({ map: texture });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Orbit controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z = 10;
controls.update();

// Animate
function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.001;
  controls.update();
  renderer.render(scene, camera);
}
animate();
