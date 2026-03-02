import style from './sideBar.module.css'
import { Statistic, Illustration } from '@/components'
import { classNameString } from "@/utils"

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