import { projects } from "@/public/data";

export const Projects = () => {
	return (
		<div className="h-full w-full bg-black  text-white flex flex-col  ">
			<div className="flex flex-col h-full gap-0 w-full">
				<div className="h-full border-white border-b-2">
					<h1 className="text-[15vh] font-righteous  ">PROJECTS</h1>
				</div>
				{projects.map((item, i) => (
					<div
						className="font-righteous bg-black border-white border-b-2 text-white text-xl h-full"
						key={i}
					>
						{item.title}
					</div>
				))}
			</div>
		</div>
	);
};
