import { Container } from "./Container";

export const Contact = () => {
  return (
    <Container bgColor="black" textColor="white" title="CONTACT">
      <form className="flex flex-col gap-5">
        <input
          className="p-2 border-b-2 border-white bg-transparent font-orbitron text-4xl"
          placeholder="Name..."
        />
        <input
          className="p-2 border-b-2 border-white bg-transparent font-orbitron text-4xl"
          placeholder="Email..."
        />
        <textarea
          className="p-2 border-b-2 border-white bg-transparent font-orbitron text-4xl"
          placeholder="Message..."
        />
        <button className="px-10 w-fit py-5  rounded-r-full font-orbitron bg-white text-sm text-black">
          SEND MESSAGE
        </button>
      </form>
    </Container>
  );
};
