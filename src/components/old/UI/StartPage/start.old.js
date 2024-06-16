import { setForm } from './../../BLL/ActonCreators.js';
import img from './../../IMG/4.png';
import img1 from './../../IMG/5.png';
import img3 from './../../IMG/7.png';
import img2 from './../../IMG/8.png';

function StartPage(props) {
    var
        now = new Date(),
        hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds(),
        d = now.getDate(),
        m = now.getMonth(),
        message = '';

     if (hour <= 12) {
        message = 'Good morning';
    } else if (hour <= 18) {
        message = 'Good afternoon';
    } else {
        message = 'Good evening';
    }
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]
    const gr1 = ['r1', 'r3', 'r2', 'r5', 'r8', 'r6', 'r7', 'r1', 'r3', 'r1', 'r7', 'r4', 'r1', 'r3', 'r2', 'r6', 'r1', 'r8', 'r7', 'r1', 'r3', 'r1', 'r8', 'r4', 'r1', 'r3', 'r1', 'r8'];
    const gl1 = ['l1', 'l9', 'l7', 'l2', 'l1', 'l9', 'l7', 'l2', 'l2', 'l4', 'l5', 'l8', 'l4', 'l7', 'l4',
        'l5', 'l8', 'l4', 'l7', 'l2', 'l4', 'l8', 'l3', 'l6', 'l1', 'l9', 'l7', 'l1', 'l5', 'l8', 'l3', 'l6', 'l2',
        'l9', 'l7', 'l2', 'l2', 'l4', 'l7', 'l1', 'l4', 'l5', 'l8', 'l3', 'l6', 'l1', 'l2', 'l4', 'l6', 'l3',
        'l1', 'l2', 'l2', 'l4', 'l7', 'l2', 'l4', 'l7', 'l1', 'l4', 'l5', 'l8', 'l3', 'l6', 'l7', 'l2', 'l4',
        'l7', 'l1', 'l4', 'l5', 'l1', 'l3', 'l4'];
    const final = [];
    const final1 = [];
    for (let gr of gr1) {
        final.push(<div className={"round " +  gr }></div>);
    }
    for (let gl of gl1) {
        final1.push(<div className={"lines " + gl}></div>);
    }
    return (
        <div className="left">
            <div className="textStart ">Wellfine/</div>
            <div className="textStart text-bg g1">Wellfine/</div>
            <span className="codee">	&reg;202293450</span>
            <div className="box-round"><div className="box-station gradient">{final}<div className="opas"></div>
            </div></div>
            <div className="box-lines"><div className="box-stationi gradient"> {final1} </div></div>
            <span className="main h2"> Mission to show the <b>galaxy</b></span>
            <div className="conor">
                <div className="textWorld">World</div>
                <div className="textWorld text-bg g2">World</div>
                <img src={img} />
                <div className="textToday h2"><span className="big h1 ">{d} of {monthNames[m]} </span><br />already, but we<br /> are not working <br />together yet</div>
                <img src={img2} class="texture-2" />
                <a href="#contact" class="main-btn m-s">Order the site</a>
            </div>
            <div className="textDay"><span>{message}</span></div>
            <div className="textDay text-bg g3"><span>{message}</span></div>
        <a href="#thanks" id="section10 wow fadeInUp" data-wow-duration="1.5s" className="parallax" data-speed="80"><span></span></a>

        </div>

        )
}
export default StartPage;