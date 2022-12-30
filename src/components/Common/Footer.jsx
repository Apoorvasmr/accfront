import React, { useEffect, useState } from 'react';
import logo2 from '../../assets/images/Accessories-logo.svg';

export default function Footer({ price }) {
    let pageUrl = window.location.toString();
    const [showCheckoutButton, setShowCheckoutButton] = useState(true);
    const key = localStorage.getItem('LOGIN_USER_KEY');

    useEffect(() => {
        if (pageUrl.includes('cart')) {
            setShowCheckoutButton(false);
        }
    }, []);

    return (
        <footer>
            {key !== null && (
                <div class="foot">
                    <h2>Total cost : ${price}</h2>
                    {showCheckoutButton ? (
                        <a href="/cart">
                            <button class="btn">Check Your Cart</button>
                        </a>
                    ) : (
                        <a href="/Shipping">
                            <button class="btn">Next Step</button>
                        </a>
                    )}
                </div>
            )}
            <div class="refresh">
                <img src={logo2} alt="logo" />
                <p>
                Premium Quality mobile accessories wallets glasses at the best and most affordable price.
        we have a new offer every day for 365 days.
                </p>
                {/* <p>we have a new offer every day for 365 days</p> */}
                <span>Contact</span>
                <p>E-mail : buy@accessories.com | Hotline: +1 131 138 138</p>
            </div>
            <div className="copyright">
                <p>DESIGN BY ACCESSORIES - © 2022. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
}
