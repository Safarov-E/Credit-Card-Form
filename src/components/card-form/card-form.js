import React from 'react';
import chip from './img/chip.png';
import visa from './img/visa.png';
import './card-form.css';

export default class extends React.Component {
    state = {
        cardMonth: [],
        cardYear: [],
        cardMonthValue: null,
        cardYearValue: null,
        cardName: ''
    }
    componentDidMount() {
        let arr = [], count = 0;
        for(let i = 2020; i <= 2031; i++) {
            arr[count] = i;
            count++;
        }
        this.setState({cardYear: arr})

        let arr1 = [], count1 = 0;
        for(let i = 1; i <= 12; i++) {
            arr1[count1] = i;
            count1++;
        }
        this.setState({cardMonth: arr1})
    }
    handlerSelectMonth = (event) => {
        let valueMonth = event.target.value;
        this.setState({ cardMonthValue: valueMonth })
    }
    handlerSelectYear = (event) => {
        let valueMonth = event.target.value;
        let year = valueMonth.split('').splice(-2, 2).join('');
        this.setState({ cardYearValue: year })
    }
    handlerInputName = (event) => {
        let valueName = event.target.value;
        this.setState({ cardName: valueName })
    }
    render() {
        const { cardMonth, cardYear, cardMonthValue, cardYearValue, cardName } = this.state;
        console.log()
        return (
            <div className="card-from">
                <div className="card-item">
                    <div className="card-item__side">
                        <div className="card-item__logo">
                            <img src={chip} style={{width: '60px', height: '48px'}}/>
                            <img src={visa} style={{width: '85px', height: '45px'}}/>
                        </div>
                        <label htmlFor="cardNumber" className="card-item__numbers">
                            <div className="card-item__number">
                                <div className="card-item__numberItem">#</div>
                                <div className="card-item__numberItem">#</div>
                                <div className="card-item__numberItem">#</div>
                                <div className="card-item__numberItem">#</div>
                            </div>
                            <div className="card-item__number">
                                <div className="card-item__numberItem">#</div>
                                <div className="card-item__numberItem">#</div>
                                <div className="card-item__numberItem">#</div>
                                <div className="card-item__numberItem">#</div>
                            </div>
                            <div className="card-item__number">
                                <div className="card-item__numberItem">#</div>
                                <div className="card-item__numberItem">#</div>
                                <div className="card-item__numberItem">#</div>
                                <div className="card-item__numberItem">#</div>
                            </div>
                            <div className="card-item__number">
                                <div className="card-item__numberItem">#</div>
                                <div className="card-item__numberItem">#</div>
                                <div className="card-item__numberItem">#</div>
                                <div className="card-item__numberItem">#</div>
                            </div>
                        </label>
                        <div className="card-item__content">
                            <label htmlFor="cardName" className="card-item__info">
                                <div className="card-item__holder">Card Holder</div>
                                <div className="card-item__name">{cardName.trim() === '' ? 'Full Name' : cardName}</div>
                            </label>
                            <div className="card-item__date">
                                <label htmlFor="cardMonth" className="card-item__dateTitle">Expires</label>
                                <div className="cardMonth_group">
                                    <label htmlFor="cardMonth" className="card-item__dateItem">
                                        <span>{cardMonthValue === null ? 'MM' : cardMonthValue}</span>
                                    </label>
                                    /
                                    <label htmlFor="cardYear" className="card-item__dateItem">
                                        <span>{cardYearValue === null ? 'YY' : cardYearValue}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="card-form__inner">
                    <div className="cart-input_number">
                        <label htmlFor="cardNumber" className="cart-label_number">Card Number</label>
                        <input type="text" id="cardNumber" className="cardNumber" />
                    </div>
                    <div className="cart-input_holders">
                        <label htmlFor="cardName" className="cart-label_holders">Card Holders</label>
                        <input type="text" id="cardName" 
                                className="cardHolders" 
                                onChange={this.handlerInputName}
                                value={cardName}
                        />
                    </div>
                    <div className="card-form__row">
                        <div className="card-form__group">
                            <label htmlFor="cardMonth" className="cart-label_month">Expiration Date</label>
                            <select id="cardMonth" className="cardMonth" onChange={this.handlerSelectMonth}>
                                <option disabled="disabled" selected>Month</option>
                                {
                                    cardMonth.map((item) => {
                                        return <option 
                                            value={item < 10 ? '0' + item : item} 
                                            key={item}>{item < 10 ? '0' + item : item}
                                        </option>
                                    }) 
                                }
                            </select>
                            <select id="cardYear" className="cardYear" onChange={this.handlerSelectYear}>
                                <option disabled="disabled" selected>Year</option>
                                {
                                    cardYear.map((item) => {
                                        return <option 
                                            value={item} 
                                            key={item}>{item}
                                        </option>
                                    }) 
                                }
                            </select>
                        
                            <div className="card-input_cvv">
                                <label htmlFor="cardCvv" className="card-label__cvv">CVV</label>
                                <input type="text" className="card-cod__cvv" id="cardCvv" />
                            </div>
                        </div>
                    </div>
                    <button className="card-form__button">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
