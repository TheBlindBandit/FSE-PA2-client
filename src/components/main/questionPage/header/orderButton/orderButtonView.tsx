import "./orderButtonView.css";
import { MessageFunctionType } from "../../../../../types/functionTypes";

/**
 * Props type for the OrderButton component
 */
interface OrderButtonProps {
  message: string;
  setQuestionOrder: MessageFunctionType;
}

/**
 * Component to render the order buttons of newest, active, and unanswered
 * @param props - message, setQuestionOrder 
 * @returns 
 */
const OrderButton = ({ message, setQuestionOrder }: OrderButtonProps) => {
  return (
    <button
      className="btn"
      onClick={() => {
        setQuestionOrder(message);
      }}
    >
      {message}
    </button>
  );
};

export default OrderButton;
