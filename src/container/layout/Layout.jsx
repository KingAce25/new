import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import './layout.css'
import Hero from '../hero/Hero'
import Browse from '../browse/Browse'
import How from '../how/How'
import Contact from '../contact/Contact'
// import Faq from '../faq/Faq'

function Layout() {
  const hero = React.useRef(<Hero/>);
  const browse = React.useRef(<Browse/>);
  const howitworks = React.useRef(<How/>);
  // const faqs = React.useRef(<Faq/>);
  const contact = React.useRef(<Contact/>)

  const scrollToHero = () => hero.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToBrowse = () => browse.current.scrollIntoView({ behavior: 'smooth' });
  const scrollTohowitworks = () => howitworks.current.scrollIntoView({ behavior: 'smooth' });
  // const scrollToFaqs = () => faqs.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => contact.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <div>
      <Header
        scrollToHero={scrollToHero}
        scrollToBrowse={scrollToBrowse}
        scrollToHowitworks={scrollTohowitworks}
        // scrollToFaqs={scrollToFaqs}
        scrollToContact={scrollToContact}
      />
      <Outlet
        heroRef={hero}
        browseRef={browse}
        howitworksRef={howitworks}
        // faqs4Ref={faqs}
        contactRef={contact}
      />
      <Footer />
    </div>
  )

}

// const Layout = () => {
//   return (
//     <div className='page'>
//       <Header/>
//       <Outlet/>
//       <Footer/>
//     </div>
//   )
// }

export default Layout
