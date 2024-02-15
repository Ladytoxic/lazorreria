import Welcome from '../Welcome/Welcome';
import './Hero.css';
import video from "../../assets/video.mp4"
import Header from '../Header/Header';
import zorre from "../../assets/icono zorre.png"

const Hero = () => {
  return (
    <div className='hero'>
      <Header />
      <video className='video' src={video} autoPlay loop muted></video>
      <Welcome titulo={"La Zorreria"} />
      <span>
        <p className='sub'>El futuro es zorre</p>
        <img className='zorre' src={zorre} alt="" />
      </span>
    </div>
  )
}

export default Hero
