import { Unstable_Grid2 as Grid, Typography } from '@mui/material';

const Page = () => (
  <Grid
    container
    flexDirection="row"
    flexGrow={1}
    gap="24px"
    paddingRight="24px"
  >
    <Grid xl lg md sm={12} xs={12} padding="24px">
      <Typography variant="body1">Contents 1</Typography>
    </Grid>
    <Grid xl lg md sm={12} xs={12} padding="24px">
      <Typography variant="body1">Contents 2</Typography>
    </Grid>
  </Grid>
);

export default Page;
