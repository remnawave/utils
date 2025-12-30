import type { ReactNode } from 'react'

import { motion } from 'motion/react'

import { itemVariants } from '@shared/config'

interface AnimatedSectionProps {
    children: ReactNode
}

export function AnimatedSection({ children }: AnimatedSectionProps) {
    return <motion.div variants={itemVariants}>{children}</motion.div>
}

