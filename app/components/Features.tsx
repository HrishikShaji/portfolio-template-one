import { features } from "@/public/data";

export const Features = () => {
	return (
		<div className="h-full w-full bg-white  text-black flex items-center justify-center">
			<div className="flex flex-col gap-10 p-10">
				<h1 className="font-righteous text-6xl">FEATURES</h1>
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
			</div>
		</div>
	);
};
