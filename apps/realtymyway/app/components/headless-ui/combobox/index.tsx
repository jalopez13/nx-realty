"use client";

import { Combobox } from "@headlessui/react";
import { useState } from "react";

// import { initializeApollo } from "../../../../graphql/apollo-client";
// import { Properties_By_LocationDocument } from "../../../../graphql/generated";

// const getSuggestions = async () => {
//   const apolloClient = initializeApollo();

//   const { data } = await apolloClient.query({
//     query: Properties_By_LocationDocument,
//     variables: {
//       q: "los",
//     },
//     fetchPolicy: "no-cache",
//   });

//   return data.properties_by_location.results;
// };

// // const dataPromise = getSuggestions();

// export const revalidate = 1500;

const people = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

export const HUICombobox = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <form className="w-full container relative flex flex-col lg:flex-row gap-4 justify-center items-center text-2xl max-w-6xl bg-app-background rounded p-6 mt-12">
      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>

        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          displayValue={() => query}
          placeholder="Search for homes for sell by Zip, City or address..."
          className="w-full p-4 rounded focus:ring-0 border border-slate-200"
          autoComplete="false"
        />

        <Combobox.Options className="bg-app-white text-app-text rounded overflow-hidden absolute inset-0 top-0 w-full ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black">
          {/* {suggestions.map((item) => (
            <Combobox.Option
              key={item.displayName}
              value={item.displayName}
              className="ui-active:bg-app-secondary ui-active:text-app-white ui-not-active:bg-white ui-not-active:text-app-text p-4 text-xl font-semibold"
            >
              {item.displayName}
            </Combobox.Option>
          ))} */}

          {filteredPeople.map((person) => (
            <Combobox.Option key={person} value={person}>
              {person}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>

      <button
        type="button"
        className="w-full lg:w-auto inline-block bg-app-accent text-white  leading-tight capitalize rounded shadow-md hover:bg-app-accent-secondary hover:shadow-lg focus:bg-app-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-app-secondary active:shadow-lg transition duration-150 ease-in-out py-[14] px-9 m-0"
      >
        Search
      </button>
    </form>
  );
};
export default HUICombobox;
