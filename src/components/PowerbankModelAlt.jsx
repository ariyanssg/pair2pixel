// src/components/PowerbankModelAlt.jsx
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function PowerbankModelAlt(props) {
  const { nodes, materials } = useGLTF('/models/powerbank_HT for_web.glb')
  
  return (
    <group {...props} dispose={null}>
      <group position={[0.009, 0, -0.085]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.Cube004?.geometry} material={materials?.['base color of body']} />
        <mesh geometry={nodes.Cube004_1?.geometry} material={materials?.['Material.001']} />
        <mesh geometry={nodes.Cube004_2?.geometry} material={materials?.['base color of back part']} />
        <mesh geometry={nodes.Cube004_3?.geometry} material={materials?.['Material.005']} />
        <mesh geometry={nodes.Cube004_4?.geometry} material={materials?.['Material.007']} />
        <mesh geometry={nodes.Cube004_5?.geometry} material={materials?.['Golden brushed metal']} />
        <mesh geometry={nodes.Cube004_6?.geometry} material={materials?.['line texture.001']} />
        <mesh geometry={nodes.Cube004_7?.geometry} material={materials?.['Material.006']} />
        <mesh geometry={nodes.Cube004_8?.geometry} material={materials?.['Material.008']} />
        <mesh geometry={nodes.Cube004_9?.geometry} material={materials?.['line texture']} />
        <mesh geometry={nodes.Cube004_10?.geometry} material={materials?.['line texture.002']} />
        <mesh geometry={nodes.Cube004_11?.geometry} material={materials?.['Material.009']} />
        <mesh geometry={nodes.Cube004_12?.geometry} material={nodes.Cube004_12?.material} />
        <mesh geometry={nodes.Cube004_13?.geometry} material={materials?.['Material.015']} />
        <mesh geometry={nodes.Cube004_14?.geometry} material={materials?.['Material.002']} />
        <mesh geometry={nodes.Cube004_15?.geometry} material={materials?.['Material.004']} />
        <mesh geometry={nodes.Cube004_16?.geometry} material={materials?.['Material.011']} />
        <mesh geometry={nodes.Cube004_17?.geometry} material={materials?.['base color of back part.001']} />
        <mesh geometry={nodes.Cube004_18?.geometry} material={materials?.['base color of body.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/powerbank_HT for_web.glb')