import style from "./statistic.module.css"
import { classNameString } from '../../utils/helpers'

export default function Statistic() {
    return (
        <p className={classNameString('body-md-regular', style.text)}>Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и самочувствие.</p>
    )
}