import type { PropsWithChildren } from 'react';

import ThemeProvider from './ThemeProvider';

const AppProviders = ({ children }: PropsWithChildren): JSX.Element => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProviders;
