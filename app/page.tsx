export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 text-center">
      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Seojin Park</h1>

      {/* href is intentionally omitted for now — these are placeholders. */}
      <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-lg">
        <a className="underline underline-offset-4">E-mail</a>
        <a className="underline underline-offset-4">Discord</a>
        <a className="underline underline-offset-4">Instagram</a>
      </nav>
    </main>
  );
}
