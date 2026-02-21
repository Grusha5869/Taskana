import style from './sideBar.module.css'
import { Statistic } from '@/components'
import Illustration from '../illustration/Illustration'
import { classNameString } from "../../utils/helpers"

export default function SideBar() {
    return (
        <aside className={classNameString(style.rightArea)}>
            <div className={style.wrapper}>
                <div className={style.wrapperImg}>
                    <Illustration name='book' className={style.svg} />
                </div>
                <Statistic />
            </div>
        </aside>
    )
}