import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";

const components = [
	{ z: 45, component: <Hero /> },
	{ z: 40, component: <About /> },
	{ z: 35, component: <Features /> },
	{ z: 30, component: <Timeline /> },
	{ z: 25, component: <Skills /> },
	{ z: 20, component: <Projects /> },
	{ z: 15, component: <Contact /> },

]

export default function Home() {
	return (
		<main className="z-50 text-6xl ">{
			components.map((item, i) => (
				<div key={i} style={{ zIndex: item.z }} className=" sticky bottom-0  h-screen w-full">
					{item.component}
				</div>
			))
		}
		</main>
	);
}
