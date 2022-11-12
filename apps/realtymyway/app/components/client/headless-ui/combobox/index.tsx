"use client ";

import { Combobox } from "@headlessui/react";
import { use, useState } from "react";
import { initializeApollo } from "../../../../../graphql/apollo-client";
import { Properties_By_LocationDocument } from "../../../../../graphql/generated";

const getSuggestions = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: Properties_By_LocationDocument,
    variables: {
      q: "los",
    },
    fetchPolicy: "no-cache",
  });

  return data.properties_by_location.results;
};

const dataPromise = getSuggestions();

export const revalidate = 1500;

export const HUICombobox = () => {
  const suggestions = use(dataPromise);
  console.log("suggestions: ", suggestions);

  const [selectedQuery, setSelectedQuery] = useState("");
  const [query, setQuery] = useState("");

  const results = [
    { id: 1, displayName: "foo" },
    { id: 2, displayName: "bar" },
  ];

  return (
    <form className="flex flex-row justify-center w-5/12 rounded">
      <div className="relative w-full">
        <div className="absolute inset-0">
          <Combobox value={selectedQuery} onChange={setSelectedQuery}>
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>

            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
              displayValue={() => selectedQuery}
              placeholder="Search for homes for sell by Zip, City or address..."
              className="text-app-text text-2xl rounded block w-full p-7 focus:outline-none capitalize mb-1"
              autoComplete="false"
            />

            <Combobox.Options className="bg-app-white text-app-text rounded overflow-hidden">
              {results.map((item) => (
                <Combobox.Option
                  key={item.displayName}
                  value={item.displayName}
                  className="ui-active:bg-app-secondary ui-active:text-app-white ui-not-active:bg-white ui-not-active:text-app-text p-4 text-xl font-semibold"
                >
                  {item.displayName}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>
        </div>
      </div>

      <button
        type="submit"
        className="py-6 px-16 ml-2 font-light text-4xl text-app-white bg-app-accent rounded-lg border border-app-accent-secondary hover:bg-app-secondary transition-colors duration-600"
      >
        Search
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};
export default HUICombobox;
