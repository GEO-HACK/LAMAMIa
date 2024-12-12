import React from "react";
import Image from "next/image";
import Button from "@/components/button/Button";

const Contact = () => {
  return (
    <div className="flex flex-col items-center m-auto">
      <h1 className="font-bold text-6xl">
        Lets Keep in <span className="text-green-400">Touch</span>
      </h1>
      <div className="flex gap-[100px] mt-4">
        <div className="flex-1">
          <Image
            src="/contact.png"
            alt="contact image"
            height={500}
            width={500}
          />
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              className="p-5 bg-transparent border border-gray-300  outline-none text-sm"
            />
            <input
              type="text"
              placeholder="Email"
              className="p-5 bg-transparent border border-gray-300  outline-none text-sm"
            />
            <textarea
              className="p-5 bg-transparent border border-gray-300  outline-none text-sm"
              placeholder="Message"
              rows="10"
              cols="30"
            ></textarea>
            <Button text="Send" url="#" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
