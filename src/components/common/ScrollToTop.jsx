import React, { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    // Button is displayed after scrolling for 400 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className='scroll-to-top'>
      {isVisible && (
        <div
          onClick={scrollToTop}
          style={{
            width: '50px',
            background: 'rgba(0, 139, 139, 0.483)',
            color: 'white',
            borderRadius: '50%',
            textAlign: 'center',
            padding: '0 5px',
            position: 'fixed',
            bottom: '20px' /* отступ кнопки от нижнего края страницы*/,
            right: '20px',
            cursor: 'pointer',
          }}>
          <h3>&#708;</h3>
        </div>
      )}
    </div>
  )
}
