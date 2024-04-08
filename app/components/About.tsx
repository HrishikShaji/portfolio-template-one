import { about, personal } from "@/public/data";
import { Container } from "./Container";
import Image from "next/image";

export const About = () => {
  return (
    <Container textColor="white" bgColor="black" title="ABOUT">
      <div className="flex gap-10 h-full items-center">
        <Image
          src={personal.profileImg}
          height={1000}
          width={1000}
          alt="image"
          className="h-full w-[500px] object-cover"
        />
        <p className="font-orbitron text-xl">{about}</p>
      </div>
    </Container>
  );
};
