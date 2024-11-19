import React, { useState } from 'react';
import styles from './TodoFilter.module.css'

const TodoFilter = ({filter, setFilter}) => {

    return (
        <div className={styles.filters}>
            <p 
            onClick={() => setFilter('all')}
            className={[styles.filterButton, filter === 'all' ? styles.active : ''].join(' ')}>
            Todas
            </p>
            <p 
            onClick={() => setFilter('completed')}
            className={[styles.filterButton, filter === 'completed' ? styles.active : ''].join(' ')}>
            Completas
            </p>
            <p 
            onClick={() => setFilter('incompleted')} 
            className={[styles.filterButton, filter === 'incompleted' ? styles.active : ''].join(' ')}>
            Incompletas
            </p>
        </div>
    )
}

export default TodoFilter