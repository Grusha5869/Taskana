import styles from './header.module.css'
import { Button } from '../button/Button.jsx'
import Logo from '../logo/Logo.jsx'

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