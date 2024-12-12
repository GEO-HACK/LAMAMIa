import React from "react";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className="">
      <div className="relative w-full h-[250px] mt-4">
        <Image src="/about.jpeg" fill={true} alt="about image" className="relative image--scale object-cover" />
        <div className="absolute bg-green-400 bottom-[20px] left-[20px] px-4 rounded-md">
          <h1 className="font-bold text-xl">Digital story Tellers</h1>
          <h2 className="font-semibold text-md ">HandCrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex-1 flex flex-col gap-4 mt-4">
          <h1 className="font-bold text-4xl">Who are we?</h1>
          <p className="text-sm font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis voluptatem tempora impedit, provident quo quos
            repellendus eos cumque placeat non voluptatibus ipsam temporibus,
            hic veniam maxime. Qui iste repudiandae magni.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, id
            eius fugiat molestiae culpa explicabo neque obcaecati quibusdam
            corporis error, quidem labore aliquam laudantium sit sunt
            repudiandae quod voluptatum dolores!
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4 mt-4">
          <h1 className="font-bold text-4xl">What we do?</h1>
          <p className="text-sm font-serif ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            aut eum distinctio quaerat quisquam, vitae dolorum? Architecto
            culpa, dolore at veniam error nostrum sit quos, esse hic numquam
            voluptate illo.
            <br />
            <br />
            -create website
            <br />
            -design systems
            <br />
            -optimize the systems     
           
          
         
          </p>
          <Button text="contact" url="/contact"/>
        </div>
      </div>
    </div>
  );
};

export default About;
