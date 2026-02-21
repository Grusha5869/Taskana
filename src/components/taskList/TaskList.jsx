import { TaskListDone, Task } from '@/components'
import style from './taskList.module.css'
import { useContext } from 'react'
import { AppContext } from '@/context';
import { randomId } from "../../utils/helpers"

export default function TaskList() {
    const { taskArr } = useContext(AppContext);
    return ( 
        <>
            {taskArr.length === 0 ? (
                <div className={style.wrapper}>
                    <TaskListDone />
                </div>
            ) : (
                <ul className={style.list}>
                    {taskArr.map(elem => (
                        <Task 
                            key={randomId(10)} 
                            elem={elem}
                            taskArr={taskArr}
                        />
                    ))}
                </ul>
            )}
        </>
    )
}