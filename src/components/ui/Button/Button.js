import './Button.css';

const Button = ({ text, onClick, className, icon, type }) => {
  return (
    <button className={`${className}`} onClick={onClick} type={type}>
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;