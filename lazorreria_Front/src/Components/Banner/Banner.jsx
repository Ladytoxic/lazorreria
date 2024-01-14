import './Banner.css'

const Banner = ({ title, subtitle }) => {
  return (
    <div className='banner'>
      <h1 className='banner-title'>{title}</h1>
      <p className='subtitle'>{subtitle}</p>
    </div>
  )
}
export default Banner
