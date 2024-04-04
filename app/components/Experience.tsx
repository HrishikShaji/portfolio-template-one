import { experiences } from "@/public/data";
import { Container } from "./Container";

export const Experience = () => {
	return (
		<Container textColor="black" bgColor="white" title="EXPERIENCE">
			<div className="flex flex-col gap-4">
				{experiences.map((item, i) => (
					<div
						key={i}
						className="flex flex-col gap-2 items-center font-orbitron"
					>
						<h1 className="text-3xl ">{item.position}</h1>
						<h1 className="text-sm">{item.company}</h1>
					</div>
				))}
			</div>
		</Container>
	);
};
