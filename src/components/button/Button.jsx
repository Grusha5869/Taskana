import style from './button.module.css'

export const Button = ({ text }) => {
    return (
        <button className={style.button}>
            <img src="/logo-plus.png" alt="создать" />
            {text}
        </button>
    )
}