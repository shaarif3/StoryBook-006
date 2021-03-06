import React from 'react';
// import { addDecorator } from '@storybook/react'; // add decoraor globaly
// import Center from '../src/components/Center/Center';
import { Box, ChakraProvider, theme, CSSReset } from '@chakra-ui/react';
import { withConsole } from '@storybook/addon-console';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

export const decorators = [
  (story) => (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box m='4'> {story()}</Box>
    </ChakraProvider>
  ),
];
