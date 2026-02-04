import style from './navBar.module.css'
import { useContext } from 'react'
import { NavButton } from '@/components'
import Icon from "../icon/Icon"
import { ThemeContext } from '@/context'
import { classNameString } from '../../utils/helpers'

export default function NavBar() {
    const {theme} = useContext(ThemeContext)

    return (
        <nav className={classNameString(style.wrapper, theme === 'light' ? style.wrapperLight : style.wrapperDark)}>
            <ul className={style.list}>
                <li className={style.listElem}>
                    <NavButton tabIndex={4}>
                        <a className={style.link}>
                            <Icon name={'inbox'} fill={theme === 'light' ? "var(--neutral-light-0)" : "var(--neutral-dark-0)"} />
                            <p className={classNameString("body-md-semibold", theme === 'light' ? style.textLight : style.textDark)}>Входящие</p>
                        </a>
                    </NavButton>
                </li>
            </ul>
        </nav>
    )
}