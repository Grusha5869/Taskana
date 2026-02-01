import style from "./footer.module.css"
import { ThemeContext } from '@/context'
import { classNameString } from '../../utils/helpers'
import { useContext } from "react"

export default function Footer() {
    const {theme} = useContext(ThemeContext);
    return (
        <footer className={style.footer}>
            <p className={classNameString("body-md-regular", style.text, theme === 'light' ? style.textLight : style.textDark)}>
                Проект выполнен в рамках стажировки
                <a className={classNameString("body-md-regular", style.link, theme === 'light' ? style.linkLight : style.linkDark)} href="http://www.preax.ru" target="_blank" rel="noopener noreferrer">
                PREAX
                </a>
            </p>
        </footer>
    )
} 