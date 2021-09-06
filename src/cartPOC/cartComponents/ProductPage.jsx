import React from 'react';
import { connect } from 'react-redux';

function ProductPage(props) {
    console.log(props.location.state.desc);
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100vh"
        }}>
            <div>
                <img src={props.location.state.image} style={{ width: "48vh", }}></img>
            </div>
            <div style={{ width: "60vh", textAlign: "initial" }}>
                <h2 style={{ textAlign: "center" }}>{props.location.state.title}</h2>
                <h5>MRP :
                    <span style={{ color: "red" }}>
                        ₹{props.location.state.price}
                    </span>
                </h5>
                <h5>Description</h5>
                <p>{props.location.state.desc}</p>
                <button onClick={() => {
                    if (props.location.state.title == "Smartphone") {
                        props.addMobile();
                    } else if (props.location.state.title == "Bluetooth Speaker") {
                        props.addSpeaker();
                    } else {
                        props.addBook();
                    }
                }}>Add to Cart</button>

            </div>
        </div>
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

const HigherOrderComponent = connect(mapStateToProps, mapDispatchtoProps)(ProductPage);

export default HigherOrderComponent;

