import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden shadow-md 
    bg-white/20 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-8'>
      <Sidebar />    
      <MessageContainer />
    </div>
  )
}

export default Home