"use client"
import { usePathname } from 'next/navigation';
import styles from './MenuLink.module.css';
import Link from 'next/link';

export default function MenuLink({item}: any) {
    const pathname = usePathname()
  return (
    <Link href ={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
        {item.icon}
        {item.title}
    </Link>
  )
}
