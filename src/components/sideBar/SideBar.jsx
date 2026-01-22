import style from './sideBar.module.css'
import { Statistic } from '@/components'

export default function SideBar() {
    return (
        <aside className={style.rightArea}>
            <div className={style.wrapper}>
                <div className={style.wrapperImg}>
                    <img src="/book.png" alt="Записная книга" className={style.bookImg} />
                </div>
                <Statistic />
            </div>
        </aside>
    )
}