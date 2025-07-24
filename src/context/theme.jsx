import { createContext } from 'react';

/**
 * Creates the ThemeContext.
 *
 * We initialize it with `null`. This is a common practice that allows our
 * custom hook (`useTheme`) to check if a component is wrapped in the
 * ThemeProvider. If it's not, the context will be `null`, and our hook
 * can throw an error to let us know we've made a mistake.
 */
export const ThemeContext = createContext(null);