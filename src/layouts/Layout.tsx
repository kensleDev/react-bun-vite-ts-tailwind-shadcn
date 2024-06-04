import { Header } from "@/lib/components/shell/Header";

export function Layout({ children }: { children: React.ReactNode }) {
	return <main className="bg-primary text-primary-foreground min-h-screen w-full">
		<Header />
		{children}
	</main>;
}
