export function Hamburger() {
  return (
    <div className="row-start-1 col-start-2 justify-self-end lg:col-start-4">
      <div className="w-10 h-7 flex flex-col justify-between group">
        {[...new Array(3)].map((_, k) => (
          <div
            key={k}
            className="h-1.5 w-full rounded-sm bg-white bg-opacity-25 backdrop-filter backdrop-blur-md cursor-pointer group-hover:bg-opacity-40 transition-opacity"
          />
        ))}
      </div>
    </div>
  );
}
