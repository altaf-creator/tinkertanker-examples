export default function First({onClick}: any) {
  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-12 py-32 px-16 bg-white dark:bg-black sm:items-start">
      <h1 className="text-3xl font-bold">
        Select Area to check the temperature
      </h1>
      <p>This is created to track temperature hourly around Singapore.</p>
      <button
        onClick={onClick}
        className="px-8 py-4 bg-slate-100 text-slate-900 rounded-4xl cursor-pointer"
      >
        Start
      </button>
    </main>
  );
}