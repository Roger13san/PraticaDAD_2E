import React, { useState } from 'react';
import styles from './TodoList.module.css'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({tasks, toggleComplete, removeTask, editTask}) => {

    return (
        <div className={styles.allTasks}>
            <ul className={styles.tasks}>
            <h2>Candidatos</h2>

                {
                    tasks.map((task) => (
                        <TodoItem 
                            key={task.id}
                            task={task}
                            toggleComplete={toggleComplete}
                            removeTask={removeTask}
                            editTask={editTask}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList