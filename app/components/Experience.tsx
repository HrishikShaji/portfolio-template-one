import { experiences } from "@/public/data";
import { Container } from "./Container";

export const Experience = () => {
	return (
		<Container textColor="black" bgColor="white" title="EXPERIENCE">
			<div className="flex flex-col h-full gap-10 justify-center">
				{experiences.map((item, i) => (
					<div key={i} className="flex items-center gap-10 font-orbitron">
						<div className="h-10 w-10  rounded-full bg-black"></div>
						<div className="flex flex-col gap-2">
							<h1 className="text-3xl ">{item.position}</h1>
							<h1 className="text-2xl">{item.company}</h1>
							<p className="text-sm">{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
};
