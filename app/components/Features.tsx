import { features } from "@/public/data";
import { Container } from "./Container";

export const Features = () => {
	return (
		<Container textColor="black" bgColor="white" title="FEATURES">
			<div className="grid grid-cols-3 gap-20 w-full">
				{features.map((feature, i) => (
					<div
						key={i}
						className="flex flex-col justify-between text-center items-center gap-2 font-orbitron"
					>
						<h1 className="text-3xl ">{feature.title}</h1>
						<p className="text-sm">{feature.desc}</p>
					</div>
				))}
			</div>
		</Container>
	);
};
