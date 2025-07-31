'use client'

import { useSearch } from './SearchProvider'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function SearchResults() {
  const { searchQuery, searchResults, isSearching, clearSearch } = useSearch()
  const resultsRef = useRef<HTMLDivElement>(null)

  // Close results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
        clearSearch()
      }
    }

    if (searchQuery) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [searchQuery, clearSearch])

  if (!searchQuery) return null

  return (
    <div
      ref={resultsRef}
      className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
    >
      {isSearching ? (
        <div className="p-4 text-center text-muted-foreground">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto mb-2"></div>
          Searching...
        </div>
      ) : searchResults.length > 0 ? (
        <div className="py-2">
          {searchResults.map((result) => (
            <Link
              key={result.id}
              href={result.url}
              onClick={clearSearch}
              className="block px-4 py-3 hover:bg-muted/50 transition-colors border-b border-border/50 last:border-b-0"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-foreground">
                      {result.title}
                    </span>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {result.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {result.excerpt}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {result.url}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-4 text-center text-muted-foreground">
          <p className="mb-2">No results found for "{searchQuery}"</p>
          <p className="text-xs">Try different keywords or check the spelling</p>
        </div>
      )}
      
      {searchResults.length > 0 && (
        <div className="border-t border-border/50 px-4 py-2 text-xs text-muted-foreground">
          {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
        </div>
      )}
    </div>
  )
} 