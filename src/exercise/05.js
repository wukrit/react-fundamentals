// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

const Box = ({size, style, children}) => {
  const large = {
    width: '270px',
    height: '270px'
  }
  const medium = {
    width: '180px',
    height: '180px'
  }
  const small = {
    width: '90px',
    height: '90px'
  }

  const boxStyle = (size) => {
    let boxSize
    switch (size) {
      case 'large':
        boxSize = large
        break
      case 'medium':
        boxSize = medium
        break
      case 'small':
        boxSize = small
        break
      default:
        boxSize = medium
    }

    return {
      ...boxSize,
      border: '1px solid #333',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      fontStyle: 'italic'
    }
  }

  return (
    <div className={`box box--${size}`} style={{...boxStyle(size), ...style}}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>medium pink box</Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>large orange box</Box>
    </div>
  )
}

export default App
