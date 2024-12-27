// import React from 'react'
// import styles from './createuser.module.css'
// import { FaListCheck } from "react-icons/fa6";
// import { CiSearch, CiExport } from "react-icons/ci";
// import { FaRegCalendarAlt, FaPlus } from "react-icons/fa";

// export default function CreateUser() {
//   return (
//     <div className={styles.wrapper}>
//         <div className={styles.ptl}>
//             <FaRegCalendarAlt style={{ fontSize: '24px', color: '#67bac1' }} />
//             <h2 className={styles.title}>Last updated: Jan 2024 - Dec 2024</h2>
//         </div>
//         <div className={styles.aside}>
//             <div className={styles.export}>
//                 <CiExport style={{ fontSize: '24px', color: '#67bac1' }} /> 
//                  Export
//             </div>
//             <button className={styles.btn}>
//                     <FaPlus style={{ fontSize: '15px', color: '#67bac1' }} />
//                     Create User
//             </button>
//         </div>
//     </div>
//   )
// }

import React from 'react';
import { Button } from "@/components/ui/button"; // Importing Button from shadcn
import { FaRegCalendarAlt, FaPlus } from "react-icons/fa";
import { CiExport } from "react-icons/ci";

export default function CreateUser() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
      {/* Left Section: Calendar Icon and Title */}
      <div className="flex items-center space-x-2">
        <FaRegCalendarAlt className="text-2xl text-teal-500" />
        <h2 className="text-lg font-semibold">Last updated: Jan 2024 - Dec 2024</h2>
      </div>

      {/* Right Section: Export and Create User Button */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-teal-500">
          <CiExport className="text-2xl" />
          <span>Export</span>
        </div>
        <Button className="flex items-center space-x-1">
          <FaPlus className="text-sm" />
          <span>Create User</span>
        </Button>
      </div>
    </div>
  );
}

