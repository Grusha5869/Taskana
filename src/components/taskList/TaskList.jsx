import { TaskListDone } from '@/components'
import style from './taskList.module.css'

export default function TaskList() {
    /* useEffect(() => {
        //Баг скролла секции по середине.
        if (!refWrapper.current) return
        const el = refWrapper.current;
        console.log({
        'Высота элемента (clientHeight)': el.clientHeight,
        'Высота содержимого (scrollHeight)': el.scrollHeight,
        'Внутренние отступы (padding)': window.getComputedStyle(el).padding,
        'Разница (scrollHeight - clientHeight)': el.scrollHeight - el.clientHeight
        });
    }, []) */

    return ( 
        <div className={style.wrapper}>
            <TaskListDone />
        </div>
    )
}