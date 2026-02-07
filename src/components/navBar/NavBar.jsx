import style from './navBar.module.css'
import { NavButton } from '@/components'
import Icon from "../icon/Icon"
import { classNameString } from '../../utils/helpers'

export default function NavBar() {
    return (
        <nav className={style.wrapper}>
            <ul className={style.list}>
                <li className={style.listElem}>
                    <NavButton tabIndex={4}>
                        <Icon name={'inbox'} />
                        <p className={classNameString("body-md-semibold", style.text)}>Входящие</p>
                    </NavButton>
                </li>
            </ul>
        </nav>
    )
}