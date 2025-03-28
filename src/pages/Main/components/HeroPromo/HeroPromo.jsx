import { useRef, useState } from 'react'

import promoVideo from '../../../../assets/videos/promo.webm'

import styles from './HeroPromo.module.scss'

export const HeroPromo = () => {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMute()
    }
  }

  return (
    <div
      className={styles.heroPromo}
      onClick={toggleMute}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className={styles.video}
      >
        <source
          src={promoVideo}
          type="video/mp4"
        />
      </video>
    </div>
  )
}
