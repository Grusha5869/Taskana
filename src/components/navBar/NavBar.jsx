import style from './navBar.module.css'

export default function NavBar() {
    return (
        <nav className={style.wrapper}>
            <ul className={style.list}>
                <li>
                    <a className={style.link}>
                        <img src="./inbox.svg" alt="Входящие" className={style.icon} />
                        <p className={"body-md-semibold " + style.text}>Входящие</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}