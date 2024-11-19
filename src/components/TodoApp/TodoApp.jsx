import React, { useState, useEffect } from 'react';
import styles from './TodoApp.module.css'

import TodoForm from '../TodoForm/TodoForm'
import VotesSummary from '../VotesSummary/VotesSummary.jsx'
import TodoList from '../TodoList/TodoList'

const TodoApp = ({}) => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('todoTasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [filter, setFilter] = useState(() => {
        return localStorage.getItem('todoFilter') || '';
    });

    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        }

        setTasks([...tasks, newTask])
    }

    const editTask = (taskId, newText) => {
        setTasks (
            tasks.map((task) =>
                task.id === taskId ? {...task, text: newText} : task
            )
        )
    }

    const removeTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId)
        setTasks(updatedTasks)
    }

    const toggleComplete = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? {...task, completed: !task.completed} : task
            )
        )
    }

    const votosTotal =() =>{
        const local= localStorage.get('votosTotais');
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed
        if (filter === 'incompleted') return !task.completed
        return true
    })

    useEffect(() => {
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem('todoFilter', filter);
    }, [filter]);

    return (
        <div className={styles.card}>
            <div className={styles.cardInfo}>
                <div className={styles.cardHeader}>
                    <p className={styles.title}>Sistema de votação</p>
                </div>
                <TodoForm addTask={addTask} />
                <TodoList 
                tasks={filteredTasks}
                toggleComplete={toggleComplete}
                removeTask={removeTask}
                editTask={editTask}
                />
            </div>
            <div className={styles.summary}>
                <VotesSummary
                votosTotais={votosTotal}/>
            </div>
            
            
        </div>
    )
}

export default TodoApp