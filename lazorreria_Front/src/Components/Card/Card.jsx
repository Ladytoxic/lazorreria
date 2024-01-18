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
          <img className='card-img' src={foto1} alt="foto gente hermosa" />
          <p className='card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut quidem eos commodi officia unde aspernatur magni, odio quibusdam minima alias aperiam. Voluptates expedita porro ducimus. Sunt minima dolores porro!</p>
        </div>
        <div className='card-footer'>
        </div>
      </div>
    </>
  )
}

export default Card
