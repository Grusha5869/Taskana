import { TaskListDone, Task } from '@/components'
import style from './taskList.module.css'
import { useContext } from 'react'
import { AppContext } from '@/context';
import { randomId } from '@/utils'

export default function TaskList() {
    const { taskArrReverse } = useContext(AppContext);
    return ( 
        <>
            {taskArrReverse.length === 0 ? (
                <div className={style.wrapper}>
                    <TaskListDone />
                </div>
            ) : (
                <ul className={style.list}>
                    {taskArrReverse.map(elem => (
                        <Task 
                            key={randomId(10)} 
                            elem={elem}
                            taskArrReverse={taskArrReverse}
                        />
                    ))}
                </ul>
            )}
        </>
    )
}