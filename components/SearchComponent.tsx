"use client";
import React, { useState, useEffect } from "react";
import { SearchIcon } from "lucide-react";
import * as questions from "@/components/questions"; // Import all question components

// Define the type for search results
type SearchResult = {
  name: string;
  component: JSX.Element;
};

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]); // Initialize with the correct type

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const searchQuestions = (query: string): SearchResult[] => {
      if (!query) return [];

      const results: SearchResult[] = [];

      for (const [key, Component] of Object.entries(questions)) {
        const content = Component.toString().toLowerCase();

        if (content.includes(query.toLowerCase())) {
          results.push({
            name: key,
            component: <Component />,
          });
        }
      }

      return results;
    };

    const fetchResults = () => {
      const searchResults = searchQuestions(searchQuery);
      setResults(searchResults);
    };

    fetchResults();
  }, [searchQuery]);

  return (
    <div className="relative w-full md:w-full lg:w-96">
      {" "}
      {/* Adjusted widths for better responsiveness */}
      <input
        className="text-black w-full h-10 px-4 rounded-md border-2 border-gray-300 focus:border-blue-500 transition-colors"
        placeholder="Search..."
        type="text"
        value={searchQuery}
        onChange={handleSearch}
      />
      <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      {searchQuery && (
        <div className="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-full">
          {results.map((result, index) => (
            <div key={index} className="p-4">
              <h3 className="font-semibold">{result.name}</h3>
              {result.component}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
