import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function Cart(props) {



    const useStyles = makeStyles((theme) => ({
        cart: {
            background: "white",
            height: "8vh",
            marginBottom: "0.8rem",
            borderRadius: "0.5rem",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            fontWeight: "bold"
        },
        card: {
            borderRadius: "0.4rem",
            background: "white",
            display: "flex",
            marginLeft: "0.4rem",
            marginBottom: "0.8rem",
            padding: "0.4rem",
        }
    }));

    const classes = useStyles();

    const [code, setCode] = useState('');

    let { cart, products, coupons, mobile, speaker, book, price, discount } = props;

    console.log(price);
    console.log(discount);
    // const[discount,setDiscount] = useState(0);
    // const[price,setPrice] = useState(mobile * mobilePrice + speaker * speakerPrice + book * bookPrice);
    // let price = ();


    return (
        <div style={{ boxSizing: "initial", height: "120%", background: "#cff3ff" }}>
            <div className={classes.cart}>Shooping Cart</div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ width: "70%" }}>
                    {cart.map(product => {
                        return (
                            <div className={classes.card}>
                                <img src={product.image} style={{ margin: "0.4rem", height: "20vw" }} />
                                <div>
                                    <h2 style={{ color: "blue" }}>{product.title}</h2>
                                    <input type="number" style={{ width: "3rem" }} value={
                                        product.title == "Smartphone" ? mobile : product.title == "Bluetooth Speaker" ? speaker : book
                                    }
                                        onChange={(e) => {
                                            let val = e.target.value;

                                            if (product.title == "Smartphone") {
                                                props.addMobile(val);
                                            } else if (product.title == "Bluetooth Speaker") {
                                                props.addSpeaker(val);
                                            } else {
                                                props.addBook(val);
                                            }
                                            // console.log(mobile * mobilePrice + speaker * speakerPrice + book * bookPrice);
                                            // setPrice(mobile * mobilePrice + speaker * speakerPrice + book * bookPrice);

                                        }}></input>
                                    <div>{product.description}</div>
                                    <h4>MRP :
                                        <span style={{ color: "red" }}>
                                            ₹{product.price}
                                        </span>
                                    </h4>
                                    <button onClick={() => {
                                        if (product.title == "Smartphone") {
                                            props.addMobile(Number.MIN_SAFE_INTEGER);
                                        } else if (product.title == "Bluetooth Speaker") {
                                            props.addSpeaker(Number.MIN_SAFE_INTEGER);
                                        } else {
                                            props.addBook(Number.MIN_SAFE_INTEGER);
                                        }
                                    }}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div style={{ background: "white", height: "40vh", width: "25%", borderRadius: "0.5rem" }}>
                    <h4>Cart Summary</h4>
                    <h5>Selected ( {mobile + speaker + book} )items : ₹ {price - price*discount/100}</h5>
                    <div>
                        <TextField
                            id="standard-helperText"
                            label="Coupan Code"
                            style={{ marginRight: "0.5rem" }}
                            onChange={(e) => {
                                setCode(e.target.value);
                            }}
                        />
                        <Button variant="contained" color="primary" style={{ marginTop: "0.7rem" }}
                            onClick={(e) => {
                                let discnt = coupons[`${code}`];
                                console.log(discnt);
                                if (discnt) {
                                    props.addDiscount(discnt['discount']);
                                    // console.log(price * () / 100);
                                    // // setPrice(price - price * (discnt['discount']) / 100);
                                    // // setDiscount(discnt);
                                }else{
                                    props.addDiscount(101);
                                }
                            }}
                        >
                            Apply
                        </Button>
                    </div>
                    <Button variant="contained" color="secondary" style={{ marginTop: "0.7rem" }}
                    >
                        Proceed To Buy
                    </Button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = store => {
    return store;
}

const mapDispatchtoProps = dispatch => {
    return {
        addMobile: (val) => {
            return dispatch({ type: "add_mobile", payload: val });
        },
        addSpeaker: (val) => {
            return dispatch({ type: "add_speaker", payload: val });
        },
        addBook: (val) => {
            return dispatch({ type: "add_book", payload: val });
        },
        addDiscount: (val) => {
            console.log("---");
            console.log(val);
            return dispatch({ type: "add_discount", payload: val });
        }
    }
}

const HigherOrderComponent = connect(mapStateToProps, mapDispatchtoProps)(Cart);

export default HigherOrderComponent;
