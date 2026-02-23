import React from 'react'
import { useGLTF } from '@react-three/drei'

export function MouseModel(props) {
  const { nodes, materials } = useGLTF('/models/new_mouse_fo_ web.glb')
  
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Scene || nodes[Object.keys(nodes)[0]]} />
    </group>
  )
}

useGLTF.preload('/models/new_mouse_fo_ web.glb')