export function Toolbox({ children }) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 py-8 lg:grid-cols-4 lg:grid-rows-1 lg:py-12 lg:items-center">
      {children}
    </div>
  );
}
