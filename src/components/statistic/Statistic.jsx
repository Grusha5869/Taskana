import style from "./statistic.module.css"
import { classNameString } from '../../utils/helpers'

export default function Statistic({ theme }) {
    return (
        <p className={classNameString('body-md-semibold', style.text, theme === 'light' ? style.textLight : style.textDark)}>Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и самочувствие.</p>
    )
}