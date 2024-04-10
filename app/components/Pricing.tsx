import { pricings } from "@/public/data";
import { Container } from "./Container";

export const Pricing = () => {
	return (
		<Container textColor="black" bgColor="white" title="PRICING">
			<div className="flex gap-20 h-full w-full items-center justify-center">
				{pricings.map((item, i) => (
					<div
						className="flex flex-col gap-2 w-[400px] font-orbitron text-center"
						key={i}
					>
						<h1 className="text-4xl">{item.name}</h1>
						<h1 className="text-3xl">{item.rate}</h1>
						<h1 className="text-xl">{item.description}</h1>
					</div>
				))}
			</div>
		</Container>
	);
};
