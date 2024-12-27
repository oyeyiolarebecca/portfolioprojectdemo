// "use client"
// import { usePathname } from "next/navigation";
// import styles from './Navbar.module.css'
// import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";

// export default function Navbar() {
//   const pathname = usePathname()
//   return (
//     <div className={styles.container}>
//       <div className={styles.title}>{pathname.split("/").pop()}</div>
//         <div className={styles.menu}>
//           <div className={styles.search}>
//             <MdSearch/>
//             <input type="text" placeholder="Search..." className={styles.input}/>
//             </div>
//             <div className={styles.icons}>
//               <MdNotifications size={20}/>
//               <MdOutlineChat size={20}/>
//               <MdPublic size={20}/>
//             </div>
//           </div>
//     </div>
//   )
// }


"use client";

import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4">
      {/* Page Title */}
      <div className="text-xl font-semibold">{pathname.split("/").pop()}</div>
      
      {/* Search and Icons */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <div className="flex items-center bg-gray-100 rounded-md px-2 py-1">
          <MdSearch size={20} className="text-gray-500" />
          <Input 
            type="text" 
            placeholder="Search..." 
            className="border-none focus:ring-0 focus:outline-none"
          />
        </div>
        
        {/* Icon Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <MdNotifications size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <MdOutlineChat size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <MdPublic size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
