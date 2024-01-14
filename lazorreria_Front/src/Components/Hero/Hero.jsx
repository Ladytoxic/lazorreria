import Welcome from '../Welcome/Welcome';
import './Hero.css';
import paraguas from '../../assets/paraguaspride.png'

const Hero = () => {
  return (
    <div className='hero'>
      <Welcome titulo={"La Zorreria"} />
      <img className='paraguas l' src={paraguas} alt="" />
      <img className='paraguas r' src={paraguas} alt="" />
    </div>
  )
}

export default Hero
