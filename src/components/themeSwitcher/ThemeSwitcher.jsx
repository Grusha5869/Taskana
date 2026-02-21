import style from "./themeSwitcher.module.css"
import { classNameString } from "../../utils/helpers"
import { useState, useContext } from "react"
import Icon from "../icon/Icon"
import { AppContext } from '@/context';

export default function ThemeSwitcher() {
    const [active, setActive] = useState(0)
    const [sunFill, setSunFill] = useState('var(--base-white)')
    const [moonFill, setMoonFill] = useState('var(--neutral-light-600)')
    const {toggleTheme} = useContext(AppContext)

    function handleClick() {
        toggleTheme()

        if (active === 0) {
            setActive(1)
            setSunFill('var(--neutral-light-600)')
            setMoonFill('var(--base-white)')
        } else {
            setActive(0)
            setSunFill('var(--base-white)')
            setMoonFill('var(--neutral-light-600)')
        }
    }

    return (
        <button onClick={handleClick} className={style.button} tabIndex={3}>
            <div className={classNameString(style.wrapper, active === 0 && style.active)}>
                <Icon name='sun' fill={sunFill} />
            </div>
            <div className={classNameString(style.wrapper, active === 1 && style.active)}>
                <Icon name='moon' fill={moonFill} />
            </div>
        </button>
    )
}