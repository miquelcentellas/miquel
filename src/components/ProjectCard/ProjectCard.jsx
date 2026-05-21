import React, { useState } from 'react'
import styles from './ProjectCard.module.scss'

export default function ProjectCard({ project, isShowcase = false }) {
  const { id, title, category, description, tags, link, github, image, images, year, imagePosition, imageScale } = project
  const [currentImgIdx, setCurrentImgIdx] = useState(0)

  const carouselImages = images && images.length > 0 ? images : [image]

  const imgStyle = {
    '--img-position': imagePosition || 'center',
    '--img-scale': imageScale || '1'
  }

  const handlePrev = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImgIdx((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))
  }

  const handleNext = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImgIdx((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <article className={styles.card}>
      <a href={`/project.html?id=${id}`} className={styles.cardOverlay} aria-label={`View ${title}`} />
      <div className={`${styles.imageContainer} ${isShowcase ? styles.showcaseImage : ''}`}>
        {isShowcase && carouselImages.length > 1 && (
          <button className={`${styles.carouselBtn} ${styles.prevBtn}`} onClick={handlePrev} aria-label="Previous image">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
        )}
        <img
          src={carouselImages[currentImgIdx]}
          alt={`${title} - image ${currentImgIdx + 1}`}
          className={styles.image}
          loading="lazy"
          style={imgStyle}
        />
        {isShowcase && carouselImages.length > 1 && (
          <button className={`${styles.carouselBtn} ${styles.nextBtn}`} onClick={handleNext} aria-label="Next image">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        )}
        {isShowcase && carouselImages.length > 1 && (
          <div className={styles.carouselIndicators}>
            {carouselImages.map((_, idx) => (
              <span 
                key={idx} 
                className={`${styles.indicator} ${idx === currentImgIdx ? styles.active : ''}`}
              />
            ))}
          </div>
        )}
        <span className={`${styles.badge} ${styles[category]}`}>
          {category}
        </span>
        <span className={styles.year}>{year}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>

          <div className={styles.tags}>
            {tags.map((tag, idx) => (
              <span key={idx} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.links}>
            <a
              href={`/project.html?id=${id}`}
              className={styles.link}
            >
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
                aria-label="GitHub Repository"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" clipRule="evenodd" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
