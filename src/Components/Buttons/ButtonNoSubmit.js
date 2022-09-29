const ButtonNoSubmit = ({ children, ...props }) => (
  <button type="button" {...props}>
    {children}
  </button>
);

export default ButtonNoSubmit;
