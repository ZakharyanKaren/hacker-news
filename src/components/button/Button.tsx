import "./button.scss";

type ButtonProps = {
  disabled: boolean;
  onClick: () => any;
  text: string;
  textAlign: string;
  marginTop?: string;
};

export const Button = ({
  disabled = false,
  textAlign = "left",
  marginTop = "",
  text,
  onClick,
}: ButtonProps) => {
  return (
    <div
      className={`reset-button-wrapper ${textAlign} ${
        marginTop && "margin-top"
      }`}
    >
      <button disabled={disabled} onClick={() => onClick()}>
        {text}
      </button>
    </div>
  );
};
