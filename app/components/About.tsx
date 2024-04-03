import { about } from "@/public/data";

export const About = () => {
	return (
		<div className="h-full w-full bg-black  text-white flex items-center justify-center">
			<div className="flex flex-col gap-10 p-10">
				<h1 className="font-righteous text-6xl">ABOUT</h1>
				<p className="font-orbitron text-xl">{about}</p>
			</div>
		</div>
	);
};
