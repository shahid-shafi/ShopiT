import React from 'react'
import {motion} from 'framer-motion'


const Button = ({text, classes, onClick}) => {
  return (
      <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={classes}
          onClick={onClick}
      >
          {text}
      </motion.button>
  )
}

export default Button