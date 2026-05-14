export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-6">
      <div className="max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-6">
          My Website
        </p>
        <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight mb-6">
          Coming soon.
        </h1>
        <p className="text-lg text-slate-300 mb-10">
          We&apos;re putting the finishing touches on something great. Check
          back shortly.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          action="#"
          method="post"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            className="flex-1 rounded-md bg-white/10 border border-white/15 px-4 py-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <button
            type="submit"
            className="rounded-md bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-200 transition-colors"
          >
            Notify me
          </button>
        </form>
      </div>
    </main>
  );
}
