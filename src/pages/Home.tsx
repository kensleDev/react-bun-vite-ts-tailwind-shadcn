import BoxReveal from "@/lib/components/magicui/box-reveal";
import { useQueries } from "@tanstack/react-query"
import { Suspense, useEffect, useState } from "react";
import { fetchMessages } from "@/lib/repo";
import { icons } from "./icons";
import { TechIconBeams } from "@/lib/components/TechIconBeams";
import { TechList } from "@/lib/components/TechList";
import { GettingStarted } from "@/lib/components/GettingStarted";
import { ServerConnected } from "@/lib/components/ServerConnected";

export function Home() {
	const [serverStatus, setServerStatus] = useState(false);

	const [messagesQuery] = useQueries({
		queries: [
			{
				queryKey: ["messages"],
				queryFn: fetchMessages,
			},
		]
	})

	useEffect(() => {
		if (messagesQuery.data) {
			setServerStatus(true)
		} else {
			setServerStatus(false)
		}
	}, [])


	// if (messagesQuery.error)
	// 	return 'An error has occurred: ' + messagesQuery.error.message;

	console.log({ icons })

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<section className="w-full max-w-md lg:max-w-[1024px] mx-auto flex flex-col items-center">
				<ServerConnected status={serverStatus} fetchStatus={messagesQuery.refetch} />

				<BoxReveal boxColor="hsl(var(--accent))" duration={0.5}>
					<h1
						className="text-5xl font-bold mb-4"
					>Welcome</h1>
				</BoxReveal>

				<BoxReveal boxColor="hsl(var(--accent))" duration={0.8}>
					<TechIconBeams />
				</BoxReveal>


				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 p-4 justify-center items-center">
					<TechList />

					<GettingStarted />
				</div>
			</section>
		</Suspense>
	)
}

