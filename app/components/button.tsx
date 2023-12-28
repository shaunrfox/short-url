const Button = ({ children, variant, onClick, icon }) => {
  const variants = {
    standard: "standard",
    primary: "primary",
    hollow: "hollow",
    danger: "danger",
    accent: "accent",
  };

  const iconOptions = {
    iconOnly: "icon-button",
    iconLeft: "iconLeft",
    iconright: "iconRight",
  };

  const buttonVariant = variants[variant] || "standard";

  const iconVariant = iconOptions[icon] || "";

  return (
    <button
      type="button"
      className={`button variant-${buttonVariant} ${iconVariant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
