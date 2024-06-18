[![Emulsify Design System](https://user-images.githubusercontent.com/409903/170579210-327abcdd-2c98-4922-87bb-36446a4cc013.svg)](https://www.emulsify.info/)

## Compound

<blockquote>Noun: A thing that is composed of two or more separate elements</blockquote>

Compound is the default Emulsify system of components.

[View the deployed storybook instance here](https://emulsify-ds.github.io/compound)

## Development

- Ensure you're using the correct node/npm version `nvm use`
- Install dependencies `npm install`
- Run the develop script `npm run develop`

That should spin up a local server (typically at `http://localhost:6006`) that you can open in your browser, to see the components in a Storybook instance. It will also watch for updates to your code, so any changes you make will be reflected in the Storybook instance live, any time you save.

## Contributing Components

Compound is a completely open source set of components that work with each other. If you find yourself using these components as starter files in your projects, feel free to contribute your own components to the repo!

When you do, remember to add it to the `system.emulsify.json` file so that it's exposed to the CLI! You can place it wherever is appropriate inside the `variants > components` section.

If the component has dependencies, be sure to identify them, so that the CLI knows to install them as well.

Components with a leading underscore, such as `_tab.twig`, indicate that the twig file is not intended to be used on its own, but rather as part of a higher level component.

### Common Scripts

These are the most common npm scripts you may find yourself using:
(Each is prefixed with `npm run`)

- `develop`<br>
Initializes [Webpack](https://webpack.js.org/) to compile existing files and watch for additional changes. It also starts an instance of [storybook](https://storybook.js.org/) that auto-refreshes when file changes are detected.

- `lint`<br>
Runs [stylelint](https://stylelint.io/) for your sass files and [eslint](https://eslint.org/) for your javascript files. The eslint configuration enforces formatting based on [prettier](https://prettier.io/docs/en/index.html) and javascript comments according to [JSdoc](https://jsdoc.app/).

```
{
  "name": "card",
  "structure": "molecules",
  "dependency": ["images", "text", "links", "buttons"]
},
```

## Support Single Directory Components

[Single Directory Components](https://www.drupal.org/project/sdc) will be a Drupal standard and historically, Emulsify has been doing something similar already. By doing some adjustments in Compound components, Emulsify will support SDC and make it seamless.

A full annotated example of a `component.yml` file can be found [here](https://www.drupal.org/node/3352951) 

### Upgrading Compound component

A complete compound component meets the following criteria.

1. A YML file is required in each component.
2. A YML file using the same schema Single Directory Component does.
3. A YML file with the `[name-of-component].component.yml` extension.
4. A story file that imports and uses the metadata from the new YML schema.

### Example of upgrading component

The [accordion component](https://emulsify-ds.github.io/compound/?path=/docs/molecules-accordion--docs) serves as an example of how the new YML schema should look like and how to use that metadata in stories.

#### Accordion YML new schema:

```
$schema: https://git.drupalcode.org/project/drupal/-/raw/10.1.x/core/modules/sdc/src/metadata.schema.json

name: Accordion
group: Molecules
status: experimental
props:
  type: object
  required:
    - accordion__item__heading
    - accordion__item__content
  properties:
    accordion__item__heading:
      type: string
      title: Heading
      description: The heading of the accordion item.
      data: Art Collections
    accordion__item__content:
      type: string
      title: Accordion item content
      description: The content of the accordion item.
      data: 'The Yale Center for British Art will present <em><a href="https://britishart.yale.edu/exhibitions-programs/bridget-riley-perceptual-abstraction">Bridget Riley: Perceptual Abstraction</a></em> from March 3 through July 24, 2022. Born in Britain in 1931, Riley is among the most important and influential painters in Britain and the world. Displayed on two floors, this major survey traces Riley’s oeuvre from the 1960s through the present by featuring over fifty works that were selected by the artist in collaboration with the YCBA. Also, revisit an exhibition hosted at the Yale University Art Gallery, <a href="https://artgallery.yale.edu/exhibitions/exhibition/basis-art-150-years-women-yale">On the Basis of Art: 150 Years of Women at Yale</a>, including a related audio guide, publication, and more.'
```

Everything in this file is optional. Still, the file needs to exist. Adding metadata here will improve the DX when using components.

- `$schema`: This is so the IDE knows about the syntax for fixes and autocomplete.
- `name`: The human readable name of the component.
- `group`: Key to organize components together - Atomic design in this case.
- `status`: Status can be: "experimental", "stable", "deprecated", "obsolete".
- `props`: 
    - Currently in Drupal 10.1, the schema will fail to validate if props section is not present, this is currently require. This may change in a future release of SDC.
    - Schema for the props. SDC supports JSON Schema
    - `type`: Props are always an object with keys. Each key is a variable in the component template.
    - `required`: If the component has required properties, it;s list them here.
    - `properties`: The key is the name of the variable in the template
        - `type`: This information is required for every prop.
        - `title`: A human-readable name to your props.
        - `description`: This can be optional.
        - `data`: The data used by storybook.

#### Accordion new story:

Import props from the YML schema:

```
import { props } from "./accordion.component.yml";
```

Create variable and use data from propesties

```
const accordionData = props.properties;

export default {
  title: 'Molecules/Accordion',
  argTypes: {
    heading: {
      name: 'Heading',
      type: 'string',
      defaultValue: accordionData.accordion__item__heading.data,
    },
    content: {
      name: 'Content',
      type: 'string',
      defaultValue: accordionData.accordion__item__content.data,
    },
  },
};
```

### Contributors

<table>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/ModulesUnraveled>
            <img src=https://avatars.githubusercontent.com/u/1663810?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Brian Lewis/>
            <br />
            <sub style="font-size:14px"><b>Brian Lewis</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/callinmullaney>
            <img src=https://avatars.githubusercontent.com/u/369018?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Callin Mullaney/>
            <br />
            <sub style="font-size:14px"><b>Callin Mullaney</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/mcortes19>
            <img src=https://avatars.githubusercontent.com/u/11282049?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Marvin J. Cortés/>
            <br />
            <sub style="font-size:14px"><b>Marvin J. Cortés</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/amazingrando>
            <img src=https://avatars.githubusercontent.com/u/409903?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Randy Oest/>
            <br />
            <sub style="font-size:14px"><b>Randy Oest</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/joetower>
            <img src=https://avatars.githubusercontent.com/u/366413?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Joe Tower/>
            <br />
            <sub style="font-size:14px"><b>Joe Tower</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/mndonx>
            <img src=https://avatars.githubusercontent.com/u/2343957?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Amanda Luker/>
            <br />
            <sub style="font-size:14px"><b>Amanda Luker</b></sub>
        </a>
    </td>
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/patrickocoffeyo>
            <img src=https://avatars.githubusercontent.com/u/1107871?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Patrick Coffey/>
            <br />
            <sub style="font-size:14px"><b>Patrick Coffey</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/josue2591>
            <img src=https://avatars.githubusercontent.com/u/9342250?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=josue2591/>
            <br />
            <sub style="font-size:14px"><b>josue2591</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/KurtTrowbridge>
            <img src=https://avatars.githubusercontent.com/u/848721?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Kurt Trowbridge/>
            <br />
            <sub style="font-size:14px"><b>Kurt Trowbridge</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/fertant>
            <img src=https://avatars.githubusercontent.com/u/3853492?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Andrii Shutov/>
            <br />
            <sub style="font-size:14px"><b>Andrii Shutov</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/AnaBZC>
            <img src=https://avatars.githubusercontent.com/u/43329315?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Ana B Zúñiga/>
            <br />
            <sub style="font-size:14px"><b>Ana B Zúñiga</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/codeb-a>
            <img src=https://avatars.githubusercontent.com/u/65790558?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Brandon Akers/>
            <br />
            <sub style="font-size:14px"><b>Brandon Akers</b></sub>
        </a>
    </td>
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/jlandrum>
            <img src=https://avatars.githubusercontent.com/u/2953123?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=James Landrum/>
            <br />
            <sub style="font-size:14px"><b>James Landrum</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/codechefmarc>
            <img src=https://avatars.githubusercontent.com/u/107938318?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Marc Berger/>
            <br />
            <sub style="font-size:14px"><b>Marc Berger</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/mariannuar>
            <img src=https://avatars.githubusercontent.com/u/48533432?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Mariana Núñez/>
            <br />
            <sub style="font-size:14px"><b>Mariana Núñez</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/robert-arias>
            <img src=https://avatars.githubusercontent.com/u/37127345?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Robert/>
            <br />
            <sub style="font-size:14px"><b>Robert</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/robherba>
            <img src=https://avatars.githubusercontent.com/u/9342274?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Roberto Henández Badilla/>
            <br />
            <sub style="font-size:14px"><b>Roberto Henández Badilla</b></sub>
        </a>
    </td>
</tr>
</table>


