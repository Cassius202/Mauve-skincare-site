import React, { useState } from 'react'
import { PropContext } from './PropContext'
import type {PropContextType} from './PropContext'

const PropProvider = ( {children}: {readonly children: React.ReactNode} ) => {


  const [isOpen, setIsOpen] = useState(false);

  const value: PropContextType = {
    isOpen, setIsOpen
  }
  
  return (
    <PropContext.Provider value={value}>
      {children}
    </PropContext.Provider>
  )
}

export default PropProvider