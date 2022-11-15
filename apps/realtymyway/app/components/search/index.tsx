"use client";

export const Search = () => {
  return (
    <form className="flex items-center w-5/12 bg-app-white rounded p-2 text-4xl">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>

      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          className="border border-slate-300 text-slate-700 text-md rounded block w-full p-6 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white focus:outline-none capitalize"
          placeholder="Search by city, zip or address"
          required
        />
      </div>
      <button
        type="submit"
        className="py-6 px-16 ml-2 font-light text-4xl text-app-white bg-app-accent-secondary rounded-lg border border-app-accent-secondary hover:bg-app-accent transition-colors duration-600"
      >
        Search
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default Search;
