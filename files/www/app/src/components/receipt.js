import React from 'react'

class Receipt extends React.Component {
    constructor(props) {
        super(props);
		
		this.state = {
		}
	}

    render() {
        if (this.props.receiptList.length === 0) {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col mt-2 mb-2">
                            <h2 className="display-4">To see receipt calculate one!</h2>
                        </div>
                    </div>
                </div>
            );
        }

        return (
			<div className="card">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col mt-2 mb-2">
                            <h2 className="display-4">Receipt</h2>
                            <hr/>
                            {this.props.receiptList}
                            <hr/>
                            <div className="d-flex justify-content-between align-items-center">
                                Sales Taxes
                                <span>{this.props.receiptTaxes}</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <b>Total</b>
                                <span>{this.props.receiptTotal}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Receipt;