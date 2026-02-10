import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isWhatsAppBrowser, setIsWhatsAppBrowser] = useState(false)
  const [isAndroid, setIsAndroid] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Detect WhatsApp browser
    const userAgent = navigator.userAgent
    const isWhatsApp = /WhatsApp/.test(userAgent)
    setIsWhatsAppBrowser(isWhatsApp)

    // Detect device OS
    const android = /Android/.test(userAgent)
    const ios = /iPhone|iPad|iPod/.test(userAgent)
    setIsAndroid(android)
    setIsIOS(ios)
  }, [])

  const handleOpenInDefaultBrowser = () => {
    const currentUrl = window.location.href

    if (isAndroid) {
      // For Android, use Intent URL scheme to open in Chrome
      const intentUrl = `intent://${currentUrl.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end`
      window.location.href = intentUrl
    } else if (isIOS) {
      // For iOS, try to open in Safari using a workaround
      // This is a limitation of iOS Safari in-app browser
      const safariUrl = `safari-${currentUrl}`
      window.location.href = safariUrl

      // If that doesn't work, try opening via a delay
      setTimeout(() => {
        window.location.href = currentUrl
      }, 1000)
    }
  }

  if (!isWhatsAppBrowser) {
    return (
      <div className="container">
        <div className="content">
          <h1>✓ Already in Default Browser</h1>
          <p>You're viewing this page in your default browser. Enjoy!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="content">
        <h1>📱 You're in WhatsApp Browser</h1>
        <p>Click the button below to open this page in your default browser for a better experience.</p>

        <button
          className="redirect-button"
          onClick={handleOpenInDefaultBrowser}
        >
          {isAndroid ? 'Open in Chrome' : isIOS ? 'Open in Safari' : 'Open in Default Browser'}
        </button>

        <p className="info">
          This will give you a faster, more responsive browsing experience.
        </p>
      </div>
    </div>
  )
}

export default App
