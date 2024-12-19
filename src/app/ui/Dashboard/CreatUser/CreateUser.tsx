import React from 'react'
import styles from './createuser.module.css'
import { FaListCheck } from "react-icons/fa6";
import { CiSearch, CiExport } from "react-icons/ci";
import { FaRegCalendarAlt, FaPlus } from "react-icons/fa";

export default function CreateUser() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.ptl}>
            <FaRegCalendarAlt style={{ fontSize: '24px', color: '#67bac1' }} />
            <h2 className={styles.title}>Last updated: Jan 2024 - Dec 2024</h2>
        </div>
        <div className={styles.aside}>
            <div className={styles.export}>
                <CiExport style={{ fontSize: '24px', color: '#67bac1' }} /> 
                 Export
            </div>
            <button className={styles.btn}>
                    <FaPlus style={{ fontSize: '15px', color: '#67bac1' }} />
                    Create User
            </button>
        </div>
    </div>
  )
}
