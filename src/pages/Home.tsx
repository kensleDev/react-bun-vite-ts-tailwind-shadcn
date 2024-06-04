import BoxReveal from "@/lib/components/magicui/box-reveal";
import { useQueries } from "@tanstack/react-query"
import { Suspense } from "react";
import { fetchMessages } from "@/lib/repo";
import { icons } from "./icons";
import { TechIconBeams } from "@/lib/components/TechIconBeams";
import { TechList } from "@/lib/components/TechList";
import { motion } from 'framer-motion'

export function Home() {
	const [messagesQuery] = useQueries({
		queries: [
			{
				queryKey: ["messages"],
				queryFn: fetchMessages,
			},
		]
	})

	if (messagesQuery.error)
		return 'An error has occurred: ' + messagesQuery.error.message;

	console.log({ icons })

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<section className="w-full max-w-md mx-auto flex flex-col items-center">
				<BoxReveal boxColor="hsl(var(--accent))" duration={0.5}>
					<h1
						className="text-5xl font-bold mb-4"
					>Welcome</h1>
				</BoxReveal>

				{messagesQuery.data?.map((message) => <p key={message.id}>{message.content}</p>)}

				<BoxReveal boxColor="hsl(var(--accent))" duration={0.8} width="100%">
					<TechIconBeams />
				</BoxReveal>

				<TechList />
			</section>

		</Suspense>
	)
}

