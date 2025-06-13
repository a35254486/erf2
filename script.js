document.getElementById('fail').remove(); // Remove error text when script starts

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

const loader = new THREE.TextureLoader();
loader.load('earth.jpg', (texture) => {
  console.log('✅ Texture loaded');
  const globe = new THREE.Mesh(
    new THREE.SphereGeometry(1, 64, 64),
    new THREE.MeshBasicMaterial({ map: texture })
  );
  scene.add(globe);

  function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.002;
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}, undefined, (err) => {
  console.error('❌ Texture load error', err);
});
