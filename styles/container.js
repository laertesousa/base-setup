export default (theme) => {
  const { breakpoints } = theme;
  return {
    minWidth: 300,
    maxWidth: 1088,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 12,
    paddingRight: 12,
    [breakpoints.up('lg')]: {
      paddingLeft: 32,
      paddingRight: 32,
    },
  }
};