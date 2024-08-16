import Link from 'next/link'
import React from 'react'

//next hooks
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const links = [
    {path: '/', name:"Home"},
    {path: '/products', name:"Products"},
    {path: '/services', name:"Services"},
    {path: '/about', name:"Meet Us"},
    {path: '/bid', name:"Request a bid"},
]

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {

    const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
        {
            links.map((link, index) => {
                return (
                    <Link
                    href={link.path}
                    key={index}
                    className={`capitalize ${linkStyles}`}
                    >
                        {link.path === path && (
                            <motion.span
                            initial={{y: '-100%'}}
                            animate={{y: 0}}
                            transition={{ type: 'tween'}}
                            layoutId='underline'
                            className={`${underlineStyles}`}
                             />
                        )}
                    {link.name}
                    </Link>
                )
            })
        }
    </nav>
  )
}

export default Nav