import styles from './header.module.css';
import { Button, Logo, ThemeSwitcher } from "@/components";
import { ThemeContext } from "@/context"
import { useContext } from 'react';
import { classNameString } from '../../utils/helpers'

export default function Header() {
    const {theme} = useContext(ThemeContext);

    return (
        <header className={classNameString(styles.header, theme === 'light' ? styles.headerLight : styles.headerDark)} >
            <Logo />
            <div className={styles.wrapper}>
                <Button
                    text={'Создать'}
                    tabIndex={2}
                />
                <ThemeSwitcher />
            </div>
        </header>   
    )
} 