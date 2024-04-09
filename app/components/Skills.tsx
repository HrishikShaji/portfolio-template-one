import { skills } from "@/public/data";
import { Container } from "./Container";

export const Skills = () => {
	return (
		<Container bgColor="black" textColor="white" title="SKILLS">
			<div className="h-full w-full flex justify-center items-center">
				<div className="w-[50%] items-center justify-center gap-10 flex flex-wrap">
					{skills.map((skill, i) => (
						<h1
							key={i}
							className="p-2 text-xl rounded-3xl bg-white text-black text-center   font-orbitron "
						>
							{skill.name}
						</h1>
					))}
				</div>
			</div>
		</Container>
	);
};
