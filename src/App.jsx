import React from "react";

const ButtonBlack = (props) => {
  const {variant} = props;
  return (
    <button
    className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
    type="submit"
  >
    ButtonBlack
  </button>
  );

};

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-3">
        <ButtonBlack variant="bg-red-700"></ButtonBlack>
        <ButtonBlack variant="bg-blue-700"></ButtonBlack>
        <ButtonBlack variant="bg-yellow-700"></ButtonBlack>
      </div>
    </div>
  );
}

export default App;
