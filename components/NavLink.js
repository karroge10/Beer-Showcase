import Link from 'next/link'
import styles from '../styles/NavLink.module.css'

export default function NavLink({text, href}) {
    return (
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}