import { testimonials } from "@/public/data";
import { Container } from "./Container";

export const Testimonials = () => {
	return (
		<Container textColor="white" bgColor="black" title="TESTIMONIALS">
			<div className="flex  gap-4">
				{testimonials.map((item, i) => (
					<div
						key={i}
						className="flex flex-col gap-2 items-center font-orbitron"
					>
						<h1 className="text-3xl ">{item.name}</h1>
						<h1 className="text-sm">{item.desc}</h1>
					</div>
				))}
			</div>
		</Container>
	);
};
