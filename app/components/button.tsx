import React from "react";
import theme from "~/utils/theme";

// interface ButtonProps {
//   variant?: keyof typeof variants;
// }

const variants = {
  standard: {
    backgroundColor: theme.colors.neutral[5],
    color: theme.colors.neutral[80],
    ":hover": {
      backgroundColor: theme.colors.neutral[2],
    },
    ":active": {
      backgroundColor: theme.colors.neutral[20],
      borderColor: "transparent",
    },
    ":focus-visible": {
      borderColor: theme.colors.blue[50],
    },
    ":disabled": {
      ":hover": {
        backgroundColor: theme.colors.neutral[5],
      },
    },
  },
  primary: {
    backgroundColor: theme.colors.blue[50],
    color: theme.colors.neutral[0],
    ":hover": {
      backgroundColor: theme.colors.blue[40],
    },
    ":active": {
      backgroundColor: theme.colors.blue[60],
      borderColor: "transparent",
    },
    ":focus-visible": {
      borderColor: theme.colors.blue[70],
    },
    ":disabled": {
      ":hover": {
        backgroundColor: theme.colors.blue[50],
      },
    },
  },
  accent: {
    backgroundColor: theme.colors.mint[50],
    color: theme.colors.neutral[0],
    ":hover": {
      backgroundColor: theme.colors.mint[40],
    },
    ":active": {
      backgroundColor: theme.colors.mint[60],
      borderColor: "transparent",
    },
    ":focus-visible": {
      borderColor: theme.colors.mint[70],
    },
    ":disabled": {
      ":hover": {
        backgroundColor: theme.colors.mint[50],
      },
    },
  },
  danger: {
    backgroundColor: theme.colors.red[50],
    color: theme.colors.neutral[0],
    ":hover": {
      backgroundColor: theme.colors.red[40],
    },
    ":active": {
      backgroundColor: theme.colors.red[60],
      borderColor: "transparent",
    },
    ":focus-visible": {
      borderColor: theme.colors.red[70],
    },
    ":disabled": {
      ":hover": {
        backgroundColor: theme.colors.red[50],
      },
    },
  },
  hollow: {
    backgroundColor: "transparent",
    color: theme.colors.neutral[80],
    ":hover": {
      backgroundColor: theme.colors.neutral[2],
    },
    ":active": {
      backgroundColor: theme.colors.neutral[20],
      borderColor: "transparent",
    },
    ":focus-visible": {
      borderColor: theme.colors.blue[50],
      backgroundColor: theme.colors.neutral[5],
      ":active": {
        backgroundColor: theme.colors.neutral[20],
      },
    },
    ":disabled": {
      ":hover": {
        backgroundColor: "transparent",
      },
    },
  },
};

const baseStyles = {
  fontWeight: theme.fontWeights["normal"],
  fontSize: theme.fontSizes[16],
  lineHeight: theme.lineHeights[2],
  borderRadius: theme.radii[8],
  borderColor: "transparent",
  borderWidth: theme.spacing[2],
  borderStyle: "solid",
  outline: "none",
  textDecoration: "none",
  paddingTop: theme.spacing[4],
  paddingBottom: theme.spacing[4],
  paddingLeft: theme.spacing[12],
  paddingRight: theme.spacing[12],
  ":disabled": {
    opacity: 0.4,
  },
  cursor: "pointer",
};

const iconButtonBaseStyles = {
  paddingTop: theme.spacing[2],
  paddingBottom: theme.spacing[2],
  paddingLeft: theme.spacing[2],
  paddingRight: theme.spacing[2],
  lineHeight: theme.lineHeights[1],
  display: "block",
  fontSize: "0rem",
};

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
    iconright: "iconright",
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

// const variantStyles = ({ variant = "primary", ...props }) => {
//   const variantStyleObject = variants[variant];

//   return variant({ ...variantStyleObject })(props);
// };

// // const Button = <Button {baseStyles, variantStyles}>{Children}</Button>;

// const Button = ({ type = "button", onClick }) => {
//   return (
//     <Button type={type} onClick={onClick}>
//       children
//     </Button>
//   );
// };
// React.FunctionComponent<ButtonProps>(baseStyles, variantStyles);

// // export const IconButton = button<ButtonProps>(
// export const IconButton = ReactElement<ButtonProps>(
//   baseStyles,
//   iconButtonBaseStyles,
//   variantStyles
// );

// export default Button;
