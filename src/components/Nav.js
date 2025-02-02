import React, { useMemo } from 'react'
import '../index.css'
import styles from './nav.module.css'
import NavList from './NavList'


const Nav = () => {
    const items = useMemo(() => ['Work', 'About', 'Experience', 'Skills', 'Contact'], []);
    return (
        <nav className={styles.navContainer}>
            <NavList items={items} />
        </nav>
    )
}

export default Nav