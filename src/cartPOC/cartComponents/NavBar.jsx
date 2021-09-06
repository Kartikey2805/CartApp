import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

console.log(4);
function NavBar(props) {

    let cartCount = props.cartItems;

    return (
        <div style={{
            display: "flex", justifyContent: "space-between", height: "3rem",
            backgroundColor: "#8899eb", color: "black", fontSize: "150%",fontFamily: "cursive"
        }}>
            <div>
                <Link to='/' style={{ textDecoration: "none", color: "black" }}>
                    Redux shopping
                </Link>
            </div>

            <Link to='/cart'>
                <div style={{ height: "1rem", marginRight: "1rem" }}>
                    <div style={{ marginLeft: "0.6rem", marginBottom: "2rem", fontSize: "1rem", position: "absolute" }}>{cartCount}</div>
                    <i style={{ marginTop: "1rem" }} className="fas fa-shopping-cart"></i>
                </div>
            </Link>

        </div>
    )
}

const mapStateToProps = store => {
    return store;
}


export default connect(mapStateToProps)(NavBar);
