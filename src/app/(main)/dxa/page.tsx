import tokens from '@/app/tokens';
import { Unstable_Grid2 as Grid, Paper, Typography } from '@mui/material';

import DxaReportForm from './form';

const { color } = tokens;

const Page = () => (
  <Grid
    container
    flexDirection="row"
    flexGrow={1}
    gap="24px"
    paddingRight="24px"
  >
    <Grid xl lg md sm={12} xs={12} padding="24px">
      <Paper
        elevation={0}
        sx={{
          backgroundColor: color.light.surfaceContainerLow,
          borderRadius: '28px',
          height: '100%',
        }}
      >
        <DxaReportForm />
      </Paper>
    </Grid>
    <Grid xl lg md sm={12} xs={12} padding="24px">
      <Typography variant="displaySm">Contents 2</Typography>
    </Grid>
  </Grid>
);

export default Page;
