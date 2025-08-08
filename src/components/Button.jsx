import PropTypes from "prop-types";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClasses =
    "px-8 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-200";

  const variants = {
    primary:
      "bg-yellow-400 text-black hover:bg-yellow-300 shadow-md hover:shadow-lg",
    outline:
      "border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "outline"]),
  className: PropTypes.string,
};

export default Button;
