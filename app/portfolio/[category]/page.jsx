import React from "react";
import Button from "@/components/button/Button";
import Image from "next/image";

const Category = async ({ params }) => {
  const { category } = params;
  console.log(category);

  return (
    <div>
      <h1 className="text-md font-bold text-green-500">{category} </h1>
      <div className="flex flex-row gap-5 items-center">
        <div className="flex-1 flex-col  p-4 ">
          <h1 className="text-2xl font-bold text-gray-300 ">
            Creative Portfolio
          </h1>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            quaerat nesciunt aliquam illum et voluptatem non fugiat, iste ex
            earum ea voluptate obcaecati laborum autem tenetur, quasi, porro
            perspiciatis mollitia?
          </p>
          <Button text="See more" url='#' className="mt-3"/>
        </div>
        <div className="flex-1">
          <div>
            <Image
             src="/linker.jpg"
            alt="image of the section"
            width={500}
            height={500}
            />
          </div>
           </div>
      </div>
      <div className="flex flex-row-reverse gap-5 items-center">
        <div className="flex-1 flex-col  p-4 ">
          <h1 className="text-2xl font-bold text-gray-300 ">
            Creative Portfolio
          </h1>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            quaerat nesciunt aliquam illum et voluptatem non fugiat, iste ex
            earum ea voluptate obcaecati laborum autem tenetur, quasi, porro
            perspiciatis mollitia?
          </p>
          <Button text="See more" url='#' className="mt-3"/>
        </div>
        <div className="flex-1">
          <div>
            <Image
             src="/linker.jpg"
            alt="image of the section"
            width={500}
            height={500}
            />
          </div>
           </div>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <div className="flex-1 flex-col  p-4 ">
          <h1 className="text-2xl font-bold text-gray-300 ">
            Creative Portfolio
          </h1>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            quaerat nesciunt aliquam illum et voluptatem non fugiat, iste ex
            earum ea voluptate obcaecati laborum autem tenetur, quasi, porro
            perspiciatis mollitia?
          </p>
          <Button text="See more" url='#' className="mt-3"/>
        </div>
        <div className="flex-1">
          <div>
            <Image
             src="/linker.jpg"
            alt="image of the section"
            width={500}
            height={500}
            />
          </div>
           </div>
      </div>
      <div className="flex flex-row-reverse gap-5 items-center">
        <div className="flex-1 flex-col  p-4 ">
          <h1 className="text-2xl font-bold text-gray-300 ">
            Creative Portfolio
          </h1>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            quaerat nesciunt aliquam illum et voluptatem non fugiat, iste ex
            earum ea voluptate obcaecati laborum autem tenetur, quasi, porro
            perspiciatis mollitia?
          </p>
          <Button text="See more" url='#' className="mt-3"/>
        </div>
        <div className="flex-1">
          <div>
            <Image
             src="/linker.jpg"
            alt="image of the section"
            width={500}
            height={500}
            />
          </div>
           </div>
      </div>
    </div>
  );
};

export default Category;
