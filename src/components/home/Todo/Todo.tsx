"use client"

import  { useState } from 'react';

interface Todo {
    id: number,
    text: string,
    completed: boolean
}


export const Todo = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState<Todo[]>([]);

    const addTask = () => {
        setTasks(
            [...tasks, {id: Date.now(), text: task, completed: false}]
        );
        setTask("");
        console.log(tasks);

    }

    const toggleTask = (id: any) => {
        console.log('toggle');
        setTasks(
            tasks.map(
                (i) => i.id == id ? { ...i, completed: !i.completed } : i
            )
        )

    }

    return(
        <section>
            <h2>TODO LIST</h2>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)}></input>
            <button onClick={ addTask }>Add</button>
            
            <ul>
                {
                    tasks.map(
                        (t) => (
                            <li key={t.id}>
                                {t.completed ? ' _ ' : ' ✔ '}
                                {t.text}
                                <button onClick={ () => toggleTask(t.id) }>Completed</button>
                            </li>
                        )
                    )
                }
            </ul>
        </section>
    )
}