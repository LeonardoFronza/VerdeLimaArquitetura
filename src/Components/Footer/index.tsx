import Image from 'next/image';
import { Form } from '../Form';
import styles from './Footer.module.scss'

export function Footer() {

    const ZAP = '/svgs/logo-whatsapp.svg'
    const INSTAGRAM = '/svgs/logo-instagram.svg'
    const FACEBOOK = '/svgs/logo-facebook.svg'
    const TIMER = '/svgs/time-outline.svg'
    const LOCATION = '/svgs/location-outline.svg'

  return (
    <>
        <footer className={styles.footer}>
            <div className={styles.divContato}>
                <h1>Contato</h1>

                <p>Contato@verdelimaarquitetura.com.br</p>
                <p>(51) 9.9829-1909</p>

                <div className={styles.contatoDivEmail}>
                  <Form styles={styles}/>
                </div>
            </div>

          <div className={styles.divMaps}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13853.119593805608!2d-51.1353862!3d-29.7695471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951969b49d9a55bb%3A0xa360c4123938fea6!2sVerde%20Lima%20Arquitetura!5e0!3m2!1spt-BR!2sbr!4v1676581763730!5m2!1spt-BR!2sbr"
              width="500"
              height="325"
              loading="lazy"
            />
          </div>

          <div className={styles.divRedesSocias}>
            <ul>
              <li><Image className={styles.Image} src={ZAP} width={35} height={35} alt="Zap"/>(51) 9.9829-1909</li>
              <li><Image className={styles.Image} src={INSTAGRAM} width={35} height={35} alt="Zap"/>@verdelimaarquitetura</li>
              <li><Image className={styles.Image} src={FACEBOOK} width={35} height={35} alt="Zap"/>@verdelimaarquitetura </li>
              <li><Image className={styles.Image} src={TIMER} width={35} height={35} alt="Zap"/>08:30 - segunda-feira a sexta-Feiras</li>
              <li>
              <Image className={styles.Image} src={LOCATION} width={35} height={35} alt="Zap"/>
                R. João XXIII, 32 - Sala 1601 - <br/> São José, São Leopoldo - RS,
                93040-090
              </li>
            </ul>
          </div>
        </footer>
    </>
  );
}
