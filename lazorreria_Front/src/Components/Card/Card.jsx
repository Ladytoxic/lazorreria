import './Card.css';
import foto1 from '../../assets/foto1.jpeg'
import foto2 from '../../assets/foto2.jpeg'
import foto3 from '../../assets/foto3.jpeg'

const Card = () => {
  return (
    <>
      <div className='card'>
        <div className='card-header'>
          <h2 className='card-title'>Quienes somos</h2>
        </div>
        <div className='card-body'>
          {/* <img className='card-img' src={foto1} alt="foto gente hermosa" /> */}
          <p className='card-text'>LA ZORRERIA es un espacio cultural de todes y para todes.
            Somos autogestives, x ende, tu colaboración ayuda a pagar el agua, la luz, el alquiler y mantenimiento de espacio.
            Podes ayudarnos con algun aporte solidario al alias: la.zorreria o donando ropa para la feria americana. Simplemente podes vevir y sumarte a esta madriguera te estamos esperando</p>
        </div>
        <div className='card-footer'>
        </div>
      </div>
    </>
  )
}

export default Card
