import { ChangeEvent, FormEvent, useState } from 'react';

import { useUIStore } from '@stores/uiStore';

const SearchBar = (): JSX.Element => {
  const query = useUIStore((state) => state.searchQuery);
  const setSearchQuery = useUIStore((state) => state.setSearchQuery);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const clearSearch = () => setSearchQuery('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      className="group relative w-full max-w-sm"
      onSubmit={handleSubmit}
      role="search"
      aria-label="Buscar en el portafolio"
    >
      <div
        className="absolute inset-0 rounded-3xl border border-base-200/60 bg-base-100/70 shadow-lg shadow-base-200/20 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-primary/20"
        style={{ boxShadow: isFocused ? '0 12px 30px -18px rgba(37, 99, 235, 0.45)' : undefined }}
      />
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-base-content/40 transition-colors duration-200 group-hover:text-primary/80">
        ⌕
      </span>
      <input
        type="search"
        value={query}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Explorar proyectos, artículos o skills"
        className="relative w-full rounded-3xl bg-transparent py-3 pl-12 pr-16 text-sm text-base-content placeholder:text-base-content/40 focus:outline-none"
      />
      {query && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-base-200/80 text-xs text-base-content/60 transition hover:bg-base-300"
          aria-label="Limpiar búsqueda"
        >
          ×
        </button>
      )}
      <button
        type="submit"
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 items-center gap-2 rounded-2xl bg-primary/90 px-3 py-1 text-xs font-semibold text-white shadow hover:bg-primary"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
