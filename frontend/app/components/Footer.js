import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#005fa5] dark:bg-[#414142] text-white fixed bottom-0 left-0 w-full h-auto flex items-center ">
      <div className="w-full xl:max-w-[90rem] xl:mx-auto flex flex-col px-4 py-2 ">
        <div>
          <h3 className="font-[18px]">Contact:</h3>
          <p>
            Phone: <span> 08 4440004</span>
          </p>

          <p>
            E-mail: <span> contact@chasbank.se</span>
          </p>
        </div>
        <div className="w-full flex justify-center pt-2">
          <p className="text-[12px]">© Chas-Bank 2024</p>
        </div>
      </div>
    </footer>
  );
}
