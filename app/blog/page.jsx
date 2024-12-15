import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="flex flex-col gap-5 w-[80%] items-center mt-5">
      <h1 className="text-6xl font-bold">Blogs</h1>
      <Link className="mt-2" href="/test">
      <div className="flex   gap-4 m-auto">
        
          <div className="">
            <Image
              src="/linker.jpg"
              alt="the image for the page"
              width={300}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-3 w-[500px]  ">
            <h1 className="text-4xl font-bold text-gray-300  ">Lorem ipsum dolor sit amet consectetur  </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              deserunt, temporibus, ipsam nobis ut corrupti, vero maxime
              recusandae beatae ducimus non? Aspernatur at sapiente amet aliquam
              ab alias eaque. Facere.
            </p>
          </div>
      </div>
      </Link>
      <Link className="mt-2" href="/test">
      <div className="flex   gap-4 m-auto">
        
          <div className="">
            <Image
              src="/linker.jpg"
              alt="the image for the page"
              width={300}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-3 w-[500px]  ">
            <h1 className="text-4xl font-bold text-gray-300  ">Lorem ipsum dolor sit amet consectetur  </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              deserunt, temporibus, ipsam nobis ut corrupti, vero maxime
              recusandae beatae ducimus non? Aspernatur at sapiente amet aliquam
              ab alias eaque. Facere.
            </p>
          </div>
      </div>
      </Link>
      <Link className="mt-2" href="/test">
      <div className="flex   gap-4 m-auto">
        
          <div className="">
            <Image
              src="/linker.jpg"
              alt="the image for the page"
              width={300}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-3 w-[500px]  ">
            <h1 className="text-4xl font-bold text-gray-300  ">Lorem ipsum dolor sit amet consectetur  </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              deserunt, temporibus, ipsam nobis ut corrupti, vero maxime
              recusandae beatae ducimus non? Aspernatur at sapiente amet aliquam
              ab alias eaque. Facere.
            </p>
          </div>
      </div>
      </Link>
      <Link className="mt-2" href="/test">
      <div className="flex   gap-4 m-auto">
        
          <div className="">
            <Image
              src="/linker.jpg"
              alt="the image for the page"
              width={300}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-3 w-[500px]  ">
            <h1 className="text-4xl font-bold text-gray-300  ">Lorem ipsum dolor sit amet consectetur  </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              deserunt, temporibus, ipsam nobis ut corrupti, vero maxime
              recusandae beatae ducimus non? Aspernatur at sapiente amet aliquam
              ab alias eaque. Facere.
            </p>
          </div>
      </div>
      </Link>
      
     

    </div>
  );
};

export default Blog;
