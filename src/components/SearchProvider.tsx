'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { SearchResult, searchIndex } from '../data/searchIndex'

interface SearchContextType {
  searchQuery: string
  setSearchQuery: (query: string) => void
  searchResults: SearchResult[]
  isSearching: boolean
  clearSearch: () => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}

interface SearchProviderProps {
  children: ReactNode
}

function searchDocuments(query: string): SearchResult[] {
  if (!query.trim()) return []
  
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0)
  
  return searchIndex
    .map(doc => {
      let score = 0
      const titleLower = doc.title.toLowerCase()
      const contentLower = doc.content.toLowerCase()
      const excerptLower = doc.excerpt.toLowerCase()
      
      searchTerms.forEach(term => {
        // Title matches get highest score
        if (titleLower.includes(term)) score += 10
        // Content matches get medium score
        if (contentLower.includes(term)) score += 5
        // Excerpt matches get lower score
        if (excerptLower.includes(term)) score += 3
        // Category matches get bonus
        if (doc.category.toLowerCase().includes(term)) score += 2
      })
      
      return { ...doc, score }
    })
    .filter(doc => doc.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10) // Limit to top 10 results
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true)
      // Simulate search delay for better UX
      const timeoutId = setTimeout(() => {
        const results = searchDocuments(searchQuery)
        setSearchResults(results)
        setIsSearching(false)
      }, 150)
      
      return () => clearTimeout(timeoutId)
    } else {
      setSearchResults([])
      setIsSearching(false)
    }
  }, [searchQuery])

  const clearSearch = () => {
    setSearchQuery('')
    setSearchResults([])
    setIsSearching(false)
  }

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        isSearching,
        clearSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  )
} 