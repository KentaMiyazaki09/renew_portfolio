export default function Floor() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      {/* <meshStandardMaterial color="white" /> */}
      <shadowMaterial />
    </mesh>
  )
}