import React, { useState } from 'react'
import styles from './Contact.module.scss'

export default function Contact() {
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    try {
      const response = await fetch('https://formsubmit.co/ajax/miquelcentellas@hotmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: name,
          Email: email,
          Mensaje: message,
          _subject: `Nuevo mensaje de contacto en tu portafolio: ${name}`
        })
      })

      if (response.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        // Fallback a mailto si falla la API
        window.location.href = `mailto:miquelcentellas@hotmail.com?subject=Contacto: ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nDe: ' + name + ' (' + email + ')')}`
        setStatus('success')
      }
    } catch (err) {
      // Fallback a mailto en caso de error de red
      window.location.href = `mailto:miquelcentellas@hotmail.com?subject=Contacto: ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nDe: ' + name + ' (' + email + ')')}`
      setStatus('success')
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <h2><span>Contacto</span></h2>
        <p>¿Tienes un proyecto en mente que necesite diseño y código? Hablemos.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.profileColumn}>
          <div className={styles.imageContainer}>
            <img src="/profile.jpg" alt="Miquel Centellas" className={styles.profileImage} />
          </div>
          <div className={styles.socials}>
            <h3>Conecta conmigo</h3>
            <div className={styles.links}>
              <a href="https://linkedin.com/in/miquel-centellas-lorenzo-40a880326" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/miquelcentellas" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://www.instagram.com/miquelcentellas" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram
              </a>
              <a href="mailto:miquelcentellas@hotmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                miquelcentellas@hotmail.com
              </a>
            </div>
          </div>
        </div>

        <div className={styles.formColumn}>
          {status === 'success' ? (
            <div className={styles.successMessage}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3>¡Mensaje enviado con éxito!</h3>
              <p>Gracias por ponerte en contacto. Te responderé lo antes posible a tu dirección de correo.</p>
              <button 
                type="button" 
                className={styles.submitBtn}
                onClick={() => setStatus('idle')}
                style={{ marginTop: '1rem' }}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" placeholder="Tu nombre" required disabled={status === 'submitting'} />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="tu@email.com" required disabled={status === 'submitting'} />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="5" placeholder="¿En qué puedo ayudarte?" required disabled={status === 'submitting'}></textarea>
              </div>

              <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
