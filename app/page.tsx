export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Seojin Park</h1>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-lg">
          <a
            className="underline underline-offset-4"
            href="mailto:motsuni04@gmail.com"
          >
            E-mail
          </a>
          <a
            className="underline underline-offset-4"
            href="https://discord.com/users/394116972176080916"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          <a
            className="underline underline-offset-4"
            href="https://instagram.com/motsuni04"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </nav>
      </main>
      <footer className="w-full border-t border-black/10 px-6 py-4 text-center dark:border-white/10">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <span className="flex items-center gap-2">
            <a
              className="underline underline-offset-4"
              href="https://panel.sjpark.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗서비스 상태
            </a>
            <a
              className="text-foreground/70 underline underline-offset-4"
              href="https://panel.sjpark.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              panel.sjpark.dev
            </a>
          </span>
          <span className="flex items-center gap-2">
            <a
              className="underline underline-offset-4"
              href="https://sjpark.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗사이트
            </a>
            <a
              className="text-foreground/70 underline underline-offset-4"
              href="https://sjpark.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              sjpark.dev
            </a>
          </span>
        </nav>
      </footer>
    </>
  );
}
