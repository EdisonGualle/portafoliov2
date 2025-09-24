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
        className="w-full rounded-2xl border border-white/30 bg-white/60 py-3 pl-11 pr-12 text-sm text-base-content shadow-inner transition focus:border-primary focus:outline-none dark:border-white/10 dark:bg-white/10"
      />
      {query && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/60 text-xs text-base-content/60 transition hover:bg-primary/10 hover:text-primary dark:border-white/10 dark:bg-white/10"
          aria-label="Limpiar búsqueda"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar;
