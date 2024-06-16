import React, { Component } from 'react';
import img  from './../../IMG/22.png';
import img1 from './../../IMG/23.png';

export default class Price extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
 
    l1 = [" ", " fp1", " fp2"];

    componentDidMount() {
        
    }

    render() {
        
        return (
            <div className="whyme-b" id="Whyme">
                <span className="whyme">Why me?</span>
                <span className="because handwrite"> Because... </span>

                <div className="w-b">
                    <div className="w-h">Free consultation</div>
                    <div className="w-l">I can help you find the purpose of your website</div>
                </div>
                <div className="w-b">
                    <div className="w-h">Page-by-page reconciliation</div>
                    <div className="w-l">I am interested in getting a result that would satisfy you 100%, so you will be informed every step of the way</div>
                </div>
                <div className="w-b">
                    <div className="w-h">Accurately determine the timing and price of the work</div>
                    <div className="w-l"> All moments are negotiated in advance, I will work in strict accordance with the timing and conditions </div>
                </div>
                <div className="w-b">
                    <div className="w-h">Always in touch</div>
                    <div className="w-l">If i start work with you, i will available all time</div>
                </div>
            </div>
        )
    }
} 