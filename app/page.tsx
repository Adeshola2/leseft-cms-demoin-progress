
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to LeSeft
        </h1>

        <p className="mt-4 text-gray-600">
          Your website and Sanity CMS integration are being configured.
        </p>

        <a
          href="/studio"
          className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white"
        >
          Open CMS Dashboard
        </a>
      </div>
    </main>
  );
}
