import { timeout } from "q";
import React, { Component } from 'react';
import $ from 'jquery';
import img from "./../../IMG/9.png";
import img1 from "./../../IMG/12.png";
import img2 from "./../../IMG/13.png";
import img3 from './../../IMG/8.png';
import david1 from "./../../IMG/10.png";
import david2 from "./../../IMG/11.png";
import bgdavid from "./../../IMG/14.png";
import aristotel from "./../../IMG/16.png";
import strl from "./../../IMG/15.png";
import ch1 from "./../../IMG/17.png";
import ch2 from "./../../IMG/18.png";
export default class Awards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false,
            phone: false
        }
    }
    componentDidMount() {
        const let1 = (c) => {
            this.setState({ hover: c })
        }
        let g1r = this.state.phone
        $(function () {

            window.addEventListener("scroll", function (event) {
                if (window.pageYOffset > 7.1 * window.screen.height) {
                    let1(true);
                }
                else {
                    let1(false);
                }
            });
        });
        
        (function () {
            if (!g1r) {
                init();
            }
            var g_containerInViewport;
            function init() {
                setStickyContainersSize();
                bindEvents();
            }

            function bindEvents() {
                window.addEventListener("wheel", wheelHandler);
            }

            function setStickyContainersSize() {
                if (!g1r) {
                    document.querySelectorAll('.sticky-container').forEach(function (container) {
                        const stikyContainerHeight = container.querySelector('main').scrollWidth;
                        container.setAttribute('style', 'height: ' + (stikyContainerHeight + window.screen.width) + 'px');
                    });
                }
            }

            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
            }

            function wheelHandler(evt) {

                const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function (container) {
                    return isElementInViewport(container);
                })[0];

                if (!containerInViewPort) {
                    return;
                }

                var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
                var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
                let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

                if (g_canScrollHorizontally) {
                    containerInViewPort.querySelector('main').scrollLeft += evt.deltaY/100;
                }
            }
        })();
        if ("ontouchstart" in document.documentElement) {
            this.setState({ phone: true })
        }
        else {
            this.setState({ phone: false })
        }
            document.querySelectorAll('.phone-b').forEach(function (container) {
                container.setAttribute('style', 'height: 100vh');
            });

    }

    classObj(c) {
 
        if (document.documentElement.clientWidth / document.documentElement.clientHeight <= 1080 / 580) {
            if (this.state.hover) {
                if (c == "ch1") {
                    return "pazl " + c + " ch1e ch1f";
                }
                else {
                    return "pazl " + c + " ch2e  ch2f";
                }
            } else {
                if (c == "ch1") {
                    return "pazl " + c + " ch1e ";
                } else {
                    return "pazl " + c + " ch2e ";
                }
                
            }
        } else {
            if (this.state.hover) {
                if (c == "ch1") {
                    return "pazl " + c + " ch1f" ;
                } else {
                    return "pazl " + c + " ch2f";
                }
            } else {
                return "pazl " + c;
            }
        }
    }


    render() {
        if (!this.state.phone) {
            return (
                <div class="sticky-container">
                    <main >
                        <section>
                            <div className=" sec1">
                                <span className="text-gradient left-pos-text k1">New design!</span>
                                <span className="text-gradient left-pos-text k2 text-bg-gradient">New design!</span>
                                <span className="text-gradient left-pos-text k3 text-bg-gradient">New design!</span>
                                <img src={img} />
                                <img src={img1} class="img-sec" />
                                <span className="codee c1">	&reg;202298549</span>
                            </div>
                            <div className="sec2">
                                <span className="text-h1">Youth design</span>
                                <span className="text-h2 handwrite k4"> design </span>
                                <hr className="hr1" />
                                <span className="sh1">A youthful design, will delight the eye. Watch and enjoy. For the design of your dreams, a conversation piece and a few extra things will be enough.</span>
                                <span className="front-c1"><span className="text-gradient sg1">" </span>Thinking about design is difficult, but not thinking about it is even worse: the consequences can be disastrous <span className="text-gradient sg1">"<br /> Ralph Kaplan</span></span>
                                <img src={img2} class="strelka" />
                            </div>
                        </section>
                        <section>
                            <div class="bg-david">
                                <img src={bgdavid} className="david-bg" />
                                <img src={david1} className="david-face" />
                            </div>
                            <div className="text-pre">
                                <p className="text-bg">Adaptive</p>
                                <p className="text-bg">Adaptive</p>
                                <p className="text-bg">Adaptive</p>
                                <p className="text-bg">Adaptive</p>
                                <p className="text-bg">Adaptive</p>
                                <p>Adaptive</p>
                            </div>
                            <div className="moment">
                                <span className="handwrite hw-2"> What are you waiting for? </span>
                                <span className="args">Next arguments</span>
                            </div>
                            <div className="text-brg">The excellent adaptation of the phone and the ease of use will please users. No one will have any difficulty. These arguments are enough to connect with me. Not convinced? Go ahead.</div>
                            <a href="#contact" class="main-btn s-s">Order the site</a>
                            <div className="text-pre bf1">
                                <p className="text-bg">Easy-to-use</p>
                                <p className="text-bg">Easy-to-use</p>
                                <p className="text-bg">Easy-to-use</p>
                                <p className="text-bg">Easy-to-use</p>
                                <p className="text-bg">Easy-to-use</p>
                                <p>Easy-to-use</p>
                            </div>
                            <div class="bg-david vr3">
                                <img src={bgdavid} className="david-bg gr3" />
                                <img src={david2} className="david-face br3" />
                            </div>
                        </section>
                        <section>
                            <svg preserveAspectRatio="xMidYMid meet" data-bbox="10 10 40 40" xmlns="http://www.w3.org/2000/svg" viewBox="10 10 40 40" height="60.1vh" width="60.1vh" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--5asihn-u3co07">
                                <title id="svgcid--5asihn-u3co07"></title>
                                <g>
                                    <path fill="#E5DEDD" d="M29.308 10.007c-2.999.161-5.488.78-7.988 1.986a19.955 19.955 0 0 0-7.97 6.931 20.25 20.25 0 0 0-2.649 5.828A19.784 19.784 0 0 0 10 29.996c-.007 3.879 1.12 7.658 3.263 10.952 4.137 6.355 11.658 9.845 19.18 8.899a20.131 20.131 0 0 0 9.766-4.01c.95-.729 2.345-2.066 3.09-2.96a20.073 20.073 0 0 0 4.665-11.715c.243-3.866-.75-7.954-2.752-11.333a20.022 20.022 0 0 0-15.414-9.742c-.64-.06-2.028-.105-2.49-.08Zm2.994 1.34c5.688.716 10.647 3.896 13.696 8.783.38.609 1.049 1.912 1.35 2.633 1.697 4.044 1.904 8.798.565 12.926-.785 2.42-1.868 4.395-3.488 6.364-.456.554-1.76 1.867-2.306 2.321-2.644 2.2-5.697 3.61-9.022 4.166-1.118.187-1.788.238-3.106.238-1.319 0-1.995-.052-3.087-.235a18.782 18.782 0 0 1-9.01-4.155 18.86 18.86 0 0 1-6.348-10.775c-.393-2.015-.44-4.458-.125-6.51a18.765 18.765 0 0 1 5.226-10.33 17.288 17.288 0 0 1 1.99-1.748c2.694-2.041 5.808-3.292 9.203-3.697 1.224-.146 3.214-.138 4.462.02Zm-8.36 5.564c-.683.323-3.147 2.79-4.681 4.686-.206.254-.389.462-.406.462-.058 0-1.274-1.143-1.649-1.549-.375-.407-.553-.52-.81-.52-.506 0-.918.43-.864.901.044.397.336.783 1.583 2.099.318.335.577.626.577.646 0 .02-.11.197-.246.395-.646.942-1.265 2.074-1.602 2.935a18.83 18.83 0 0 0-.624 2.006c-.158.682-.06 1.09.314 1.321.274.17.529.185.806.05.26-.128.398-.312.485-.65.31-1.216 1.09-2.875 2.027-4.308.191-.292.358-.532.371-.532.014 0 .303.187.643.415 1.29.867 2.43 1.476 3.694 1.975.32.126.597.242.613.258.017.015.066.28.109.588a79.87 79.87 0 0 0 .961 5.384c.272 1.265.332 1.524.527 2.303.538 2.15 1.027 3.733 1.709 5.533.125.332.314.847.42 1.146.105.298.25.687.322.864.072.177.199.511.282.743.195.54.563 1.444.742 1.82.314.663.803 1.276 1.157 1.453a.989.989 0 0 0 1.342-.477c.123-.265.12-.412-.022-.98a15.152 15.152 0 0 1-.333-2.037c-.067-.678-.067-4.21 0-5.285.221-3.515.476-5.508 1.055-8.238.136-.645.4-1.693.437-1.735.013-.014.193-.047.4-.071 1.078-.13 3.36-.859 4.913-1.57.387-.178.608-.26.617-.229l.202.792c.104.409.25.942.322 1.185.143.475.364 1.294.722 2.672.24.924.32 1.097.584 1.27a.951.951 0 0 0 1.473-.699c.016-.15-.049-.457-.326-1.535a71.88 71.88 0 0 0-.502-1.869c-.348-1.172-.743-2.744-.717-2.852.007-.027.23-.213.494-.414.266-.2.865-.705 1.332-1.121.468-.416 1.037-.92 1.266-1.12.459-.401.611-.625.68-.995.083-.45-.115-.864-.504-1.054-.19-.093-.26-.106-.497-.093-.343.02-.552.144-.746.447-.074.115-.295.345-.49.511a57.61 57.61 0 0 0-.96.844c-.816.732-1.09.965-1.133.965-.02 0-.143-.266-.271-.592a26.96 26.96 0 0 0-1.91-3.85c-.171-.286-.353-.61-.403-.716a.923.923 0 0 0-.576-.472c-.315-.085-.66.053-.9.359-.084.107-.277.338-.428.512-.351.404-.979 1.24-1.34 1.785-.94 1.414-1.94 3.535-2.582 5.475-.093.282-.182.52-.197.529-.042.026-2.61-.087-3.142-.138a11.227 11.227 0 0 1-.944-.141c-.455-.092-1.335-.315-1.367-.347-.03-.03-.303-2.584-.422-3.931-.189-2.146-.204-2.4-.216-3.517-.012-1.199-.03-1.278-.336-1.547a.918.918 0 0 0-1.035-.145Zm-.382 3.801c0 .974.164 3.136.324 4.277.022.152.03.286.02.297-.047.047-1.323-.58-1.951-.957-.398-.239-1.465-.935-1.544-1.007-.044-.04.045-.161.668-.909.802-.963 2.353-2.624 2.45-2.624.018 0 .033.415.033.923Zm13.06.031c.052.105.235.507.406.894.17.387.44.99.597 1.34.238.53.556 1.343.663 1.697.022.074-.04.115-.568.37-.699.337-1.158.523-2.221.9-.928.33-1.97.615-1.97.54 0-.174.608-1.666 1.076-2.642.444-.925 1.809-3.287 1.9-3.29.013 0 .065.086.117.191Zm-9.928 7.487c.746.178 1.643.265 3.55.343l.632.025-.024.107-.137.568c-.215.876-.532 2.535-.7 3.657a55.858 55.858 0 0 0-.546 5.888c-.024.552-.056 1.24-.072 1.527l-.028.522-.174-.442c-.239-.606-.882-2.576-1.128-3.456-.614-2.196-1.255-5.181-1.69-7.87-.136-.843-.144-.951-.072-.951.028 0 .203.037.39.082Z" clip-rule="evenodd" fill-rule="evenodd" data-color="1"></path>
                                </g>
                            </svg>
                            <img class="aristotel" src={aristotel} />
                            <span className="text-aristotel"> AVA BITHOLD team</span>
                            <span className="text-aristotel f1 text-bg"> AVA BITHOLD team</span>
                            <span className="text-aristotel f2 text-bg"> AVA BITHOLD team</span>
                            <span className="text-aristotel f3 text-bg"> AVA BITHOLD team</span>
                            <span className="text-aristotel f4 text-bg"> AVA BITHOLD team</span>
                            <span className="text-aris">AVA BITHOLD the One-first Web3 Music-Fi marketplace. The main web developer in the company. Our beats staking system investing in a music that anyone can hear.</span>
                            <a className="aris-button" href="https://avabithold.com">AVA Bithold <i class="fa-sharp fa-solid fa-share-from-square"></i></a>
                            <img src={strl} className="strl" />
                        </section>
                        <section className="sec4">
                            <span className={this.state.hover ? "spac-attr opas1" : "spac-attr"}>Pay special attention</span>
                            <span className={this.state.hover ? "spac-attr opas1 text-bg n1 t1" : "spac-attr text-bg t1"}>Pay special attention</span>
                            <span className={this.state.hover ? " spac-attr opas1 text-bg n2 t1" : "spac-attr text-bg t1"}>Pay special attention</span>
                            <span className={this.state.hover ? "spac-attr opas1 text-bg n3 t1" : "spac-attr text-bg t1"}>Pay special attention</span>

                            <div className="pazl-bl">
                                <img class={this.classObj("ch1")} src={ch1} />
                                <img class={this.classObj("ch2")} src={ch2} />
                            </div>

                            <span className={this.state.hover ? "scrl sclt-p" : "scrl"}>Scroll <br />&nbsp; &nbsp;&nbsp; &nbsp; Down</span>
                            <img src={img3} className={this.state.hover ? "codesh opas1" : "codesh"} />
                            <img src={img2} class={this.state.hover ? "strelka2 opas1" : "strelka2"} />
                        </section>
                    </main>
                </div>
            );
        }
        else {
            return (
                <div className="phone-b" style={{ height: "100vh" }}> 
                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="10 10 40 40" xmlns="http://www.w3.org/2000/svg" viewBox="10 10 40 40" height="50.1vw" width="50.1vw" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--5asihn-u3co07">
                        <title id="svgcid--5asihn-u3co07"></title>
                        <g>
                            <path fill="#E5DEDD" d="M29.308 10.007c-2.999.161-5.488.78-7.988 1.986a19.955 19.955 0 0 0-7.97 6.931 20.25 20.25 0 0 0-2.649 5.828A19.784 19.784 0 0 0 10 29.996c-.007 3.879 1.12 7.658 3.263 10.952 4.137 6.355 11.658 9.845 19.18 8.899a20.131 20.131 0 0 0 9.766-4.01c.95-.729 2.345-2.066 3.09-2.96a20.073 20.073 0 0 0 4.665-11.715c.243-3.866-.75-7.954-2.752-11.333a20.022 20.022 0 0 0-15.414-9.742c-.64-.06-2.028-.105-2.49-.08Zm2.994 1.34c5.688.716 10.647 3.896 13.696 8.783.38.609 1.049 1.912 1.35 2.633 1.697 4.044 1.904 8.798.565 12.926-.785 2.42-1.868 4.395-3.488 6.364-.456.554-1.76 1.867-2.306 2.321-2.644 2.2-5.697 3.61-9.022 4.166-1.118.187-1.788.238-3.106.238-1.319 0-1.995-.052-3.087-.235a18.782 18.782 0 0 1-9.01-4.155 18.86 18.86 0 0 1-6.348-10.775c-.393-2.015-.44-4.458-.125-6.51a18.765 18.765 0 0 1 5.226-10.33 17.288 17.288 0 0 1 1.99-1.748c2.694-2.041 5.808-3.292 9.203-3.697 1.224-.146 3.214-.138 4.462.02Zm-8.36 5.564c-.683.323-3.147 2.79-4.681 4.686-.206.254-.389.462-.406.462-.058 0-1.274-1.143-1.649-1.549-.375-.407-.553-.52-.81-.52-.506 0-.918.43-.864.901.044.397.336.783 1.583 2.099.318.335.577.626.577.646 0 .02-.11.197-.246.395-.646.942-1.265 2.074-1.602 2.935a18.83 18.83 0 0 0-.624 2.006c-.158.682-.06 1.09.314 1.321.274.17.529.185.806.05.26-.128.398-.312.485-.65.31-1.216 1.09-2.875 2.027-4.308.191-.292.358-.532.371-.532.014 0 .303.187.643.415 1.29.867 2.43 1.476 3.694 1.975.32.126.597.242.613.258.017.015.066.28.109.588a79.87 79.87 0 0 0 .961 5.384c.272 1.265.332 1.524.527 2.303.538 2.15 1.027 3.733 1.709 5.533.125.332.314.847.42 1.146.105.298.25.687.322.864.072.177.199.511.282.743.195.54.563 1.444.742 1.82.314.663.803 1.276 1.157 1.453a.989.989 0 0 0 1.342-.477c.123-.265.12-.412-.022-.98a15.152 15.152 0 0 1-.333-2.037c-.067-.678-.067-4.21 0-5.285.221-3.515.476-5.508 1.055-8.238.136-.645.4-1.693.437-1.735.013-.014.193-.047.4-.071 1.078-.13 3.36-.859 4.913-1.57.387-.178.608-.26.617-.229l.202.792c.104.409.25.942.322 1.185.143.475.364 1.294.722 2.672.24.924.32 1.097.584 1.27a.951.951 0 0 0 1.473-.699c.016-.15-.049-.457-.326-1.535a71.88 71.88 0 0 0-.502-1.869c-.348-1.172-.743-2.744-.717-2.852.007-.027.23-.213.494-.414.266-.2.865-.705 1.332-1.121.468-.416 1.037-.92 1.266-1.12.459-.401.611-.625.68-.995.083-.45-.115-.864-.504-1.054-.19-.093-.26-.106-.497-.093-.343.02-.552.144-.746.447-.074.115-.295.345-.49.511a57.61 57.61 0 0 0-.96.844c-.816.732-1.09.965-1.133.965-.02 0-.143-.266-.271-.592a26.96 26.96 0 0 0-1.91-3.85c-.171-.286-.353-.61-.403-.716a.923.923 0 0 0-.576-.472c-.315-.085-.66.053-.9.359-.084.107-.277.338-.428.512-.351.404-.979 1.24-1.34 1.785-.94 1.414-1.94 3.535-2.582 5.475-.093.282-.182.52-.197.529-.042.026-2.61-.087-3.142-.138a11.227 11.227 0 0 1-.944-.141c-.455-.092-1.335-.315-1.367-.347-.03-.03-.303-2.584-.422-3.931-.189-2.146-.204-2.4-.216-3.517-.012-1.199-.03-1.278-.336-1.547a.918.918 0 0 0-1.035-.145Zm-.382 3.801c0 .974.164 3.136.324 4.277.022.152.03.286.02.297-.047.047-1.323-.58-1.951-.957-.398-.239-1.465-.935-1.544-1.007-.044-.04.045-.161.668-.909.802-.963 2.353-2.624 2.45-2.624.018 0 .033.415.033.923Zm13.06.031c.052.105.235.507.406.894.17.387.44.99.597 1.34.238.53.556 1.343.663 1.697.022.074-.04.115-.568.37-.699.337-1.158.523-2.221.9-.928.33-1.97.615-1.97.54 0-.174.608-1.666 1.076-2.642.444-.925 1.809-3.287 1.9-3.29.013 0 .065.086.117.191Zm-9.928 7.487c.746.178 1.643.265 3.55.343l.632.025-.024.107-.137.568c-.215.876-.532 2.535-.7 3.657a55.858 55.858 0 0 0-.546 5.888c-.024.552-.056 1.24-.072 1.527l-.028.522-.174-.442c-.239-.606-.882-2.576-1.128-3.456-.614-2.196-1.255-5.181-1.69-7.87-.136-.843-.144-.951-.072-.951.028 0 .203.037.39.082Z" clip-rule="evenodd" fill-rule="evenodd" data-color="1"></path>
                        </g>
                    </svg>
                    <img class="aristotel" src={aristotel} />
                    <span className="text-aristotel"> AVA BITHOLD team</span>
                    <span className="text-aristotel f1 text-bg"> AVA BITHOLD team</span>
                    <span className="text-aristotel f2 text-bg"> AVA BITHOLD team</span>
                    <span className="text-aristotel f3 text-bg"> AVA BITHOLD team</span>
                    <span className="text-aristotel f4 text-bg"> AVA BITHOLD team</span>
                    <img src={img} className="plone-b-i" />
                    <span className="text-aris">AVA BITHOLD the One-first Web3 Music-Fi marketplace. The main web developer in the company. Our beats staking system investing in a music that anyone can hear.</span>
                    <a className="aris-button" href="https://avabithold.com">AVA Bithold <i class="fa-sharp fa-solid fa-share-from-square"></i></a>
                    <img src={strl} className="strl" />
                </div>
            )
        }
    }
};
