# Dos and Doughs
This is a repo for the bakery UI/UX project in our 2nd year at Hitachigymnasiet. The purpose is to build a website for a fictional bakery with a specified audience.

## Style guide
A style guide is available in `STYLE.md`.

## Tech stack
- [Figma](https://figma.com) - for prototyping and designing the user interface prior to implementing
- [React](https://react.dev/) - a popular frontend JavaScript framework
- [Vite](https://vite.dev/) - a build tool and bundler for JavaScript
- [Typescript](https://www.typescriptlang.org/) - enhances JavaScript by adding type checks to variables
- [Node.js](https://nodejs.org) - a way to execute JavaScript outside the browser


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
npm install
npm run dev
```
### Building for production
```bash
cd frontend-react
cd dos-and-doughs
npm install
npm run build
```
After running the build command, a static bundle will be available under `dist/`, which can be served using any web server of choice, for example [Nginx](https://nginx.org), [Caddy](https://caddyserver.com/) or [Apache](https://httpd.apache.org/).

## Support
Contact [hannes.gingby@hitachigymnasiet.se](mailto:hannes.gingby@hitachigymnasiet.se) for questions about the frontend and [eric.thorburn@hitachigymnasiet.se](mailto:eric.thorburn@hitachigymnasiet.se) for questions about deploying the code. For other questions about our brand, contact [alwin.forslund@hitachigymnasiet.se](mailto:alwin.forslund@hitachigymnasiet.se).

## Development

### Missing features
- Working logic for cart and checkout
- Improve cross-browser support by referencing e.g. [caniuse.com](https://caniuse.com) and [MDN](https://developer.mozilla.org/)
- Improve animation performance, or make user able to disable the animations

### Ideas for development
- Make real business logic work (by integrating for example [Stripe](https://stripe.com), [Twilio](https://www.twilio.com/))
- Generally polish the user experience, and put extra care towards [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) compliance
- Clean up the codebase and remove old code

## Contributors
- Hannes Jonas Gingby
- Eric William Thorburn
- Alwin Kjell Urban Forslund

## License
This code is licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0.txt).
Some images in this repo may come from [Unsplash](https://unsplash.com), and are subject to the terms of the Unsplash License.