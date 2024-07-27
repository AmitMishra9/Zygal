import { useState } from 'react'
import './App.css'
import Carousel from './component/Carousel'
import Form from './component/Form'
import Scroll from './component/Scroll'
function App() {

  return (
       <>
          <Carousel/>
          <br></br><br></br>
           <Form/>
           <br></br><br></br>
           <br></br><br></br>
           <Scroll/>
       </>
  )
}

export default App
