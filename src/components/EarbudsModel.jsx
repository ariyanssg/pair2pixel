import React from 'react'
import { useGLTF } from '@react-three/drei'

export function EarbudsModel(props) {
  const { nodes, materials } = useGLTF('/models/ear_buds.glb')
  
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Scene || nodes[Object.keys(nodes)[0]]} />
    </group>
  )
}

useGLTF.preload('/models/ear_buds.glb')