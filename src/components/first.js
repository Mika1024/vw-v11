import img6 from './old/IMG/30.png';
import img16 from './old/IMG/25.png';
import img56 from './old/IMG/13.png';
import img26 from './old/IMG/26.png';
import img36 from './old/IMG/27.png';
import img from './1.png'
import img1 from './2.png'
import img2 from './3.png'
import { Link } from 'react-router-dom'
const FirstPage = () => {
    
    return <>
            <div style={{width: "100vw", height: "100vh", float:"left"}} className='disablet'></div>
            <div className="leftr left" id="Home">
                <span className="start-t1">Wellfine/</span>
                <img src={img26} id="parallax" class="start-if1 wow animate__animated animate__fadeInUp" />
                <img src={img16} id="parallax1" class="start-if wow animate__animated animate__fadeInUp" />
                <img src={img6} class="start-i" />
                <span className="start-t1 text-bg st1">Wellfine/</span>
                <img src={img36} id="parallax2" class="srart-i1 wow animate__animated animate__fadeInUp" />
                <span className="start-lf">Web<br /> developer</span>
                <img src={img56} class="srart-i4" />
            </div>
            <div className="left-side">
                <span className='first-m' style={{display: "none"}}>Wellfine/</span>
                <span className='text-b span-t'>you definitely should visit my blog</span>
                <Link to="/blog/"><span className='text-btn animate__animated animate__infinite animate__headShake'>Visit</span></Link>
                <img src={img} />
                <img src={img1}  className='img-f'/>
                <img src={img2}  className='img-b'/>
                <span className='text-f span-t'>I am always glad to have guests on my blog</span>
            </div>
            <div className='right-text'>
            Websites are not just code, they are stories that captivate and inspire.
            </div>
        </>
}
export default FirstPage;
