import React, { useState, useEffect } from 'react';
import styles from './VotesSummary.module.css'

const TodoForm = ({votosTotais}) => {
    const [inputValue, setInputValue] = useState('')


    return (
        <div className={styles.summaryContainer}>
            <h3 className={styles.summaryText}>Votos totais: {votosTotais}</h3>
            <p className={styles.textzin}>Candidato Vencedor: </p>
        </div>
    )
}

export default TodoForm