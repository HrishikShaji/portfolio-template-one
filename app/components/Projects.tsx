import { projects } from "@/public/data";
import { Container } from "./Container";

export const Projects = () => {
	return (
		<Container bgColor="white" textColor="black" title="PROJECTS">
			{projects.map((item, i) => (
				<div
					className="font-righteous bg-black border-white border-b-2 text-white text-xl h-full"
					key={i}
				>
					{item.title}
				</div>
			))}
		</Container>
	);
};
