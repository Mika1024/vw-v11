import React, { Component } from 'react';
import img from "./../../IMG/24.png";
import $ from 'jquery';

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: 0
        }
    }



    render() {

        return (
            <div className="con-faq">
                <div className="plan-f bh1">Frequently Asked Questions</div>
                <span className="because1 handwrite "> Have you any questions?</span>
                <div className="containerbi">
                <div class="faq">
                    <ul class="faq-questions">
                        <li>
                                <span class="faq-question" onClick={() => (this.state.open == 1 ? this.setState({ open: 0 }) : this.setState({ open: 1 }))}>What does the guarantee cover?</span>
                                <p class={this.state.open === 1 ? "faq-answer opened" : "faq-answer"} >Company FAQ pages about billing and payment processing are also some issues that concern customers the most. You should submit valid forms of payment information and invoices, handle payment errors, and customize the display of charges on the invoice.</p>
                        </li>
                        <li>
                                <span class="faq-question" onClick={() => (this.state.open == 2 ? this.setState({ open: 0 }) : this.setState({ open: 2 }))}>How might I get in touch with you?</span>
                                <p class={this.state.open == 2 ? "faq-answer opened" : "faq-answer"}>Company FAQ pages about billing and payment processing are also some issues that concern customers the most. You should submit valid forms of payment information and invoices, handle payment errors, and customize the display of charges on the invoice.</p>
      </li>
                            <li>
                                <span class="faq-question" onClick={() => (this.state.open == 3 ? this.setState({ open: 0 }) : this.setState({ open: 3 }))}>How would I realize my subtleties are secure? </span>
                                <p class={this.state.open == 3 ? "faq-answer opened" : "faq-answer"}>Company FAQ pages about billing and payment processing are also some issues that concern customers the most. You should submit valid forms of payment information and invoices, handle payment errors, and customize the display of charges on the invoice.</p>
                            </li>
                            <li>
                                <span class="faq-question" onClick={() => (this.state.open == 4 ? this.setState({ open: 0 }) : this.setState({ open: 4 }))}>Where would I be able to discover a rebate code?</span>
                                <p class={this.state.open == 4 ? "faq-answer opened" : "faq-answer"}>Company FAQ pages about billing and payment processing are also some issues that concern customers the most. You should submit valid forms of payment information and invoices, handle payment errors, and customize the display of charges on the invoice.</p>
                            </li>
    </ul>
                    </div>
                    </div>
            </div>
        )
    }
}