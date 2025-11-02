import Image from "next/image";

const Navbar = ()=> {
    return (
        <div className="flex items-center justify-between p-4 bg-amber-50">
            {/* search bar */}
            <div className="hidden md:flex items-center gap-2 text-xs border rounded ring[1.5px] ring-gray-300 px-3">
                <Image src="/search.png" alt="" width={14} height={14}/>
                <input type="text" placeholder="Search..." className="w-[300] p-2 bg-transparent outline-transparent" />
            </div>
            {/* Icons and user */}
            <div className="flex items-center gap-6 justify-end w-full">
             {/* Message icon */}
             <div className="relative bg-white hover:bg-amber-100 transition rounded-full w-9 h-9 flex items-center justify-center shadow-sm cursor-pointer">
               <Image src="/message.png" alt="messages" width={20} height={20} />
             </div>

             {/* Notification icon */}
             <div className="relative bg-white hover:bg-amber-100 transition rounded-full w-9 h-9 flex items-center justify-center shadow-sm cursor-pointer">
          <Image src="/announcement.png" alt="notifications" width={20} height={20} />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 text-white rounded-full text-[10px] flex items-center justify-center font-medium shadow-md">
            1
          </div>
             </div>

             {/* User info */}
             <div className="hidden sm:flex flex-col items-end leading-tight">
               <span className="text-sm font-semibold text-gray-800">John Doe</span>
               <span className="text-[11px] text-gray-500">Admin</span>
             </div>

            {     /* Avatar */}
             <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-300 shadow-sm cursor-pointer hover:scale-105 transition">
          <Image src="/avatar.png" alt="User Avatar" width={40} height={40} className="object-cover" />
             </div>
      </div>
        </div>
    )
}

export default Navbar;