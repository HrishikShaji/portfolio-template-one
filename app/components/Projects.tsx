import { projects } from "@/public/data";
import { Container } from "./Container";

export const Projects = () => {
	return (
		<Container bgColor="white" textColor="black" title="PROJECTS">
			<div className="flex flex-col h-full">
				{projects.map((item, i) => (
					<div
						className="font-righteous  border-black border-b-2 flex items-center text-black text-xl h-full"
						key={i}
					>
						<h1 className="text-3xl">{item.title}</h1>
					</div>
				))}
			</div>
		</Container>
	);
};
