import React, {useEffect, useState} from 'react'
import { ScrollToTopButtonContainer } from './scrollToTopButton-elements'
import { AiOutlineArrowUp } from 'react-icons/ai'

const ScrollToTopButton = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 500) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    }, []);

    const backToTop =() =>{
        window.scrollTo(0, 0);
    }


  return (
      <ScrollToTopButtonContainer scrolled={scrolled} onClick={backToTop}>BACK &nbsp;<AiOutlineArrowUp size='18px' /></ScrollToTopButtonContainer>
  )
}

export default ScrollToTopButton