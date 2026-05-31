# Open application: 
[https://pronink.github.io/mermaid-paste/?m=compressed...](https://pronink.github.io/mermaid-paste/?m=eJyVVE1z2jAQvedXaLjnD_TGgJswnQBjoJ2cNFtJwZpYkiutmxLIf69kZOMvaOqDMdq3u29X-1bYuYS9BXVH_DPbbbarpyQlp9P9vTmSVTpP0g35QiZFDky4yShq87hYrxfLBzqdz9NkU-EziOAYIkBPMSBdbJOnAGJGI0g9RMagT8lyG3BcugKQZTWBdbqa72ZbOptuk4dV-lz7xPMqNKDYGyvfez6dyhoixnJhBScwDl4sv3smIZHHOjTs1WOlPmN_TNPkcbXbJNfQtqEwfa4qGjYXDo68GDu56_b3WP0Nj9RIWOmDKWGp5GT9rTE5tFLviVAg8_7hi7QOqQYl-pYcrhgKcO7N94P6G8waI_ftRKkEYVb4T04BK9tH9a5egynosgfOfSNcj3y_rq-DuvyPENg_ZRIPQ6Rn1j98lwVlhg_OmSk12kMsoj1_XdrVZHyedDC5TBaFz0FbJbcgTSvPofkI6VBJ6S4egkkFOUGDkFNQgfqA-HmWR8mjUCMVNJX16BfW8JLhiOVXCRrbja-JFVYy0WZU6-d4LXK_m2e1HsZHoDOmKP6gT-yYlQVKo2-QaS4kKJZ22Hd5XhbJ8SqtoeL-TStmuSyEbnipfwuNw_i3b-ENrMhM6cSNG6JGe_1q3mZx2VPH6_GGVebGd8EXNLos4oS30zR7u5sliEL5aj85iDE-WmCvQUq6VD-FHWqo0ppfR2MqYmCtjE71fccN3JtLOPwHtSZ37dbJXU9hS6UtSrWLEpgZfkP2H38BXw4knQ)

---------------------

---------------------

---------------------

---------------------

---------------------

---------------------

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
