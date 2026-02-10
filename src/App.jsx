import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isAndroid, setIsAndroid] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Detect device OS
    const userAgent = navigator.userAgent
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
      // For iOS, open in Safari using the Safari URL scheme
      const safariUrl = `safari-${currentUrl}`
      window.location.href = safariUrl
    } else {
      // Fallback for other devices
      window.open(currentUrl, '_system')
    }
  }

  return (
    <div className="container">
      <div className="content">
        <h1>📱 Open in Native Browser</h1>
        <p>For the best experience, open this page in your device's native browser.</p>

        <button
          className="redirect-button"
          onClick={handleOpenInDefaultBrowser}
        >
          {isAndroid ? 'Open in Chrome' : isIOS ? 'Open in Safari' : 'Open in Browser'}
        </button>

        <p className="info">
          This will give you a faster, more responsive browsing experience.
        </p>
      </div>
    </div>
  )
}

export default App
