import React, { useState, useEffect } from "react";

function Bill() {
  // ราคาสินค้า
  const prices = [100, 100, 100, 100];

  // สถานะสำหรับเก็บจำนวนสินค้า, ยอดรวม, ส่วนลด และประวัติการสั่งซื้อ
  const [quantities, setQuantities] = useState([0, 0, 0, 0, 0]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  // ฟังก์ชันคำนวณยอดรวม
  useEffect(() => {
    let subtotal = 0;
    let itemCount = 0;

    quantities.forEach((quantity, index) => {
      subtotal += prices[index] * quantity;
      if (quantity > 0) itemCount++;
    });

    let discount = 0;
    if (itemCount >= 5) {
      discount = subtotal * 0.1;
    }

    setSubtotal(subtotal);
    setDiscount(discount);
    setTotal(subtotal - discount);
  }, [quantities]);

  // ฟังก์ชันจัดการการเปลี่ยนแปลงจำนวนสินค้า
  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  // ฟังก์ชันยืนยันการสั่งซื้อ
  const confirmOrder = () => {
    setOrderHistory([...orderHistory, quantities]);
    setQuantities([0, 0, 0, 0, 0]); // รีเซ็ตจำนวนสินค้า
  };

  // ฟังก์ชันแสดงประวัติการสั่งซื้อ
  const renderOrderHistory = () => {
    return orderHistory.map((order, index) => (
      <li key={index}>
        ครั้งที่ {index + 1}: น้ำซุป({order[0]}), หมูสามชั้น({order[1]}), เนื้อวัว({order[2]}), ผักรวม({order[3]}), น้ำอัดลม({order[4]})
      </li>
    ));
  };

  return (
    <div className="bill">
      <h1>เมนูอาหาร</h1>
      <div className="menu-item">
        <label>
          น้ำซุป (30 บาท):
          <input
            type="number"
            value={quantities[0]}
            min="0"
            onChange={(e) => handleQuantityChange(0, parseInt(e.target.value))}
          />
        </label>
      </div>
      <div className="menu-item">
        <label>
          หมูสามชั้น (50 บาท):
          <input
            type="number"
            value={quantities[1]}
            min="0"
            onChange={(e) => handleQuantityChange(1, parseInt(e.target.value))}
          />
        </label>
      </div>
      <div className="menu-item">
        <label>
          เนื้อวัว (70 บาท):
          <input
            type="number"
            value={quantities[2]}
            min="0"
            onChange={(e) => handleQuantityChange(2, parseInt(e.target.value))}
          />
        </label>
      </div>
      <div className="menu-item">
        <label>
          ผักรวม (40 บาท):
          <input
            type="number"
            value={quantities[3]}
            min="0"
            onChange={(e) => handleQuantityChange(3, parseInt(e.target.value))}
          />
        </label>
      </div>

      <button onClick={confirmOrder}>ยืนยันการสั่ง</button>

      <div className="summary" id="summary">
        <h3>ใบเสร็จ</h3>
        <p>รวมก่อนส่วนลด: {subtotal} บาท</p>
        <p>ส่วนลด (10%): {discount} บาท</p>
        <p>
          <strong>ยอดเงินสุทธิ: {total} บาท</strong>
        </p>
      </div>

      <div className="history" id="history">
        <h3>ประวัติการสั่ง</h3>
        <ul>{renderOrderHistory()}</ul>
      </div>

      {/* Custom Modal */}
      <div id="receiptModal">
        <div className="modal-content">
          <div className="modal-header">
            <h5>ใบเสร็จ</h5>
            <button className="close-btn" onClick={() => document.getElementById('receiptModal').style.display = 'none'}>
              ปิด
            </button>
          </div>
          <div className="modal-body" id="modalBody">
            <p>รวมก่อนส่วนลด: {subtotal} บาท</p>
            <p>ส่วนลด (10%): {discount} บาท</p>
            <p>
              <strong>ยอดเงินสุทธิ: {total} บาท</strong>
            </p>
            <h3>ประวัติการสั่ง</h3>
            <ul>{renderOrderHistory()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bill;
