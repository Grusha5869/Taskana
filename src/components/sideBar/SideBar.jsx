import style from './sideBar.module.css'
import Statistic from '../statistic/Statistic'

export default function SideBar() {
    return (
        <aside className={style.rightArea}>
            <img src="/book.png" alt="Записная книга" className={style.bookImg} />
            <Statistic />
        </aside>
    )
}