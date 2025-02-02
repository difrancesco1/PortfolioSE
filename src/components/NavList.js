import React, { useState, useEffect, useRef } from 'react'
import styles from './navList.module.css'
import '../index.css'

const NavList = React.memo(({ items }) => { // Taking Props from Nav (items = Nav titles)
    const [activeIndex, setActiveIndex] = useState(0);  // Tracks which nav item is selected (default at Work on page load)
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, top: 0 }); // Stores the left and top positions of the items along with their length (use for indicator)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    const navRefs = useRef([]); // Creates an array of refs to store DOM elements of each nav item Allowing us to measure the left, top and width
    const updateIndicator = () => {
        if (navRefs.current[activeIndex]) {
            const { offsetLeft, offsetWidth, offsetTop, offsetHeight } = navRefs.current[activeIndex]; // Checks if item is active 

            const paddingTop = window.innerWidth <= 600 ? 10 : 30; // calc padding top to compensate for Nav's padding top on desktop

            // For mobile: calculate half the width of the nav item and add 2px padding from the left
            if (window.innerWidth <= 600) {
                const leftPosition = offsetLeft + (offsetWidth / 2) + 2; // Half the width + 2px padding
                setIndicatorStyle({
                    left: leftPosition,
                    width: offsetWidth,
                    top: offsetTop + offsetHeight / 2 - 30 + paddingTop,
                    transition: 'none', // Remove transition for instant update
                });
            } else {
                // For desktop: updates left, width, and top for indicator
                setIndicatorStyle({
                    left: offsetLeft,
                    width: offsetWidth,
                    top: offsetTop + offsetHeight / 2 - 30 + paddingTop,
                    transition: 'none', // Remove transition for instant update
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
                // Retain the current active index when switching between mobile and desktop
                updateIndicator();
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile, activeIndex]);

    return (
        <div className={styles.navContainer}>
            <ul className={styles.navList}>
                <div
                    className={styles.circleIndicator}
                    style={{ // Apply styling for indicator positioning based off what index is selected
                        left: `${indicatorStyle.left}px`,
                        width: `${indicatorStyle.width}px`,
                        top: `${indicatorStyle.top}px`,
                    }}
                />
                {items.map((item, index) => (
                    <li
                        key={index}
                        ref={(el) => (navRefs.current[index] = el)} // Stores a ref to each li so we can track its position and width
                        className={`${styles.navItem} ${activeIndex === index ? styles.active : ''} `}
                        onClick={() => setActiveIndex(index)} // Updates active index when clicked
                    >
                        <a
                            href={`#${item.toLowerCase()}`}
                            className={`${styles.navLink}`}
                        >
                            {item}
                            {activeIndex === index && <span className={styles.separator}>/</span>}
                        </a>
                    </li>
                ))}
            </ul>
        </div >
    );
});

export default NavList;
