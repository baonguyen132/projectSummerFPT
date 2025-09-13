import React from 'react';
import styles from './test.module.scss';
import FloatingButton from '../../../components/common/floatingButton/floatingButton';
function Test() {
    return (
        <div className={styles.testContainer}>
            <h1 className={styles.testTitle}>Test Component</h1>

            <FloatingButton handleClick={() => {
                console.log("Clicked1");
            }} />
        </div>
    );
}

export default Test;