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

export const colorControl = {
  type: 'select',
  options: ['Yale', 'Forest', 'Beach'],
  mapping: {
    Yale: '#000f9f',
    Forest: '#136740',
    Beach: '#e9bf16',
  },
  defaultValue: 'Yale',
};
