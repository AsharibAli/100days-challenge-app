"use client";
import React, { useState, useEffect } from "react";
// import SearchIcon from "@/components/icons/icons"; // Make sure you have the correct path to your SearchIcon component
import * as questions from "@/components/questions"; // Import all question components
import { SearchIcon } from "lucide-react";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearchChange = (event:any) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const searchQuestions = async (query:any) => {
      if (!query) return [];

      const results = [];

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

    const fetchResults = async () => {
      const searchResults = await searchQuestions(searchQuery);
      setResults(searchResults);
    };

    fetchResults();
  }, [searchQuery]);

  return (
    <div>
      <div className="relative w-1/2 md:w-1/3 lg:w-1/4">
        <input
          className="text-black w-full h-10 px-4 rounded-md border-2 border-gray-300 focus:border-blue-500 transition-colors"
          placeholder="Search..."
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-2/4 w-5 h-5 text-gray-500" />
      </div>

      <div>
        {results.map((result, index) => (
          <div key={index}>{result.component}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
