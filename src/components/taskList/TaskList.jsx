import { TaskListDone, Task } from '@/components'
import style from './taskList.module.css'
import { useContext, useEffect } from 'react'
import { AppContext } from '@/context'
import { randomId } from '@/utils'

export default function TaskList() {
    const { taskArr } = useContext(AppContext);
    useEffect(() => {
        console.log('taskArr TaskList', taskArr);
        
    }, [taskArr])
    
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
                            taskArrReverse={taskArr}
                        />
                    ))}
                </ul>
            )}
        </>
    )
}