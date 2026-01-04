import styles from './header.module.css'
import { Button } from '../button/Button.jsx'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="logo">
                <img src="/logo.png" alt="Логотип" />
            </div>
            <Button
                text={'Создать'}
            />

        </header>
    )
} 