import React from "react";

type NavItemProps = {
    icon:  JSX.Element,
    label: string
}
const NavItem = ({ icon, label }: NavItemProps) => {
    return <div className="mb-2 hover:bg-gray-200 rounded-full py-2 px-4 flex items-center space-x-2">
        <>
            {icon}
            <span>{label}</span>
        </>
    </div>
}
export default NavItem;