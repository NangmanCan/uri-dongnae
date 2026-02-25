'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { District, SearchResult } from '@/types';

export default function AddressSearch() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const searchAddress = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      setResults(data.results || []);
      setShowResults(true);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchAddress(query);
  };

  const selectAddress = (result: SearchResult) => {
    const { district } = result;
    router.push(`/result?sido=${encodeURIComponent(district.sido)}&sigungu=${encodeURIComponent(district.sigungu)}&dong=${encodeURIComponent(district.dong)}&address=${encodeURIComponent(result.address)}`);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="주소를 입력하세요 (예: 강남구 역삼동)"
            className="w-full px-4 py-4 pr-12 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors bg-white text-gray-900 placeholder-gray-400"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-600 hover:text-blue-700 disabled:opacity-50"
          >
            {isLoading ? (
              <svg className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          </button>
        </div>
      </form>

      {/* 검색 결과 목록 */}
      {showResults && results.length > 0 && (
        <div className="mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          {results.map((result, index) => (
            <button
              key={index}
              onClick={() => selectAddress(result)}
              className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700">{result.address}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* 빠른 검색 버튼 */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => {
            setQuery('강남구 역삼동');
            searchAddress('강남구 역삼동');
          }}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/80 hover:text-white transition-colors border border-white/20"
        >
          🏢 강남구
        </button>
        <button
          onClick={() => {
            setQuery('종로구');
            searchAddress('종로구');
          }}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/80 hover:text-white transition-colors border border-white/20"
        >
          🏛️ 종로구
        </button>
      </div>
    </div>
  );
}
