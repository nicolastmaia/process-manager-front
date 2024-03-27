import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useContext, useEffect, useState } from 'react';
import ConfirmDialog from 'src/components/ConfirmDialog';
import CustomSnackbar from 'src/components/CustomSnackbar';
import Page from 'src/components/Page';
import AreaContext from 'src/contexts/AreaContext';
import AreaCard from './AreaCard';
import Toolbar from './Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  areaCard: {
    height: '100%',
  },
}));

const AreaList = () => {
  const classes = useStyles();
  const { areas, fetchAllAreas } = useContext(AreaContext);
  const [offset, setOffset] = useState(0);

  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const { pathname } = window.location;

  const closeConfirmDialog = () => {
    setIsConfirmDialogOpen(false);
  };
  const openConfirmDialog = () => {
    setIsConfirmDialogOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarMessage('');
  };

  const handlePageChange = (event, value) => {
    setOffset((value - 1) * 20);
  };

  useEffect(() => {
    const fetchAreas = async () => {
      await fetchAllAreas();
    };

    fetchAreas();
  }, [pathname]);

  return (
    <Page className={classes.root} title='Anúncios'>
      <Container maxWidth={false}>
        <Toolbar offset={offset} />
        <Box mt={3}>
          <Grid container spacing={3}>
            {areas &&
              areas.map((area) => (
                <Grid item key={area.id} lg={3} md={4} sm={6} xs={12}>
                  <AreaCard
                    openConfirmDialog={openConfirmDialog}
                    className={classes.areaCard}
                    area={area}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
        <Box mt={3} display='flex' justifyContent='center'>
          <Pagination color='primary' size='small' onChange={handlePageChange} />
        </Box>
        <ConfirmDialog
          isConfirmDialogOpen={isConfirmDialogOpen}
          closeConfirmDialog={closeConfirmDialog}
        />
        <CustomSnackbar message={snackbarMessage} handleCloseSnackbar={handleCloseSnackbar} />
      </Container>
    </Page>
  );
};

AreaList.propTypes = {};

export default AreaList;
