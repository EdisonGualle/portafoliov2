import { ChangeEvent } from 'react';

import { useUIStore } from '@stores/uiStore';

const SearchBar = (): JSX.Element => {
  const query = useUIStore((state) => state.searchQuery);
  const setSearchQuery = useUIStore((state) => state.setSearchQuery);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const clearSearch = () => setSearchQuery('');

  return (
    <div className="relative w-full max-w-sm">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">⌕</span>
      <input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="Buscar proyectos, artículos o skills"
        className="w-full rounded-2xl border border-base-300 bg-base-100 py-3 pl-11 pr-12 text-sm shadow-sm transition focus:border-primary focus:outline-none"
      />
      {query && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-base-200 text-xs text-base-content/60 hover:bg-base-300"
          aria-label="Limpiar búsqueda"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar;
