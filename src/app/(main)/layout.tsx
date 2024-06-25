import { Unstable_Grid2 as Grid, Typography } from '@mui/material';

import './layout.css';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <Grid container flexDirection="row">
    <div className="nav-rail">
      <Typography variant="body1">Navbar</Typography>
    </div>
    {children}
    <div className="nav-bar">
      <Typography variant="body1">Navbar</Typography>
    </div>
  </Grid>
);

export default Layout;

// xl: 1536 - 1920
// lg: 1200 - 1535
// md: 900 - 1199
// sm: 600 - 899
// xs: 500 - 599
