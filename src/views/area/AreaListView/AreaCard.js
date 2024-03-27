import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardContentRoot: {},
  statsItem: {
    alignItems: 'center',
    display: 'flex',
  },
  image: {
    height: 150,
    width: '100%',
  },
}));

const AreaCard = ({ openConfirmDialog, className, area, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent classes={{ root: classes.cardContentRoot }}>
        <Typography align='center' color='textPrimary' gutterBottom variant='h4'>
          {area.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

AreaCard.propTypes = {
  openConfirmDialog: PropTypes.func,
  className: PropTypes.string,
  area: PropTypes.object.isRequired,
};

export default AreaCard;
