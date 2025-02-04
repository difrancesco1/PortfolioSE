import React, { useMemo } from 'react'
import '../index.css'
import styles from './nav.module.css'
import NavList from './NavList'


const Nav = ({ activeIndex, setActiveIndex }) => {
    const items = useMemo(() => ['Work', 'About', 'Experience', 'Skills', 'Contact'], []);
    return (
        <nav className={styles.navContainer}>
            <NavList items={items} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </nav>
    )
}

export default Nav