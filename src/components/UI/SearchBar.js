export default function SearchBar({classes}) {
    return (
      <div className={classes}>
        <div className="mt-2">
          <input
            id="search"
            name="search"
            type="text"
            placeholder="Search for event"
            className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    )
  }