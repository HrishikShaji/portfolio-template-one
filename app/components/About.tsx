import { about } from "@/public/data";
import { Container } from "./Container";

export const About = () => {
	return (
		<Container textColor="white" bgColor="black" title="ABOUT">
			<p className="font-orbitron text-xl">{about}</p>
		</Container>
	);
};
