import React from 'react'
import Receipt from '../components/receipt.js'
import DocumentMeta from 'react-document-meta';

import StoreContext from '../contexts/store-context.js'

class Home extends React.Component {
    static contextType = StoreContext;

    constructor(props) {
        super(props);
		
		this.state = {
			basket: []
		}
	}

	calculateClick(e, input) {
        this.setState({basket: this.context.fillBasket(input)});
	}

	roundTax(value) {
		return Number((Math.ceil(value*20)/20).toFixed(2));
	}

    render() {
		const meta = {
			title: "Sales taxes problem",
			description: "This problem requires some kind of input. You are free to implement any mechanism for feeding input into your solution (for example, using hard coded data within a unit test). You should provide sufficient evidence that your solution is complete by, as a minimum, indicating that it works correctly against the supplied test data.",
			meta: {
			  	charset: 'utf-8'
			}
		};
		
		let receiptList = [];
		let receiptTaxes = 0, receiptTotal = 0;

		for (let i = 0; i < this.state.basket.length; i++) {
			let storeItem = this.context.store.find(item => {
				return item.id === this.state.basket[i].id;
			});

			let tax = 0;
			if (storeItem.basicTax) {
				tax += this.roundTax(storeItem.price*0.1);
			}
			if (storeItem.imported) {
				tax += this.roundTax(storeItem.price*0.05);
			}

			let totalPrice = (storeItem.price + tax) * this.state.basket[i].quantity;

			receiptTaxes += tax * this.state.basket[i].quantity;
			receiptTotal += totalPrice;

			receiptList.push(
				<div key={"receiptItem-" + i} className="d-flex justify-content-between align-items-center">
					{this.state.basket[i].quantity + " x " + storeItem.name}
					<span>{totalPrice.toFixed(2)}</span>
				</div>
			);
		}

		receiptTaxes = receiptTaxes.toFixed(2);
		receiptTotal = receiptTotal.toFixed(2);

        return (
			<div className="container">
				<DocumentMeta {...meta} />

				<div className="row">
					<div className="col-md-7 mt-4">
						<div className="card">
							<div className="container-fluid">
								<div className="row">
									<div className="col mt-2 mb-2">
										<h2 className="display-4">Last purchases</h2>
										<hr/>
										<div className="list-group-item mt-2">
											<div className="d-flex w-100 justify-content-between">
												<h5 className="mb-1">Input 1:</h5>
												<button className="btn btn-info btn-sm" onClick={(e) => this.calculateClick(e, 1)}>Calculate</button>
											</div>
											<small>2 book at 12.49</small><br/>
											<small>1 music CD at 14.99</small><br/>
											<small>1 chocolate bar at 0.85</small>
										</div>
										<br/>
										<div className="list-group-item">
											<div className="d-flex w-100 justify-content-between">
												<h5 className="mb-1">Input 2:</h5>
												<button className="btn btn-info btn-sm" onClick={(e) => this.calculateClick(e, 2)}>Calculate</button>
											</div>
											<small>1 imported box of chocolates at 10.00</small><br/>
											<small>1 imported bottle of perfume at 47.50</small>
										</div>
										<br/>
										<div className="list-group-item">
											<div className="d-flex w-100 justify-content-between">
												<h5 className="mb-1">Input 3:</h5>
												<button className="btn btn-info btn-sm" onClick={(e) => this.calculateClick(e, 3)}>Calculate</button>
											</div>
											<small>1 imported bottle of perfume at 27.99</small><br/>
											<small>1 bottle of perfume at 18.99</small><br/>
											<small>1 packet of headache pills at 9.75</small><br/>
											<small>3 box of imported chocolates at 11.25</small>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-5 mt-4 mb-4">
						<Receipt receiptList={receiptList} receiptTaxes={receiptTaxes} receiptTotal={receiptTotal} />
					</div>
				</div>
			</div>
        )
    }
}

export default Home;