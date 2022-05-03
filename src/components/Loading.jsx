import React from "react";
import { BarLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className=' grid w-full min-h-[calc(100vh_-_6rem)] items-center justify-center'>
      <BarLoader color='rgb(54, 99, 188)' size={25} />
    </div>
  );
};

export default Loading;
