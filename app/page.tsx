import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { Testimonials } from "./components/Testimonials";

const components = [
	{ z: 45, component: <Hero /> },
	{ z: 40, component: <About /> },
	{ z: 35, component: <Features /> },
	{ z: 30, component: <Education /> },
	{ z: 25, component: <Experience /> },
	{ z: 20, component: <Skills /> },
	{ z: 15, component: <Projects /> },
	{ z: 10, component: <Testimonials /> },
	{ z: 5, component: <Pricing /> },
	{ z: 0, component: <Services /> },
	{ z: -10, component: <Contact /> },
];

export default function Home() {
	return (
		<main className="z-50 text-6xl ">
			{components.map((item, i) => (
				<div
					key={i}
					style={{ zIndex: item.z }}
					className=" sticky bottom-0  h-screen w-full"
				>
					{item.component}
				</div>
			))}
		</main>
	);
}
