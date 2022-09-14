import React, { useState } from 'react';
import {Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';
import useStyles from './styles.js';
import PlaceDetails from '../PlaceDetails/PlaceDetails.jsx';

const List = ({places}) => {
    const [type, setType] = useState('restaurants');
    const classes = useStyles();



  return (
    <div className={classes.container}>
    <Typography variant="h4">Food & Dining around you</Typography>
    
        <FormControl className={classes.formControl}>
          <InputLabel id="type">Type</InputLabel>
          <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="friends">Friends</MenuItem>
            
          </Select>
        </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places&&places.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails place={place}/>
              </Grid>
            ))}
          </Grid>
        </div>
        
  )
}

export default List

