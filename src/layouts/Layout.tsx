import { Header } from "@/lib/components/shell/Header";
import { Toaster } from "@/lib/components/ui/toaster";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-primary text-primary-foreground min-h-screen w-full">
      <Header />
      {children}

      <Toaster />
    </main>
  );
}
