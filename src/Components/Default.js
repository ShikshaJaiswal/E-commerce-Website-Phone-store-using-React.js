import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title pt-5">
                        <h1 className="display-3">404 Error!</h1>
                        <h4> Page Not Found!</h4>
                        <h6>The requested URL
                            <span className="text-danger">
                                {this.props.location.pathname}
                            </span>{" "}
                            was not found!
                        </h6>
                    </div>
                </div>
                
            </div>
        )
    }
}
