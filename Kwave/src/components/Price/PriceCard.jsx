import React from "react";
import "./PriceCard.css";
import Button from '../common/Button'

const PriceCard = ({ title, oldPrice, newPrice, perMonth, discount, highlight, note }) => {
  return (
    <div className={`price-card ${highlight ? "highlight" : ""}`}>
      <div className="price-header">
        <label className="price-title-text">{title}</label><br />
        {oldPrice && <label className="old-price">{oldPrice}đ</label>}
        <label className="new-price">{newPrice}đ</label><br />
      
        {perMonth && <label className="per-month">({perMonth}/tháng)</label>}
        {note && <label className="note">{note}</label>}
      </div>
      
      <div className="price-deal">
        {highlight && <Button type="orange" size="small">Thỏa thuận tốt nhất</Button>}
        <label className="discount">{discount} giảm giá</label>
      </div>        
    </div>
  );
};

export default PriceCard;
