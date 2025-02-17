import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../img/01.png";
import img2 from "../img/02.png";
import img3 from "../img/03.png";
import img4 from "../img/04.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/order.css";

function Order() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    // รายการอาหาร
    const menuItems = [
        { id: 1, name: "Spicy Tuna Maki", price: 100, img: img1 },
        { id: 2, name: "Mango Maki", price: 100, img: img2 },
        { id: 3, name: "Salmon Maki", price: 100, img: img3 },
        { id: 4, name: "Tuna Maki", price: 100, img: img4 },
    ];

    // ฟังก์ชันเพิ่มสินค้าในคำสั่งซื้อ
    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    // ฟังก์ชันลบสินค้าออกจากตะกร้า
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // ฟังก์ชันคำนวณยอดรวมและไปหน้า bill.js
    const handleCheckout = () => {
        if (cart.length === 0) {
            alert("กรุณาเลือกเมนูก่อน!");
            return;
        }

        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const discount = subtotal * 0.1; // ส่วนลด 10%
        const total = subtotal - discount;

        navigate("/bill", { state: { orderDetails: cart, discount, total } });
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center">Sushi Sensation</h1>
            <h2 className="mt-4">เมนูอาหาร</h2>

            {menuItems.map((item) => (
                <div key={item.id} className="menu-item card mb-3 p-3 shadow-sm">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src={item.img} alt={item.name} className="img-fluid rounded" />
                        </div>
                        <div className="col-md-8">
                            <h3>{item.name}</h3>
                            <p>ราคา: {item.price} บาท</p>
                            <button className="btn btn-success" onClick={() => addToCart(item)}>
                                เพิ่มลงในคำสั่งซื้อ
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* แสดงรายการที่เลือก */}
            <div className="mt-4 p-3 border rounded bg-light">
                <h3>🛒 รายการที่เลือก</h3>
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
                            <span>
                                <strong>{item.name}</strong> x {item.quantity}
                            </span>
                            <div>
                                <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>
                                    ลบ
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-muted">ยังไม่มีรายการอาหารที่เลือก</p>
                )}
            </div>

            <div className="text-center mt-4">
                <button onClick={handleCheckout} className="btn btn-danger btn-lg">
                    ไปที่หน้าสรุปคำสั่งซื้อ
                </button>
            </div>
        </div>
    );
}

export default Order;
