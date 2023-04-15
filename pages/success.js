import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';
const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    useEffect (() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);
    return(
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>
                    Cảm ơn vì sự lựa chọn của bạn !
                </h2>
                <p className="email-msg">
                    Chúng tôi sẽ gửi email xác nhận đơn hàng của bạn.
                </p>
                <p className="description">
                    Nếu bạn có bất kỳ câu hỏi nào. Vui lòng hãy gửi Email !
                    <a className="email" href="mailto:ngogiaphat0802@gmail.com">ngogiaphat0802@gmail.com</a>
                </p>
                <Link href="/">
                    <button type="button" width="300px" className="btn">
                        Tiếp tục mua sắm
                    </button>
                </Link>
            </div>
        </div>
    )
}