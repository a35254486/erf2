// Basic working globe test
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add orbit controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Load texture
const textureLoader = new THREE.TextureLoader();
textureLoader.load('earth.jpg', (texture) => {
  const geometry = new THREE.SphereGeometry(1, 64, 64);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);
});

camera.position.z = 2;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// Remove red error if everything loaded
const fail = document.getElementById('fail');
if (fail) fail.remove();
