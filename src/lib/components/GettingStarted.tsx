export function GettingStarted() {
  return (
    <section className="flex flex-col items-center justify-center h-full pt-4 lg:pt-0 lg:ml-12">
      <p className="pb-4">To get started run: </p>
      <pre className="flex flex-col bg-slate-800 rounded-2xl p-6 leading-12">
        <code>bun install</code>
        <code>bun run dev</code>
        <code>bun run server</code>
      </pre>
    </section>
  );
}
