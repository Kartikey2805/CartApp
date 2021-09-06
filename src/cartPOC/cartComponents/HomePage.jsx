import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function HomePage(props) {
    let { products } = props;
    return (
        <div style={{ display: "flex" }}>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <img src={product.image} style={{ height: "20vw" }} />
                        <h2>{product.title}</h2>
                        <div>{product.description}</div>
                        <h3>{product.price}</h3>
                        <button onClick={() => {
                            if(product.title == "Smartphone"){
                                props.addMobile();
                            }else if(product.title == "Bluetooth Speaker"){
                                props.addSpeaker();
                            }else{
                                props.addBook();
                            }
                        }}>Add to Cart</button>
                        <span>    </span>
                        <button>
                            <Link
                                style={{ textDecoration: "none", color: "black" }}
                                to={{
                                    pathname: '/product',
                                    state: {
                                        image: product.image,
                                        title: product.title,
                                        desc: product.description,
                                        price: product.price
                                    }
                                }}
                            >View Item
                            </Link>
                        </button>
                    </div>
                )
            })}
        </div >
    )
}

const mapStateToProps = store => {
    return store;
}

const mapDispatchtoProps = dispatch => {
    return {
        addMobile: () => {
            return dispatch({ type: "add_mobile" });
        },
        addSpeaker: () => {
            return dispatch({ type: "add_speaker" });
        },
        addBook: () => {
            return dispatch({ type: "add_book" });
        },
    }
}

const HigherOrderComponent = connect(mapStateToProps, mapDispatchtoProps)(HomePage);

export default HigherOrderComponent;
