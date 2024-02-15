import Hero from '../Components/Hero/Hero';
import logo from '../assets/Logo_de_la_zorreria.jpg'


const HomePage = () => {
  return (
    <>
      <Hero />
      <main>
        <section>
          <article className='about'>
            <h2>Quienes somos</h2>
            <p className='text'><span className='important'>La Zorreria</span> es un espacio cultural de todes y para todes. <br />
              Somos <span className='important'>autogestives</span>, x ende, tu colaboración ayuda a pagar el agua, la luz, el alquiler y mantenimiento de espacio. <br />
              Podes ayudarnos con algun aporte solidario al alias: la.zorreria o donando ropa para la feria americana. Simplemente podes vevir y sumarte a esta madriguera te estamos esperando</p>
          </article>
        </section>
        <section>
          <div className='map'>
            <h2>Como llegar</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d819.0297905177016!2d-58.479105033815756!3d-34.80294379297579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd142d57dc6e9%3A0x645329a73d0a0e80!2sLa%20zorreria!5e0!3m2!1ses-419!2sar!4v1707869394188!5m2!1ses-419!2sar"
            width="100%"
            height="320px"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage;
