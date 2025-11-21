'use client'
import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
visible: {
    opacity: 1,
    transition: {
    staggerChildren: 0.1,
    },
},
}

  const itemVariants = {
    hidden: { opacity: 1, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  
function FramerAnimation1 ({
  children,
}: Readonly<{ 
  children: React.ReactNode
}>) {
  return (
    <div>
    <motion.div
        className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 opacity-0"
        variants={containerVariants}
        // initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
        
        </div>
  )
}
//small items
function FramerAnimation2 ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
    <motion.div variants={itemVariants} className="mb-8 opacity-0 translate-y-6">
        {children}
      </motion.div>
        
        </div>
  )
}


//small sections
function FramerAnimation3 ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
    <motion.section variants={itemVariants} className="mb-8">
        {children}
      </motion.section>
        
        </div>
  )
}



export { FramerAnimation1, FramerAnimation2, FramerAnimation3 }