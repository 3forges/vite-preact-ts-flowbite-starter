# The Novu POC

## Spin up


```bash
pnpm add -D tailwindcss postcss autoprefixer
# npx tailwindcss init -p
pnpm dlx  tailwindcss init -p

cat <<EOF >./tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
EOF

cat << EOF>./src/index.addon.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

cp ./src/index.css ./src/index.previous.css

cat ./src/index.addon.css | tee ./src/index.css
cat ./src/index.previous.css | tee -a ./src/index.css

pnpm add --save flowbite flowbite-react
pnpm add --save flowbite flowbite-react
pnpm add @reduxjs/toolkit
pnpm add react-redux
pnpm add axios
cat << EOF>> ./src/vite-env.d.ts
declare module 'react';
EOF

```


## References

* https://flowbite.com/docs/getting-started/react/
* https://flowbite.com/docs/getting-started/quickstart/#typescript
* https://flowbite.com/docs/getting-started/typescript/
* https://www.flowbite-react.com/