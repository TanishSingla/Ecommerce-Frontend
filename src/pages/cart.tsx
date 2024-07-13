import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItems from "../components/Cart-items";
import { Link } from "react-router-dom";

const cartItems = [

    {
        productId: "asdfjdsf",
        photo: "https://cdn.mos.cms.futurecdn.net/XXzWLdqVL7V6dP4UkUJ6bK-1024-80.jpg.webp",
        name: "Laptop",
        price: "1213",
        quantity: 31,
        stock: 12
    }

];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges - discount;

const Cart = () => {

    const [couponCode, setCouponCode] = useState<string>("");
    const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

    useEffect(() => {


    }, [couponCode])

    return (
        <div className="cart">
            <main>
                {
                    cartItems.length > 0 ?
                        (cartItems.map((i, index) => (<CartItems key={index} cartItem={i} />)))
                        :
                        <h1>
                            No Items Added
                        </h1>
                }
            </main>

            <aside>
                <p>Subtotal : ₹{subtotal}</p>
                <p>Shipping Charges : ₹{shippingCharges}</p>
                <p>Tax : ₹{tax}</p>
                <p>Discount <em className="red">-₹{discount}</em> </p>
                <p><b>Total: {total}</b></p>

                <input type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Coupon Code"
                />

                {
                    couponCode && (
                        isValidCouponCode ?
                            <span className="green">₹{discount}
                                Off using the <code>{couponCode}</code>
                            </span>
                            :
                            <span className="red">
                                Invalid Coupon <VscError />
                            </span>
                    )
                }

                {
                    cartItems.length > 0 && <Link to={"/shipping"}>Checkout</Link>
                }
            </aside>
        </div>
    )
}

export default Cart
