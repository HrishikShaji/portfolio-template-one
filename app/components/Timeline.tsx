import { educations, experiences } from "@/public/data";

export const Timeline = () => {
	return (
		<div className="h-full w-full bg-black  text-white flex p-10">
			<div className="w-[50%] h-full justify-center flex flex-col gap-10 items-center">
				<h1 className="text-6xl font-righteous">EDUCATION</h1>
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
			</div>
			<div className="w-[50%] h-full justify-center flex flex-col gap-10 items-center">
				<h1 className="text-6xl font-righteous">EXPERIENCE</h1>
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
			</div>
		</div>
	);
};
