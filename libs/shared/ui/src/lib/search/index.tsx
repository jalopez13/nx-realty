// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISearch {}

export const Search = (props: ISearch) => {
  return (
    <form className="w-full max-w-[1000px] mx-auto px-4 bg-black/60 pt-4 pb-6 pl-6 pr-6 rounded-lg text-white">
      <div className="py-4">
        <div className="flex gap-4">
          <a
            href="/"
            className="search-link search-link-active dark:text-white  hover:text-white hover:underline hover:underline-offset-4"
            aria-label="search buy link text-lg"
          >
            Buy
          </a>

          <a
            href="/recently-sold"
            className="search-link  hover:text-white hover:underline hover:underline-offset-4"
            aria-label="search recently sold link text-lg"
          >
            Sell
          </a>
        </div>
      </div>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-brand-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm rounded-lg border-gray-600/20 border-4 text-brand-dark bg-brand-light/90  placeholder-brand-dark/70 outline-brand font-semibold text-slate-700"
          placeholder="Enter an address, city or zip..."
          required
        />
        <button
          type="submit"
          className="absolute shadow right-2.5 bottom-2.5 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 duration-500 text-white bg-slate-700"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
