import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

//next hooks

const links = [
    {path: '/', name:"Home"},
    {path: '/products', name:"Products"},
    {path: '/services', name:"Services"},
    {path: '/about', name:"Meet Us"},
    {path: '/contact', name:"Reach Out"},
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
                    {link.name}
                    </Link>
                )
            })
        }
    </nav>
  )
}

export default Nav