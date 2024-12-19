import MenuLink from "./MenuLink/MenuLink"
import styles from './Sidebar.module.css';
import Image from 'next/image';
import { FaToggleOff } from "react-icons/fa6";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdEvent,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdDarkMode,
  MdLogout,
} from "react-icons/md";

  const menuItems = [
  {
    title: "Main Menu",
    list: [
      {
        title: "Home",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Patient",
        path: "/dashboard/patiences",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Credentials",
        path: "/dashboard/credentials",
        icon: <MdShoppingBag />,
      },
      {
        title: "Appointments",
        path: "/dashboard/appointments",
        icon: <MdEvent />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Financial",
        path: "/dashboard/finacial",
        icon: <MdWork />,
      },
      {
        title: "Record",
        path: "/dashboard/record",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help & Center",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];


export default function Sidebar() {
  return (
        <div className={styles.containers}> 
            <div className={styles.logo}>
                <Image className={styles.logoImage} src="/medi.png" alt="logo" width="80" height="80"/>
                <div className={styles.userDetails}>
                    <span className={styles.logoname}>Medi Lab</span>
                </div>
            </div>
        <ul className={styles.list}>
            {
            menuItems.map((cat) => (
                <li key={cat.title}>
                   <span className={styles.cat}>{cat.title}</span>
                   {cat.list.map( (item) => (
                        <MenuLink item={item} key={item.title} />
                    ))}
                </li>
            ))
            }
        </ul>
          <button className={styles.bottomOptions}>
            <div className={styles.toggle}>
              <div className={styles.mode}>
                <MdDarkMode style={{fontSize: '20px'}} />
                <span>Dark Mode</span>
              </div>
              <div>
                <FaToggleOff style={{ color: 'grey', fontSize: '30px' }} />
              </div>
            </div>  
          </button>
        <button className={styles.logout}>
            <MdLogout />
            Logout
        </button>
         <div className={styles.user}>
                <Image className={styles.userImage} src="/noavater.png" alt="nouser" width="50" height="50"/>
                <div className={styles.userDetails}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
        </div>
    </div>
  )
}
