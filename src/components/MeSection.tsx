import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { TApiResponse, useApiGet } from '../hooks/useFetch';

type Props = {};

const MeSection = (props: Props) => {
  const data: TApiResponse = useApiGet(
    'https://dog.ceo/api/breeds/image/random'
  );
  return (
    <Grid container>
      <Grid
        item
        xs={6}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '50vh' }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum fugit
        eos minima eligendi consequuntur ullam tempora dolor adipisci expedita
        quaerat quis labore reprehenderit aperiam, tenetur ea repudiandae ab
        vitae.
      </Grid>
      <Grid
        item
        xs={6}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '50vh' }}
      >
        <Box
          component="img"
          sx={{
            m: 3,
            height: 500,
            width: 500,
            maxHeight: { xs: 500, md: 500 },
            maxWidth: { xs: 500, md: 500 },
          }}
          alt="The barber"
          src={data.response.data?.message}
        />
      </Grid>
    </Grid>
  );
};

export default MeSection;
