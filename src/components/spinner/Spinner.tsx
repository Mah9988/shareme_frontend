import React from "react";
import { Circles } from "react-loader-spinner";
type SpinnerProps = {
  message: string;
};
const Spinner: React.FC<SpinnerProps> = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Circles
        height="70"
        width="200"
        color="#00BFFF"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p className="text-lg text-center px-2 py-2">{message}</p>
    </div>
  );
};

export default Spinner;
