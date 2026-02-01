import styles from './header.module.css';
import { Button, Logo, ThemeSwitcher } from "@/components";

export default function Header() {

    return (
        <header className={styles.header} >
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