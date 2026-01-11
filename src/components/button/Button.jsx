import style from './button.module.css'

export const Button = ({ text }) => {
    return (
        <button className={`body-md-semibold ` + style.button}>
            <img src="/plus.svg" alt="создать" />
            {text}
        </button>
    )
}