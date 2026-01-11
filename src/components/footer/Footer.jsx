import style from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={style.footer}>
            <p className={"body-md-regular " + style.text}>
                Проект выполнен в рамках стажировки
                <a className={style.link} href="http://www.preax.ru">
                PREAX
                </a>
            </p>
        </footer>
    )
} 