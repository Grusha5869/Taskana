import style from './sideBar.module.css'
import { Statistic } from '@/components'
import Illustration from '../illustration/Illustration'
import { useContext } from 'react'
import { ThemeContext } from '@/context'
import { classNameString } from '../../utils/helpers'


export default function SideBar() {
    const {theme} = useContext(ThemeContext);

    return (
        <aside className={classNameString(style.rightArea, theme === 'light' ? style.rightAreaLight : style.rightAreaDark)}>
            <div className={style.wrapper}>
                <div className={style.wrapperImg}>
                    <Illustration name='book'
                    className={style.svg}
                    fillBg={theme === 'light' ? 'var(--neutral-light-0)' : 'var(--neutral-dark-0)'}
                    fill300={theme === 'light' ? 'var(--neutral-light-300)' : 'var(--neutral-dark-300)'}
                    fill700={theme === 'light' ? 'var(--neutral-light-700)' : 'var(--neutral-dark-700)'}
                    fillPrimary={'var(--primary-300)'} />
                </div>
                <Statistic theme={theme} />
            </div>
        </aside>
    )
}