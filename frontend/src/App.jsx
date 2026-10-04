import { Link, Route, Routes } from 'react-router-dom';

function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Expense &amp; Budget Tracker</h1>
      <p className="mt-3 text-gray-600">Your frontend setup is ready.</p>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <Link className="mt-3 inline-block text-blue-700 underline" to="/">
        Return home
      </Link>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}