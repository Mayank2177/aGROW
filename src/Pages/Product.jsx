import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Soil Degradation',
    description: 'Monitor and analyze soil health using AI insights to reduce degradation and enhance fertility.',
  },
  {
    title: 'Weather Forecasting',
    description: 'Receive hyper-local weather forecasts to plan irrigation, harvesting, and avoid crop damage.',
  },
];

const ServicesPage = () => {
  return (
    <div className="services-container">
      <h2>Products & Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
