import { FiSearch } from "react-icons/fi";

export function Search() {
  return (
    <div className="row-start-2 col-span-2 mt-5 lg:mt-0 lg:row-start-1 lg:col-start-2 lg:col-end-4 relative">
      <FiSearch size={24} className="text-white absolute z-10 top-3 left-3" />
      <label htmlFor="searchbeats">
        <input
          id="searchbeats"
          name="searchbeats"
          placeholder="search for beats..."
          aria-label="search music beats"
          className="w-full bg-white bg-opacity-25 backdrop-filter backdrop-blur-md py-3 px-12 rounded-sm placeholder-white hover:bg-opacity-40 transition-opacity focus:bg-opacity-40 focus:outline-none focus:ring-transparent focus:text-purple-900"
        />
      </label>
    </div>
  );
}
