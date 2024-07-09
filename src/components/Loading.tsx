import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ScaleLoader color="#6B46C1" />
    </div>
  );
};

export default Loading;
