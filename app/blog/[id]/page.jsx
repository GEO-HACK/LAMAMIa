import React from "react";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div>
      <div className="top  flex  gap-6">
        <div className="flex-1 w-[500px] items-center m-auto">
          <h1 className="font-bold text-4xl text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut
            pariatur porro, quos culpa optio ratione neque quia maiores
            doloribus. Nostrum minima esse quos repellat maiores, dolorum
            aliquam fugit ratione.
          </p>
          <div className="flex flex-row gap-2 mt-4 items-center">
            <Image
              src="/linker.jpg"
              alt="user image"
              height={50}
              width={50}
              className=" rounded-lg"
            />
            <span className="text-md text-green-400 font-semibold">
              John Doe
            </span>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/linker.jpg"
            alt="image for the section"
            height={400}
            width={400}
          />
        </div>
      </div>
      <div className="bottom mt-6 w-[900px] items-center">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
          excepturi ab maxime natus adipisci consectetur porro aliquam at ipsa
          quidem nam est incidunt, officiis optio veniam itaque! Accusantium,
          qui nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Debitis tempora voluptates nam vitae nulla tenetur, porro laborum
          ipsum explicabo, itaque architecto alias aspernatur amet ipsam
          adipisci dolore officia temporibus doloremque?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quas delectus assumenda odio nihil. Aliquam alias debitis eum fugit
          dolor facilis omnis numquam! Neque vel quisquam aliquid labore
          deleniti numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          soluta mollitia repudiandae voluptas minus nesciunt laborum eum, quas
          placeat et debitis eos pariatur odit consequuntur quaerat, eligendi
          harum veritatis facere?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
