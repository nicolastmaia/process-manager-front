import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  Grid,
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
}));

const Toolbar = ({ className, offset, ...rest }) => {
  const classes = useStyles();
  const [inputText, setInputText] = useState('');

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <SvgIcon fontSize='small' color='action'>
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    ),
                  }}
                  placeholder='Procurar anúncio'
                  variant='outlined'
                  value={inputText}
                  onChange={handleTextChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
  offset: PropTypes.number,
};

export default Toolbar;
