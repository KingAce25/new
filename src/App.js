import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './container/layout/Layout';
import Home from './container/home/Home';
// import Hero from './container/hero/Hero'
import Browse from './container/browse/Browse'
// import Design from './container/browse/design/Design';
// import Marketing from './container/browse/marketing/Marketing';
// import Finance from './container/browse/finance/Finance';
// import Music from './container/browse/music/Music'
// import Education from './container/browse/education/Education'
import How from './container/how/How'
// import Faq from './container/contact/Contact'
import Contact from './container/contact/Contact'
import Nopage from './container/noPage/Nopage';
import Web from './container/hero/web/Web'
import Contactform from './container/pages/Contactform'
import Topicslisting from './container/pages/Topicslisting'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
              <Route exact path='#browse' element={<Browse/>}/>
              <Route path='#how' element={<How/>}/>
              <Route path='#contact' element={<Contact/>}/>
              <Route path='web' element={<Web/>}/>
              <Route path='*' element={<Nopage/>}/>              <Route path='contactform' element={<Contactform/>}/>
          <Route path='topicslisting' element={<Topicslisting/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
