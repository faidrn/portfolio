import './Button.css';

const Button = ({ text, onClick, className, icon }) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;