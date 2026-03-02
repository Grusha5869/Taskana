import style from './logo.module.css'
import { Illustration } from '@/components'

export default function Logo({ onFocus, onBlur }) {
    return (
        <a 
            onFocus={onFocus} 
            onBlur={onBlur} 
            href="/" 
            className={style.link} 
            tabIndex={1}
        >
            <Illustration name='logo' />
        </a>
    )
}