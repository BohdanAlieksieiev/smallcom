import "./Requirements.css";

type Props = {
  text: string;
  cssBtn?: string;
};

export const Requirements: React.FC<Props> = ({ text, cssBtn }) => {
  return (
    <>
      <button className={`button ${cssBtn && cssBtn}`}>{text}</button>
    </>
  );
};
