import React from 'react';
import { Sidebar, Header, Title, Box, Menu, Anchor } from 'grommet';

export default () => (
  <Sidebar size='small' full={true} colorIndex='brand'>
    <Header pad='medium'
      justify='between'>
      <Title>
        Title
      </Title>
    </Header>
    <Box flex='grow'
      justify='start'>
      <Menu primary={true}>
        <Anchor href='#'
          className='active'>
          First
        </Anchor>
        <Anchor href='#'>
          Second
        </Anchor>
        <Anchor href='#'>
          Third
        </Anchor>
      </Menu>
    </Box>
  </Sidebar>
);
