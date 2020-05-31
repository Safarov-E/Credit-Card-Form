import React from 'react';
import './card-form.css';

export default class extends React.Component {
    state = {
        cardMonth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        cardYear: [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031],
    }
    cardYear() {
        let arr = [], count = 0;
        for(let i = 2020; i <= 2031; i++) {
            arr[count] = i;
            count++;
        }
        this.setState({cardYear: arr})
    }
    cardMonth() {
        let arr = [], count = 0;
        for(let i = 1; i <= 12; i++) {
            arr[count] = i;
            count++;
        }
        this.setState({cardMonth: arr})
    }
    render() {
        const { cardMonth, cardYear } = this.state;
        return (
            <div className="card-from">
                <form className="card-form__inner">
                    <div className="cart-input_number">
                        <label htmlFor="cardNumber" className="cart-label_number">Card Number</label>
                        <input type="text" id="cardNumber" className="cardNumber" />
                    </div>
                    <div className="cart-input_holders">
                        <label htmlFor="cardHolders" className="cart-label_holders">Card Holders</label>
                        <input type="text" id="cardHolders" className="cardHolders" />
                    </div>
                    <div className="card-form__row">
                        <div className="card-form__group">
                            <label htmlFor="cardMonth" className="cart-label_month">Expiration Date</label>
                            <select id="cardMonth" className="cardMonth">
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
                            <select id="cardYear" className="cardYear">
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
                    <button class="card-form__button">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
