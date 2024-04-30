import accordionSDCTwig from "./accordion-sdc.twig";

import { slots } from "./accordion-sdc.component.yml";
import "./accordion-sdc";

/**
 * Storybook Definition.
 */
export default {
  // Can't be a dynamic title,
  // title: 'Molecules/AccordionSDC',
  component: accordionSDCTwig,
  argTypes: {
    heading: {
      name: "Heading",
      type: "string",
      defaultValue: slots.accordion_sdc__item__heading.examples[0],
    },
    content: {
      name: "Content",
      type: "string",
      defaultValue: slots.accordion_sdc__item__content.examples[0],
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
          slots.accordion_sdc__item__heading.examples[0],
        accordion_sdc__item__content:
          slots.accordion_sdc__item__content.examples[0],
      },
      {
        accordion_sdc__item__heading:
          slots.accordion_sdc__item__heading.examples[0],
        accordion_sdc__item__content:
          slots.accordion_sdc__item__content.examples[0],
      },
    ],
  });
