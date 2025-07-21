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
    // const data = await getAllBlogsBySearch(query);
    // console.log('data', data);
  };

  const debouncedSearch = useCallback(
    debounce((query) => {
      handleSearch(query);
    }, 500), // 500ms delay
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <>
      <div className="ml-auto flex max-w-xs items-center justify-center rounded-lg bg-white/10 px-4 py-2 shadow-md transition-all focus-within:ring-2 focus-within:ring-blue-500 sm:w-auto">
        <input
          type="text"
          placeholder="Search blogs"
          value={searchTerm}
          onChange={handleChange}
          className="w-full bg-transparent px-2 py-1 text-sm placeholder-gray-400 focus:outline-none"
        />
        <SearchIcon size={20} className="text-gray-400" />
      </div>
    </>
  );
};

export default DebounceSearch;
