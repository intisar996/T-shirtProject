import React, { Component } from 'react'
import '../../css/NEWCOLLECTION.css';



export class NEWCOLLECTION extends Component {
    static defaultProps = {
        NEWCOLLECTION: "NEW COLLECTION",
        h2: "Be different in your own way!",
        h4: "Find your unique style.",
        Shop: "Shop Collection",
    }
    render() {
        return (
            <div>
                <div className='container mainNew'>
                    <div className='NEWCOLLECTION'>
                        <div className='overlay'></div>
                        <div className='TextNewCollections'>
                            <div className='row d-flex flex-column TextNewCollections'>
                                <div className='col'>
                                    <h6>{this.props.NEWCOLLECTION}</h6>
                                </div>
                                <div className='col'>
                                    <h2>{this.props.h2}</h2>
                                </div>
                                <div className='col'>
                                    <h4>{this.props.h4}</h4>
                                </div>
                                <div className='col'>
                                    <a href="/" className='ShopCollections'>
                                        <span>{this.props.Shop}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default NEWCOLLECTION