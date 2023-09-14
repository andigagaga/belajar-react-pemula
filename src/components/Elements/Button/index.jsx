const ButtonBlack = (props) => {
    const {children ,variant="bg-blue-700 w-full"} = props;
    return (
      <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
    );
  
  };

  export default ButtonBlack;