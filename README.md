## Compound

<blockquote>Noun: A thing that is composed of two or more separate elements</blockquote>

Compound is the default Emulsify system, and currently includes a variants for Drupal.

## Development

- Ensure you're using the correct node/npm version `nvm use`
- Install dependencies `npm install`
- Run the develop script `npm run develop`

That should spin up a local server (typically at `http://localhost:6006`) that you can open in your browser, to see the components in a Storybook instance. It will also watch for updates to your code, so any changes you make will be reflected in the Storybook instance live, any time you save.

## Contributing Components

Compound is a completely open source set of components that work with each other. If you find yourself using these components as starter files in your projects, feel free to contribute your own components to the repo!

When you do, remember to add it to the `system.emulsify.json` file so that it's exposed to the CLI! You can place it wherever is appropriate inside the `variants > components` section.

If the component has dependencies, be sure to identify them, so that the CLI knows to install them as well. Here's an example of the card component declaring its dependencies:

```
{
  "name": "card",
  "structure": "molecules",
  "dependency": ["images", "text", "links", "buttons"]
},
```
