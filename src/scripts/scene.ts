import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const BOARD_COLOR = 0x1c1712;
const TRACE_BASE_COLOR = 0x2a1d10;
const TRACE_EMISSIVE = new THREE.Color("#f0a868");
const IC_COLOR = 0x0d0b09;
const PIN_COLOR = 0xb98450;

type TraceLayout = readonly [x: number, z: number, length: number, rotationY: number];

const TRACE_LAYOUT: TraceLayout[] = [
  [-1.05, -0.85, 1.4, 0],
  [-1.05, 0.55, 1.7, 0],
  [0.35, -1.05, 1.3, Math.PI / 2],
  [0.35, 1.05, 1.9, Math.PI / 2],
  [1.0, 0, 2.0, 0],
  [-0.35, 0, 2.2, Math.PI / 2],
  [1.0, -1.15, 1.1, Math.PI / 2],
  [-1.35, 0, 1.6, Math.PI / 2]
];

const IC_POSITIONS: ReadonlyArray<readonly [number, number]> = [
  [-0.9, -0.9],
  [0.9, 0.9],
  [-0.9, 0.9]
];

function buildChip() {
  const group = new THREE.Group();

  const board = new THREE.Mesh(
    new THREE.BoxGeometry(3.3, 0.12, 3.3),
    new THREE.MeshStandardMaterial({ color: BOARD_COLOR, roughness: 0.6, metalness: 0.3 })
  );
  group.add(board);

  const traces: THREE.Mesh[] = [];
  for (const [x, z, length, rotationY] of TRACE_LAYOUT) {
    const trace = new THREE.Mesh(
      new THREE.BoxGeometry(length, 0.045, 0.07),
      new THREE.MeshStandardMaterial({
        color: TRACE_BASE_COLOR,
        emissive: TRACE_EMISSIVE,
        emissiveIntensity: 0.2,
        roughness: 0.35,
        metalness: 0.55
      })
    );
    trace.position.set(x, 0.09, z);
    trace.rotation.y = rotationY;
    group.add(trace);
    traces.push(trace);
  }

  const icMaterial = new THREE.MeshStandardMaterial({ color: IC_COLOR, roughness: 0.4, metalness: 0.5 });
  for (const [x, z] of IC_POSITIONS) {
    const ic = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.22, 0.55), icMaterial);
    ic.position.set(x, 0.17, z);
    group.add(ic);
  }

  const pinGeometry = new THREE.CylinderGeometry(0.032, 0.032, 0.18, 8);
  const pinMaterial = new THREE.MeshStandardMaterial({ color: PIN_COLOR, roughness: 0.3, metalness: 0.85 });
  const pinCount = 14;
  for (let i = 0; i < pinCount; i++) {
    const angle = (i / pinCount) * Math.PI * 2;
    const pin = new THREE.Mesh(pinGeometry, pinMaterial);
    pin.position.set(Math.cos(angle) * 1.65, 0.02, Math.sin(angle) * 1.65);
    group.add(pin);
  }

  group.userData.traces = traces;
  return group;
}

export function initScene(canvas: HTMLCanvasElement): () => void {
  const container = canvas.parentElement;
  if (!container) return () => {};
  if (!("WebGLRenderingContext" in window)) return () => {};

  let width = container.clientWidth || 1;
  let height = container.clientHeight || 1;

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  } catch {
    return () => {};
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setSize(width, height, false);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 50);
  camera.position.set(2.7, 2.15, 3.3);
  camera.lookAt(0, 0, 0);

  scene.add(new THREE.AmbientLight(0xfff2e0, 0.6));
  const key = new THREE.DirectionalLight(0xffd9a8, 1.15);
  key.position.set(3, 4, 2);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x5fd9c9, 0.45);
  rim.position.set(-3, 1.5, -2);
  scene.add(rim);

  const chip = buildChip();
  scene.add(chip);
  const traces = chip.userData.traces as THREE.Mesh[];

  const controls = new OrbitControls(camera, canvas);
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.07;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.55;
  controls.minPolarAngle = Math.PI / 3.3;
  controls.maxPolarAngle = Math.PI / 2.05;

  const pointerNdc = new THREE.Vector2(2, 2);
  const raycaster = new THREE.Raycaster();
  const boardPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.09);
  const hitPoint = new THREE.Vector3();

  const onPointerMove = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    pointerNdc.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointerNdc.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  };
  const onPointerLeave = () => {
    pointerNdc.set(2, 2);
  };
  canvas.addEventListener("pointermove", onPointerMove);
  canvas.addEventListener("pointerleave", onPointerLeave);

  const resize = () => {
    width = container.clientWidth || 1;
    height = container.clientHeight || 1;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);

  const startTime = performance.now();
  let frameId = 0;
  let disposed = false;

  const tick = () => {
    if (disposed || !canvas.isConnected) return;
    const elapsed = (performance.now() - startTime) / 1000;

    raycaster.setFromCamera(pointerNdc, camera);
    const hit = raycaster.ray.intersectPlane(boardPlane, hitPoint);

    for (const trace of traces) {
      const material = trace.material as THREE.MeshStandardMaterial;
      let glow = 0.18 + 0.05 * Math.sin(elapsed * 1.3 + trace.position.x * 2.2);
      if (hit) {
        const distance = trace.position.distanceTo(hitPoint);
        glow += Math.max(0, 1 - distance / 1.15) * 1.7;
      }
      material.emissiveIntensity = glow;
    }

    controls.update();
    renderer.render(scene, camera);
    frameId = requestAnimationFrame(tick);
  };

  const handleVisibility = () => {
    if (document.hidden) {
      cancelAnimationFrame(frameId);
    } else if (!disposed) {
      frameId = requestAnimationFrame(tick);
    }
  };
  document.addEventListener("visibilitychange", handleVisibility);

  frameId = requestAnimationFrame(tick);

  return function dispose() {
    disposed = true;
    cancelAnimationFrame(frameId);
    canvas.removeEventListener("pointermove", onPointerMove);
    canvas.removeEventListener("pointerleave", onPointerLeave);
    document.removeEventListener("visibilitychange", handleVisibility);
    resizeObserver.disconnect();
    controls.dispose();
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => material.dispose());
      }
    });
    renderer.dispose();
  };
}
