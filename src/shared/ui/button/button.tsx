export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="min-w-40 rounded-md bg-(--color-primary) px-6 py-4 text-white">
      {children}
    </button>
  );
}
