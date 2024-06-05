import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/lib/components/magicui/animated-beam";
import React, { forwardRef, useRef } from "react";
import { TechIconPopover } from "./TechIconPopover";
import { icons } from "@/pages/icons";

export function TechIconBeams() {
	const containerRef = useRef<HTMLDivElement>(null);
	const div1Ref = useRef<HTMLDivElement>(null);
	const div2Ref = useRef<HTMLDivElement>(null);
	const div3Ref = useRef<HTMLDivElement>(null);
	const div4Ref = useRef<HTMLDivElement>(null);
	const div5Ref = useRef<HTMLDivElement>(null);
	const div6Ref = useRef<HTMLDivElement>(null);
	const div7Ref = useRef<HTMLDivElement>(null);

	return (
		<div
			className="relative flex w-[99vw] max-w-[500px] items-center justify-center overflow-hidden p-10"
			ref={containerRef}
		>
			<div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div1Ref}>
						<TechIconPopover {...icons.bun} />
					</Circle>
					<Circle ref={div5Ref}>
						<TechIconPopover {...icons.tailwind} />
					</Circle>
				</div>
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div2Ref}>
						<TechIconPopover {...icons.react} />
					</Circle>
					<Circle ref={div4Ref} className="h-16 w-16">
						<TechIconPopover {...icons.vite} />
					</Circle>
					<Circle ref={div6Ref}>
						<TechIconPopover {...icons.shadcn} />
					</Circle>
				</div>
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div3Ref}>
						<TechIconPopover {...icons.typescript} />
					</Circle>
					<Circle ref={div7Ref}>
						<TechIconPopover {...icons.typescript} />
					</Circle>
				</div>
			</div>

			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div1Ref}
				toRef={div4Ref}
				curvature={-75}
				endYOffset={-10}
				reverse={true}
				className="bg-primary "
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div2Ref}
				toRef={div4Ref}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div3Ref}
				toRef={div4Ref}
				curvature={75}
				endYOffset={10}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div5Ref}
				toRef={div4Ref}
				curvature={-75}
				reverse
				endYOffset={-10}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div6Ref}
				toRef={div4Ref}
				reverse
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div7Ref}
				toRef={div4Ref}
				curvature={75}
				reverse
				endYOffset={10}
			/>
		</div>
	);
}

const Circle = forwardRef<
	HTMLDivElement,
	{ className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				"z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
				className,
			)}
		>
			{children}
		</div>
	);
});
