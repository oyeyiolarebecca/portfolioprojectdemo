// import React from 'react'
// import styles from './card.module.css'
// import { MdSupervisedUserCircle } from 'react-icons/md'

// export default function Card() {
//   return (
//     <div className={styles.container}>
//       <MdSupervisedUserCircle size={24}/>
//         <div className={styles.texts}>
//           <span className={styles.title}>Total Users</span>
//           <span className={styles.number}>10.234</span>
//           <span className={styles.details}>
//             <span className={styles.positive}> 12.3% </span>
//              more than previous week
//           </span>
//         </div>
//     </div>
//   )
// }

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { MdSupervisedUserCircle } from "react-icons/md";

export default function CardComponent() {
  return (
   <Card className="w-full max-w-sm border shadow-md p-4 transition-transform duration-300 hover:shadow-lg hover:scale-105 hover:bg-gray-100">
      <CardHeader>
        <MdSupervisedUserCircle size={24} className="text-teal-500" />
        <CardTitle>Total Users</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">10,234</p>
        <CardDescription>
          <span className="text-green-500 font-semibold">12.3% </span> more than the previous week
        </CardDescription>
      </CardContent>
    </Card> 
  );
}
