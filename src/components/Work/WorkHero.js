import React from 'react'
import '../../index.css'
import styles from './workHero.module.css'



const WorkHero = () => {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>
                Hi, I'm Josh.<br />
                A Software Engineer.
            </h1>

        </div>
    )
}

export default WorkHero