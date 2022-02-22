import "./Button.css";

type Props = {
  text: string;
  cssBtn?: string;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ text, cssBtn, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={`button ${cssBtn && cssBtn}`}>
        {text}
      </button>
    </>
  );
};
