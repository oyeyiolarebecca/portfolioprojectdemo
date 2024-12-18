import React from 'react'
import Sidebar from '../ui/Dashboard/Sidebar/Sidebar'
import Navbar from '../ui/Dashboard/Navbar/Navbar';
import styles from '../ui/Dashboard/Dashboard.module.css';


export default function Layout({children}: {
    children: React.ReactNode;
}) {
  return (
<div className={styles.container}>
        <div className={styles.menu}>
             <Sidebar/>
        </div>
        <div className={styles.content}>
            <Navbar/>
            {children}
        </div>
    
    </div>
   
  )
}
