import React from "react";
import img1 from "../img/01.png";
import img2 from "../img/02.png";
import img3 from "../img/03.png";
import img4 from "../img/04.jpg";
import '../styles/order.css';

function order() {
    // ฟังก์ชันที่ใช้จัดการการคลิก
    const addToOrder = (itemName, itemPrice) => {
        alert("คุณเลือก: " + itemName + " ราคา " + itemPrice + " บาท");
    };

    return (
        <div className="order">
            <div className="container mt-4">
                <h1 className="text-center">Sushi Sensation</h1>
                <h2 className="mt-4">รายการอาหาร</h2>

                <div className="menu-item">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={img1} alt="SPICY TUNA MAKI" />
                        </div>
                        <div className="col-md-8">
                            <h3>SPICY TUNA MAKI</h3>
                            <p>ราคา: 100 บาท</p>
                            <p>ซูชิทูน่ารสเผ็ด เสิร์ฟพร้อมแตงกวาและอะโวคาโด</p>
                            <button
                                className="btn-order"
                                onClick={() => addToOrder('SPICY TUNA MAKI', 999)}
                            >
                                เลือกเมนู
                            </button>
                        </div>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={img2} alt="Mango Maki" />
                        </div>
                        <div className="col-md-8">
                            <h3>Mango Maki</h3>
                            <p>ราคา: 100 บาท</p>
                            <p>โรลกุ้งเทมปุระ แตงกวา และครีมชีส พร้อมอะโวคาโดสด</p>
                            <button
                                className="btn-order"
                                onClick={() => addToOrder('Mango Maki', 599)}
                            >
                                เลือกเมนู
                            </button>
                        </div>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={img3} alt="Mango Maki" />
                        </div>
                        <div className="col-md-8">
                            <h3>Mango Maki</h3>
                            <p>ราคา: 100 บาท</p>
                            <p>โรลกุ้งเทมปุระ แตงกวา และครีมชีส พร้อมอะโวคาโดสด</p>
                            <button
                                className="btn-order"
                                onClick={() => addToOrder('Mango Maki', 599)}
                            >
                                เลือกเมนู
                            </button>
                        </div>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={img4} alt="Mango Maki" />
                        </div>
                        <div className="col-md-8">
                            <h3>Mango Maki</h3>
                            <p>ราคา: 100 บาท</p>
                            <p>โรลกุ้งเทมปุระ แตงกวา และครีมชีส พร้อมอะโวคาโดสด</p>
                            <button
                                className="btn-order"
                                onClick={() => addToOrder('Mango Maki', 599)}
                            >
                                เลือกเมนู
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <a href="index.html" className="btn btn-secondary">กลับสู่หน้าแรก</a>
                </div>
            </div>
        </div>
    );
}

export default order;
