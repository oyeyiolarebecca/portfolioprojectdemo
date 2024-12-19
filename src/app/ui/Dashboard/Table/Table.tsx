import React from 'react'
import styles from './table.module.css';
import Image from 'next/image';
import { FaListCheck } from "react-icons/fa6";
import { CiSearch, CiExport } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";

export default function Table() {
  return (
    <div className={styles.container}>
        <div className={styles.topbar}>
            <div className={styles.ptl}>
                <FaListCheck style={{ fontSize: '24px', color: '#67bac1' }} />
                <h2 className={styles.title}>Patients List</h2>
            </div>
            <div className={styles.aside}>
                <div className={styles.search}>
                    <CiSearch />
                    <input className={styles.input} type="text" placeholder='Seach Patient' />
                </div>
                <div className={styles.filter}><FaFilter /> Filter</div>
                <div className={styles.export}><CiExport /> Export</div>
            </div>
        </div>
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>PatientID</td>
                    <td>Patient Name</td>
                    <td>Age</td>
                    <td>Gender</td>
                    <td>Date</td>
                    <td>Department</td>
                    <td>Primary Diagnosis</td>
                    <td>Status</td> 
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className={styles.users}>
                                <Image src='/noavater.png' alt='noavater' width={40} height={40} className={styles.userImage }/>
                                000123
                        </div>
                    </td>
                    <td>John Doe</td>
                    <td><span>29</span></td>
                    <td><span>Male</span></td>
                    <td>18/12/2024</td>
                    <td>General Surgery</td>
                    <td>Appendicitis</td>
                    <td>
                        <span className={`${styles.status} ${styles.inpatient}`}>Inpatient</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.users}>
                                <Image src='/noavater.png' alt='noavater' width={40} height={40} className={styles.userImage }/>
                                000123
                        </div>
                    </td>
                    <td>Jenniffer Mathew</td>
                    <td><span>32</span></td>
                    <td><span>Femal</span></td>
                    <td>10/10/2024</td>
                    <td>Oncology</td>
                    <td>Lung Cancer</td>
                    <td>
                        <span className={`${styles.status} ${styles.outpatient}`}>Outpatient</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.users}>
                                <Image src='/noavater.png' alt='noavater' width={40} height={40} className={styles.userImage }/>
                                000123
                        </div>
                    </td>
                    <td>James Johnson</td>
                    <td><span>45</span></td>
                    <td><span>Male</span></td>
                    <td>30/10/2024</td>
                    <td>Oncology</td>
                    <td>Lung Cancer</td>
                    <td>
                        <span className={`${styles.status} ${styles.inpatient}`}>Inpatient</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.users}>
                                <Image src='/noavater.png' alt='noavater' width={40} height={40} className={styles.userImage }/>
                                000123
                        </div>
                    </td>
                    <td>John Smith</td>
                    <td><span>25</span></td>
                    <td><span>Female</span></td>
                    <td>20/08/2024</td>
                    <td>Cardiology</td>
                    <td>Coronary Artery Disease</td>
                    <td>
                        <span className={`${styles.status} ${styles.outpatient}`}>Outpatient</span>
                    </td>
                </tr>
            </tbody>
            
        </table>
    </div>
  )
}
