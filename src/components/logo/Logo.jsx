import style from './logo.module.css'

export default function Logo() {
    return (
        <a href="/">
            <img src="/logo.png" alt="Логотип" className={style.logo} />
        </a>
    )
}