# Dos and Doughs
This is a repo for the bakery UI/UX project in our 2nd year at Hitachigymnasiet. The purpose is to build a website for a fictional bakery with a specified audience.

## Building and running
### Prerequisites
- [Node.js](https://nodejs.org)
- [Node Package Manager (npm)](https://www.npmjs.com/)
- Git (to clone the repo) or tools to extract a tarball or zip archive

### Obtaining source code
- Cloning using Git
```bash
git clone https://github.com/abbindustrigymnasium/ux-ui-dos-and-doughs.git
cd ux-ui-dos-and-doughs
```

### Development (with hot-reloading from Vite)
```bash
cd frontend-react
cd dos-and-doughs
npm run dev
```
### Building for production
```bash
cd frontend-react
cd dos-and-doughs
npm run build
```
After running the build command, a static bundle will be available under `dist/`, which can be served using any web server of choice, for example [Nginx](https://nginx.org), [Caddy](https://caddyserver.com/) or [Apache](https://httpd.apache.org/).