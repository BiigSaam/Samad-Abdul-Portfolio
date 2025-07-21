import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setMessage({ type: 'success', text: '✅ Merci pour votre message, je vous répondrai rapidement.' })
        formRef.current?.reset()
        setTimeout(() => setMessage(null), 3000)
      })
      .catch(() => {
        setMessage({ type: 'error', text: '❌ Une erreur est survenue. Veuillez réessayer plus tard.' })
        setTimeout(() => setMessage(null), 3000)
      })
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Me contacter</h2>

        <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
          <input type="text" name="name" placeholder="Nom" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Votre message" rows={5} required />
          <button type="submit">Envoyer</button>
        </form>

        {message && (
          <p className={`${styles.feedback} ${message.type === 'success' ? styles.success : styles.error}`}>
            {message.text}
          </p>
        )}

        <div className={styles.links}>
          <a href="/CV-Samad_ABDUL-Alternance_Developpeur_full_stack.pdf" target="_blank" rel="noopener noreferrer">📄 Télécharger mon CV</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
