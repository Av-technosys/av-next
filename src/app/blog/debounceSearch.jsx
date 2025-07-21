'use client';
import { SearchIcon } from 'lucide-react';
import React, { useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/navigation';

const DebounceSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = async (query) => {
    console.log('Searching for:', query);
    router.push(`/blog?search=${query}`);
  };

  const debouncedSearch = useCallback(
    debounce((query) => {
      handleSearch(query);
    }, 500),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <div className="flex min-h-80 w-full flex-col items-center justify-center space-y-8 bg-yellow-300/30 px-4 md:min-h-96">
      <h3 className="text-center text-3xl font-semibold text-neutral-700 md:text-4xl">
        Explore Our Latest Blogs & Insights
      </h3>
      <div className="flex w-full max-w-xl items-center justify-center rounded-3xl bg-white px-4 py-2.5 shadow transition-all focus-within:ring-2 focus-within:ring-blue-500">
        <input
          type="text"
          placeholder="Search blogs"
          value={searchTerm}
          onChange={handleChange}
          className="w-full bg-transparent px-2 py-1 text-sm placeholder-gray-400 focus:outline-none"
        />
        <SearchIcon size={20} className="text-gray-400" />
      </div>
    </div>
  );
};

export default DebounceSearch;
