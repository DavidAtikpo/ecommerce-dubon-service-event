import React from 'react'
import VendeurNavBar from './VendeurNavBar'

const Dashboard = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "" : "" } w-full`}>
        <VendeurNavBar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
        />
    </div>
  )
}

export default Dashboard