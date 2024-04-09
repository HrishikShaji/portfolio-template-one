import { educations } from "@/public/data";
import { Container } from "./Container";

export const Education = () => {
	return (
		<Container textColor="white" bgColor="black" title="EDUCATION">
			<div className="flex flex-col h-full gap-10 justify-center">
				{educations.map((item, i) => (
					<div key={i} className="flex items-center gap-10 font-orbitron">
						<div className="h-10 w-10  rounded-full bg-white"></div>
						<div className="flex flex-col gap-2">
							<h1 className="text-3xl ">
								{item.degreeType} of {item.major}
							</h1>
							<h1 className="text-2xl">{item.university}</h1>
							<p className="text-sm">{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
};
