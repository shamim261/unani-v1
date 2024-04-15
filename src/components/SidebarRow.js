import React from 'react'
import "../assets/css/SidebarRow.css"

function SidebarRow({Icon,title}) {
    return (
        <div className="sidebarRow">
            {Icon && <Icon />}
            <p> <span> <strong>{title}</strong> </span> </p> 
                     
        </div>
    )
}

export default SidebarRow