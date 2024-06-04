import BoxReveal from "./magicui/box-reveal";

export function TechList() {

	return (
		<ul className="gap-4 flex flex-col">
			<BoxReveal boxColor="hsl(var(--accent))" duration={0.5}>
				<li>📦 Bundle and build with Vite</li>
			</BoxReveal>

			<BoxReveal boxColor="hsl(var(--accent))" duration={0.6}>
				<li>💻 React</li>
			</BoxReveal>

			<BoxReveal boxColor="hsl(var(--accent))" duration={0.7}>
				<li>✅ Typescript of course</li>
			</BoxReveal>

			<BoxReveal boxColor="hsl(var(--accent))" duration={0.8}>
				<li>🎨 Styled with Tailwind</li>
			</BoxReveal>

			<BoxReveal boxColor="hsl(var(--accent))" duration={0.9}>
				<li>🍱 UI Components from ShadCN UI</li>
			</BoxReveal>

			<BoxReveal boxColor="hsl(var(--accent))" duration={1}>
				<li>🎥 Animated Components from MagicUI</li>
			</BoxReveal>
		</ul>
	)
}
