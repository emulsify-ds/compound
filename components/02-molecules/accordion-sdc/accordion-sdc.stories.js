import accordionSDCTwig from "./accordion-sdc.twig";

import { name, group, props } from "./accordion-sdc.component.yml";
import "./accordion-sdc";

/**
 * Storybook Definition.
 */
export default {
  // Can't be a dynamic title,
  // title: `${group}/${name}`,
  title: "Molecules/Accordion SDC",
  component: accordionSDCTwig,
  argTypes: {
    heading: {
      name: "Heading",
      type: "string",
      defaultValue: props.properties.accordion_sdc__item__heading.data,
    },
    content: {
      name: "Content",
      type: "string",
      defaultValue: props.properties.accordion_sdc__item__content.data,
    },
  },
};

export const AccordionSDC = ({ heading, content }) =>
  accordionSDCTwig({
    accordion_sdc__items: [
      {
        accordion_sdc__item__heading: heading,
        accordion_sdc__item__content: content,
      },
      {
        accordion_sdc__item__heading:
          props.properties.accordion_sdc__item__heading.data,
        accordion_sdc__item__content:
          props.properties.accordion_sdc__item__content.data,
      },
      {
        accordion_sdc__item__heading:
          props.properties.accordion_sdc__item__heading.data,
        accordion_sdc__item__content:
          props.properties.accordion_sdc__item__content.data,
      },
    ],
  });
