// components/Footer.tsx
import React from 'react';
import './Footer.css'; // Подключаем стили

interface FooterProps {
  show: boolean;
}

const Footer: React.FC<FooterProps> = ({ show }) => {
  return (
    <footer className={`footer ${show ? 'show' : ''}`}>
      <div className="footer-content">
        <div className="footer-info">
          <p>Телефон: +7 (123) 456-78-90</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="footer-text">
          <p>&copy; 2023 Ваша Компания. Все права защищены.</p>
          <p>Адрес: ул. Примерная, 123, г. Город</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;