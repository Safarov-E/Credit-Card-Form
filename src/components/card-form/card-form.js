import React from 'react';
import chip from './img/chip.png';
import visa from './img/visa.png';
import './card-form.css';

export default class extends React.PureComponent  {
    constructor(props){
        super(props)
        this.state = {
            cardMonth: [],
            cardYear: [],
            cardMonthValue: null,
            cardYearValue: null,
            cardName: '',
            cardNumber: '',
            cardNumber1: [],
            visible: true,
            cardCvv: '',
            showStore: false,
            showStore1: true
        }
        this.myRef = React.createRef();
        this.myRef_1 = React.createRef();
        this.myRef_2 = React.createRef();
        this.myRef_3 = React.createRef();
        this.myRef_4 = React.createRef();
        this.myRef_5 = React.createRef();
    }
    componentDidMount() {
        function arr(key, key_1) {
            let arr = [], count = 0;
            for(let i = key; i <= key_1; i++) {
                arr[count] = i;
                count++;
            }
            return arr;
        }
        this.setState({cardYear: arr(2020, 2031)})
        this.setState({cardMonth: arr(1, 12)})

        let arr1 = [];
        for(let i = 0; i < 16; i++) {
            arr1[i] = '#';
        }
        this.setState({cardNumber1: arr1})
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
        if(valueName === '') {
            this.setState({ cardName: '' })
        } else {
            this.setState({ cardName: valueName })
        }
    }
    handlerInputNumber = (event) => {
        let valueNumber = event.target.value;
        if(Number(valueNumber) && valueNumber.length <= 16) {
            this.setState({cardNumber: valueNumber})
        } else if(valueNumber.length <= 1) {
            this.setState({cardNumber: ''})
        }
    }
    handlerCardCvv = (event) => {
        let valueCvv = event.target.value;
        if(Number(valueCvv) && valueCvv.length <= 3) {
            this.setState({cardCvv: valueCvv})
        } else if(valueCvv.length <= 1) {
            this.setState({cardCvv: ''})
        }
    }
    handlerCvv = () => {
        if(this.state.showStore1) {
            let rotateY = 0;
                let inter = setInterval(() => {
                    this.myRef_5.current.style.transform = 'perspective(1000px) rotateY('+ rotateY +'deg) rotateX(0deg) rotateZ(0deg)';
                    rotateY++;
                    if(rotateY === 90) {
                        this.setState({showStore: true})
                    }
                    else if(rotateY === 181) {
                        clearInterval(inter);
                    }
            }, 5);
            this.setState({showStore1: false})
        } else {
            return false
        }
    }
    cardInputNumber = () => {
        if(!this.state.showStore1) {
            let rotateY = 180;
            let inter = setInterval(() => {
                this.myRef_5.current.style.transform = 'perspective(1000px) rotateY('+ rotateY +'deg) rotateX(0deg) rotateZ(0deg)';
                rotateY--;
                if(rotateY === 90) {
                    this.setState({showStore: false})
                }
                else if(rotateY === 0) {
                    clearInterval(inter);
                }
            }, 5);
            this.setState({showStore1: true})
        } else {
            return false
        }
    }
    cardNumberItem = () => {
        this.myRef.current.classList.add('active');
        this.myRef_1.current.classList.remove('active');
        this.myRef_2.current.classList.remove('active');
    }
    cardHolderItem = () => {
        this.myRef_1.current.classList.add('active');
        this.myRef.current.classList.remove('active');
        this.myRef_2.current.classList.remove('active');
    }
    cardExpiresItem = () => {
        this.myRef_2.current.classList.add('active');
        this.myRef_1.current.classList.remove('active');
        this.myRef.current.classList.remove('active');
    }
    render() {
        const { cardMonth, cardYear, 
                cardMonthValue, cardYearValue, 
                cardName, cardNumber, 
                cardNumber1, cardCvv,
                showStore, showStore1 } = this.state;
        return (
            <div className="card-from">
                <div className="card-item" ref={this.myRef_5}>
                    <div className="card-item__side">
                        <div className="card-item__logo">
                            <img src={chip} style={{width: '60px', height: '48px'}}/>
                            <img src={visa} style={{width: '85px', height: '45px'}}/>
                        </div>
                        <label htmlFor="cardNumber" className="card-item__numbers">
                            <div className="card-item__number" ref={this.myRef} onClick={this.cardNumberItem}>
                                {   cardNumber === '' ?
                                        cardNumber1.map((item, i) => {
                                            return(
                                                <div className="card-item__numberItem" key={i}>{item}</div>
                                            )
                                        })
                                    :
                                        cardNumber.split('').map((item, i) => {
                                            return(
                                                <div className="card-item__numberItem" key={i}>{item}</div>
                                            )
                                        })
                                }
                            </div>
                        </label>
                        <div className="card-item__content">
                            <label htmlFor="cardName" className="card-item__info" ref={this.myRef_1} onClick={this.cardHolderItem}>
                                <div className="card-item__holder">Card Holder</div>
                                <div className="card-item__name">{cardName.trim() === '' ? 'Full Name' : cardName}</div>
                            </label>
                            <div className="card-item__date" ref={this.myRef_2} onClick={this.cardExpiresItem}>
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
                    <div style={{display: showStore ? 'block' : 'none' }} className="card-item__side_1 back">
                        <div className="card-item__band"></div>
                        <div className="card-item__cvv">
                            <div className="card-item__cvvTitle">CVV</div>
                            <div className="card-item__cvvBand">{cardCvv}</div>
                            <div className="card-item__type">
                                <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" className="card-item__typeImg"/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <form className="card-form__inner">
                    <div className="cart-input_number">
                        <label htmlFor="cardNumber" className="cart-label_number">Card Number</label>
                        <input type="text" id="cardNumber" className="cardNumber" onChange={this.handlerInputNumber}
                        value={cardNumber} onClick={this.cardInputNumber} onClick={this.cardNumberItem}/>
                    </div>
                    <div className="cart-input_holders">
                        <label htmlFor="cardName" className="cart-label_holders">Card Holders</label>
                        <input type="text" id="cardName" value={cardName} className="cardHolders" 
                        onChange={this.handlerInputName} onClick={this.cardInputNumber} onClick={this.cardHolderItem}/>
                    </div>
                    <div className="card-form__row">
                        <div className="card-form__group">
                            <label htmlFor="cardMonth" className="cart-label_month">Expiration Date</label>
                            <select id="cardMonth" className="cardMonth" onChange={this.handlerSelectMonth} 
                            onClick={this.cardInputNumber} onClick={this.cardExpiresItem}>
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
                            <select id="cardYear" className="cardYear" onChange={this.handlerSelectYear} 
                            onClick={this.cardInputNumber} onClick={this.cardExpiresItem}>
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
                                <input type="text" className="card-cod__cvv" 
                                        id="cardCvv" value={cardCvv} 
                                        onChange={this.handlerCardCvv}
                                        onClick={this.handlerCvv}/>
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
