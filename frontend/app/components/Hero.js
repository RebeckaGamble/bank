import React from "react";
import Link from "next/link";
import Image from "next/image";
import hero from "../../public/hero.jpg";

const HERO = hero;

export default function Hero() {
  return (
    <div className=" bg-blue-100 dark:bg-[#121212]">
      {/*small bp, image over text */}
      <div className="flex flex-col md:flex-row w-full relative xl:max-w-[90rem] xl:mx-auto">
        <div className="md:hidden w-full flex pt-4 justify-center relative">
          <div className="overflow-hidden max-w-[267px] rounded-full">
            <Image
              src={HERO}
              alt="meeting"
              height={300}
              width={800}
              className="object-cover"
            />
          </div>
        </div>
        {/* Text */}
        <div className="flex flex-col justify-between w-full md:w-[50%] py-6 lg:py-10 xl:py-20 2xl:py-[100px] px-4 ">
          <h3 className="font-semibold pb-4">Lorem ipsum dolor sit.</h3>
          <div className="leading-5 flex flex-col gap-2 pb-4">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates fugit magni expedita beatae, amet totam veritatis
              quaerat nulla perferendis illo.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus, laboriosam.
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div>
            <Link href="/create" className="px-4 py-1 text-white bg-[#005fa5]">
              Create account
            </Link>
          </div>
        </div>
        {/*bigger bp, image to the right of text */}
        <div className="hidden md:block md:w-[50%] relative">
          <div className="p-0 md:flex md:items-end w-full md:justify-end">
            <div className="md:absolute w-full md:rounded-l-[15%] md:inset-0 overflow-hidden">
              <Image
                src={HERO}
                alt="meeting"
                height={300}
                width={800}
                className="md:object-fill h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}