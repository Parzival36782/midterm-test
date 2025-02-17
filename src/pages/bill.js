import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/bill.css';

function Bill() {
    const location = useLocation();
    const navigate = useNavigate();
    const { orderDetails = [], discount = 0, total = 0 } = location.state || {};

    return (
        <div className="container text-center mt-5 bill-container">
            <div className="card shadow-lg p-4 border-0 summary-container">
                <h2 className="fw-bold text-success">สรุปคำสั่งซื้อ</h2>
                <hr />
                <div className="text-start mx-auto" style={{ maxWidth: "400px" }}>
                    {orderDetails.length > 0 ? (
                        orderDetails.map((item, index) => (
                            <p key={index} className="mb-1">
                                <strong>{item.name}</strong> x {item.quantity} = {item.price} บาท
                            </p>
                        ))
                    ) : (
                        <p className="text-danger">ไม่มีรายการอาหาร</p>
                    )}
                </div>
                {discount > 0 && <p className="text-danger fw-bold">ส่วนลด 10%: -{discount} บาท</p>}
                <h4 className="fw-bold mt-3">ยอดรวมทั้งหมด: {total} บาท</h4>
                <div className="mt-4">
                    <button onClick={() => navigate("/")} className="btn btn-primary me-2">
                        กลับไปที่เมนู
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Bill;