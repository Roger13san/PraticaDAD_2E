import React, { useState, useEffect } from 'react';
import styles from './TodoForm.module.css'

const TodoForm = ({addTask}) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (inputValue.trim()){
            addTask(inputValue)
            setInputValue('')
        }
        else {
            console.log('Preencha o campo');
        }

    }

    return (
        <div className={styles.addTask}>
            <input 
            type="text" 
            className={styles.inputTask}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Adicione um candidato'
            />
            <p className={styles.addButton} onClick={handleSubmit}>Adicionar</p>
        </div>
    )
}

export default TodoForm