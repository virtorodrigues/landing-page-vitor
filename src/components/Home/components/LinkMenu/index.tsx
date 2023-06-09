import { ReactNode } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

interface LinkMenuProps {
  children: ReactNode
  to: string
}

export function LinkMenu({ to, children }: LinkMenuProps) {
  return (
    <Link
      className="py-4 font-bold transition duration-200 ease-in hover:cursor-pointer hover:text-blue xs:px-4 lg:px-8"
      to={to}
      offset={-80}
      spy={true}
      smooth={true}
      duration={500}
    >
      <motion.div
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          duration: 2,
        }}
      >
        {children}
      </motion.div>
    </Link>
  )
}
