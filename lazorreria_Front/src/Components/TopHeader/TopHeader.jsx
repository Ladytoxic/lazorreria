import './TopHeader.css';
import { Location, InstagramFill, FacebookFill, YoutubeFill } from 'akar-icons';

const TopHeader = () => {
    return (
        <div className='top-header'>
            <ul className='list-items'>
                <li className='item'>
                    <a target='_blank' href="https://maps.app.goo.gl/Md3kzMUakFHjpyWP6">
                        <address>
                            Nuestras Mavinas 1195, Monte Grande
                            <Location strokeWidth={2} size={18} />
                        </address>
                    </a>
                </li>
                <li>
                    <a target='_blank' href="https://www.facebook.com/lazorreriaok/">
                        <FacebookFill strokeWidth={2} size={18} />
                    </a>
                </li>
                <li>
                    <a target='_blank' href="https://www.instagram.com/la_zorreria">
                        <InstagramFill strokeWidth={2} size={18} />
                    </a>
                </li>        <li>
                    <a href="">
                        <YoutubeFill strokeWidth={2} size={18} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default TopHeader
