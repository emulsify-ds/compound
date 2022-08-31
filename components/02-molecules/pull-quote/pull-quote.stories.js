import pullQuoteTwig from './pull-quote.twig';

import pullQuoteData from './pull-quote.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Pull Quote',
  argTypes: {
    quote: {
      name: 'Quote',
      type: 'string',
      defaultValue: pullQuoteData.pull_quote__quote,
    },
    attribution: {
      name: 'Attribution',
      type: 'string',
      defaultValue: pullQuoteData.pull_quote__attribution,
    },
    style: {
      name: 'Style',
      options: ['bar-left', 'bar-right', 'quote-left'],
      type: 'select',
      defaultValue: 'bar-left',
    },
  },
};

export const pullQuote = ({ style, quote, attribution }) => `
  ${pullQuoteTwig({
    pull_quote__quote: pullQuoteData.pull_quote__quote,
    pull_quote__attribution: pullQuoteData.pull_quote__attribution,
  })}
  ${pullQuoteTwig({
    pull_quote__quote: pullQuoteData.pull_quote__quote,
    pull_quote__style: 'bar-right',
  })}
  ${pullQuoteTwig({
    pull_quote__quote: pullQuoteData.pull_quote__quote,
    pull_quote__attribution: pullQuoteData.pull_quote__attribution,
    pull_quote__style: 'quote-left',
  })}
  <div>
    <h2>Playground</h2>
    <p>Use the StoryBook controls to see the pull-quote below implement the available variations and colors.</p>
    ${pullQuoteTwig({
      pull_quote__quote: quote,
      pull_quote__attribution: attribution,
      pull_quote__style: style,
    })}
  </div>
`;
