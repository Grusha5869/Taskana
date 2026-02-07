import style from "./footer.module.css"
import { classNameString } from '../../utils/helpers'

export default function Footer() {
    return (
        <footer className={style.footer}>
            <p className={classNameString("body-md-regular", style.text)}>
                Проект выполнен в рамках стажировки
                <a className={classNameString("body-md-regular", style.link)} href="http://www.preax.ru" target="_blank" rel="noopener noreferrer">
                PREAX
                </a>
            </p>
        </footer>
    )
} 