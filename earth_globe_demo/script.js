
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Orbit controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Sphere geometry
const geometry = new THREE.SphereGeometry(5, 64, 64);

// Load Earth texture
const textureLoader = new THREE.TextureLoader();
textureLoader.load('earth.jpg', function (texture) {
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  camera.position.z = 10;
  animate();
}, undefined, function (err) {
  console.error('Failed to load texture', err);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
