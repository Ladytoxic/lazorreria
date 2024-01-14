import './Card.css';
import foto1 from '../../assets/foto1.jpeg'
import foto2 from '../../assets/foto2.jpeg'
import foto3 from '../../assets/foto3.jpeg'

const Card = () => {
  return (
    <>
      <div className='card'>
        <ul className='card-body'>
          <li className='card-item'>
            <h2 className='card-title'>Quienes somos</h2>
            <p className='card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut quidem eos commodi officia unde aspernatur magni, odio quibusdam minima alias aperiam. Voluptates expedita porro ducimus. Sunt minima dolores porro!</p>
          </li>
          <li className='card-item'>
            <img className='card-img' src={foto1} alt="foto gente hermosa" />
          </li>
        </ul>
      </div>
      <div className='card'>
        <ul className='card-body'>
          <li className='card-item'>
            <img className='card-img' src={foto2} alt="foto gente hermosa" />
          </li>
          <li className='card-item'>
            <h2 className='card-title'>Quienes somos</h2>
            <p className='card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut quidem eos commodi officia unde aspernatur magni, odio quibusdam minima alias aperiam. Voluptates expedita porro ducimus. Sunt minima dolores porro!</p>
          </li>
        </ul>
      </div>
      <div className='card'>
        <ul className='card-body'>
          <li className='card-item'>
            <h2 className='card-title'>Quienes somos</h2>
            <p className='card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut quidem eos commodi officia unde aspernatur magni, odio quibusdam minima alias aperiam. Voluptates expedita porro ducimus. Sunt minima dolores porro!</p>
          </li>
          <li className='card-item'>
            <img className='card-img' src={foto3} alt="foto gente hermosa" />
          </li>
        </ul>
      </div>
    </>
  )
}

export default Card
