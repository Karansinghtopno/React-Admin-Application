import React from 'react'
import DataTables from '../../Components/DataTables/DataTables'
import Nav from '../../Components/Navbar/Nav'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./Listpage.scss"
const Listpage = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Nav/>
        <DataTables/>
      </div>
    </div>
  )
}

export default Listpage
