import React, { useState, useEffect, useRef } from 'react';
import styles from './navList.module.css';
import '../index.css';

const NavList = React.memo(({ items, activeIndex, setActiveIndex }) => {
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, top: 0 });
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const [scrolled, setScrolled] = useState(false); // Track scroll state

    const navRefs = useRef([]); // Ref array for nav items

    const updateIndicator = () => {
        if (navRefs.current[activeIndex]) {
            const { offsetLeft, offsetWidth, offsetTop, offsetHeight } = navRefs.current[activeIndex];

            const paddingTop = window.innerWidth <= 600 ? 10 : 30;

            if (window.innerWidth <= 600) {
                const leftPosition = offsetLeft + (offsetWidth / 2) + 2;
                setIndicatorStyle({
                    left: leftPosition,
                    width: offsetWidth,
                    top: offsetTop + offsetHeight / 2 - 30 + paddingTop,
                    transition: 'none',
                });
            } else {
                setIndicatorStyle({
                    left: offsetLeft,
                    width: offsetWidth,
                    top: offsetTop + offsetHeight / 2 - 30 + paddingTop,
                    transition: 'none',
                });
            }
        }
    };

    useEffect(() => {
        updateIndicator();
    }, [activeIndex, window.innerWidth]);

    useEffect(() => {
        const handleResize = () => {
            const isCurrentlyMobile = window.innerWidth <= 600;
            if (isCurrentlyMobile !== isMobile) {
                setIsMobile(isCurrentlyMobile);
                updateIndicator();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile, activeIndex]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // Adds scrolled effect when past 50px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.navContainer}>
            <ul className={`${styles.navList} ${scrolled ? styles.scrolled : ''}`}>
                <div
                    className={styles.circleIndicator}
                    style={{
                        left: `${indicatorStyle.left}px`,
                        width: `${indicatorStyle.width}px`,
                        top: `${indicatorStyle.top}px`,
                    }}
                />
                {items.map((item, index) => (
                    <li
                        key={index}
                        ref={(el) => (navRefs.current[index] = el)}
                        className={`${styles.navItem} ${activeIndex === index ? styles.active : ''}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <a href={`#${item.toLowerCase()}`} className={styles.navLink}>
                            {item}
                            {activeIndex === index && <span className={styles.separator}>/</span>}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default NavList;
