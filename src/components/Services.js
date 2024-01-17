import React from "react";

export default function Services() {
  return (
    <div>
      <h2>Services</h2>
      <ul className="service-ul">
        <li className="service-li">Bride hair: $180</li>
        <li className="service-li">Bridesmaids hair: $130</li>
        <li className="service-li">
          Jr Bridesmaids hair (8-14 years old): $90
        </li>
        <li className="service-li">Flower girl hair: $50</li>
        <li className="service-li">Trial: $150</li>
        <li className="service-li">
          Hair extension (clients must have their own hair extensions): $30
        </li>
        <li className="service-li">
          Services requested outside of the Halton and Hamilton area are subject
          to a travel fee
        </li>
      </ul>
      <p>Makeup artists are available upon request</p>
    </div>
  );
}
