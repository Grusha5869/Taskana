import { TaskListDone } from '@/components'
import style from './taskList.module.css'

export default function TaskList() {
    return ( 
        <div className={style.wrapper}>
            <TaskListDone />
        </div>
    )
}