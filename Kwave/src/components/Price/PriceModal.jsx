import React from "react";
import PriceCard from "./PriceCard";
import "./PriceCard.css";

const PriceModal = ({ show }) => {
  if (!show) return null;

  return (
    <div className="pricing-container">
      <PriceCard
        title="Phí bảo hiểm trọn đời"
        newPrice="1.000.000"
        discount="81%"
        highlight={true}
        note="Mua một lần và sử dụng nó"
      />
      <PriceCard
        title="12 Tháng Premium"
        oldPrice="905.268"
        newPrice="350.000"
        perMonth="≈29.167"
        discount="61%"
      />
      <PriceCard
        title="3 Tháng Premium"
        oldPrice="226.317"
        newPrice="150.000"
        perMonth="≈50.000"
        discount="34%"
      />
    </div>
  );
};

export default PriceModal;
