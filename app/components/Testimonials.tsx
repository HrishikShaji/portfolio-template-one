import { testimonials } from "@/public/data";
import { Container } from "./Container";
import Image from "next/image";

export const Testimonials = () => {
	return (
		<Container textColor="white" bgColor="black" title="TESTIMONIALS">
			<div className="flex  gap-40  overflow-x-scroll  h-full">
				{testimonials.map((item, i) => (
					<div key={i} className="h-full font-orbitron">
						<div
							key={i}
							className="w-[500px] h-full flex flex-col items-center text-center gap-10"
						>
							<Image
								className="h-[200px] flex-shrink-0 w-[200px] rounded-full object-cover"
								src={item.img}
								alt="image"
								height={1000}
								width={1000}
							/>
							<h1 className="text-3xl ">{item.name}</h1>
							<h1 className="text-sm flex-wrap">{item.desc}</h1>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
};
