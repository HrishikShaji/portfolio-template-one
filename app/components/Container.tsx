import { ReactNode } from "react";

interface ContainerProps {
	title: string;
	children: ReactNode;
	bgColor: string;
	textColor: string;
}

export const Container: React.FC<ContainerProps> = ({
	title,
	children,
	bgColor,
	textColor,
}) => {
	return (
		<div
			className={`bg-${bgColor} h-screen w-full text-${textColor} p-10 flex flex-col gap-10 `}
		>
			<h1 className="text-9xl font-righteous">{title}</h1>
			{children}
		</div>
	);
};
