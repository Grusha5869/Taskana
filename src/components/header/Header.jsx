import styles from './header.module.css'
import { Button, Logo } from "@/components";

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <Button
                text={'Создать'}
            />

        </header>
    )
} 