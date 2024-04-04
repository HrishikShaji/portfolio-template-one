import { educations } from "@/public/data";
import { Container } from "./Container";

export const Education = () => {
	return (
		<Container textColor="white" bgColor="black" title="EDUCATION">
			<div className="flex flex-col gap-4">
				{educations.map((item, i) => (
					<div
						key={i}
						className="flex flex-col gap-2 items-center font-orbitron"
					>
						<h1 className="text-3xl ">
							{item.degreeType} of {item.major}
						</h1>
						<h1 className="text-sm">{item.university}</h1>
					</div>
				))}
			</div>
		</Container>
	);
};
