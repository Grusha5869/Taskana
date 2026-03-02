import style from './navBar.module.css'
import { Icon } from "@/components"
import { classNameString } from '@/utils'

export default function NavBar() {
    return (
        <nav className={style.wrapper}>
            <ul className={style.list}>
                <li className={style.listElem}>
                    <a className={style.navBtn} href="#">
                        <Icon name={'inbox'} />
                        <p className={classNameString("body-md-semibold", style.text)}>Входящие</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}