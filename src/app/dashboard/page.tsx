import React from 'react'
import Card from '../ui/Dashboard/Cards/Card';
import styles from "../ui//Dashboard/Dashboard.module.css"
import Chart from '../ui/Dashboard/Chart/Chart';
import Table from '../ui/Dashboard/Table/Table';
import CreateUser from '../ui/Dashboard/CreatUser/CreateUser';


export default function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <CreateUser />
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Chart />
        <Table />
      </div>
    </div>
  )
}
