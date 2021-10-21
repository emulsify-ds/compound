export const borderRadiusControl = {
  type: 'select',
  options: ['None', 'Some', 'More', 'A lot'],
  mapping: {
    None: '0px',
    Some: '0.5rem',
    More: '1rem',
    'A lot': '100vmax',
  },
  defaultValue: 'None',
};
