import React, { Component } from 'react'
import '../../css/SpringSummer.css';
import { images } from './imageImports';



export class SpringSummer extends Component {
    static defaultProps = {
        SpringSummerImage: images.SpringSummerImage,
        Type :"WOMEN",
        Summerh2: "Spring Summer Collection",
        SummerP: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci. Aliquam venenatis dui lectus, eu convallis turpis convallis et. Pellentesque",
        button : "See Whole Collection"
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='Summer'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='left'>
                                <img src={this.props.SpringSummerImage}   className='SpringSummerImage' alt="SpringSummerImage" />
                                </div>
                            </div>
                            <div className='col-6 d-flex justify-content-center align-items-center rigt'>
                                <div className='right'>
                                <h6>{this.props.Type}</h6>
                                <h2>{this.props.Summerh2}</h2>
                                <p>{this.props.SummerP}</p>
                                <a href="/" className='Collections'>
                                 <span>{this.props.button}</span>
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

export default SpringSummer