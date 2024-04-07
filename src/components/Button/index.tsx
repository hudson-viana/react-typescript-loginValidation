import { IButtonProps } from "./types";
import "./styles.css"

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return <button onClick={onClick} disabled={disabled} className="submitButton">{title}</button>;
};

export default Button;
