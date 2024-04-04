import { skills } from "@/public/data";
import { Container } from "./Container";

const coordinates = [
	{ top: 100, left: 100 },
	{ top: 100, left: 300 },
	{ top: 150, left: 600 },
	{ top: 100, left: 1100 },
	{ top: 250, left: 200 },
	{ top: 300, left: 500 },
	{ top: 200, left: 900 },
	{ top: 300, left: 1200 },
	{ top: 400, left: 50 },
	{ top: 450, left: 450 },
	{ top: 500, left: 700 },
	{ top: 350, left: 1000 },
	{ top: 600, left: 400 },
	{ top: 650, left: 700 },
	{ top: 550, left: 1000 },
	{ top: 500, left: 1300 },
];

export const Skills = () => {
	return (
		<Container bgColor="black" textColor="white" title="SKILLS">
			<div className="w-full relative h-full ">
				{skills.map((skill, i) => (
					<div
						style={{ top: coordinates[i].top, left: coordinates[i].left }}
						key={i}
						className="p-2 text-xl absolute text-center rounded-3xl bg-black text-white font-orbitron "
					>
						{skill.name}
					</div>
				))}
			</div>
		</Container>
	);
};
