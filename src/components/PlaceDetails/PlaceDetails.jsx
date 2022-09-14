import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';


import useStyles from './styles.js';

const PlaceDetails = ({place}) => {
const classes = useStyles();


  return (
    <Card elevatio= {6}>
      <CardMedia
      style={{height:350}}
      image={place.photo ? place.photo.images.large.url:""}
      title={place.name}
      />
<CardContent>
  <Typography gutterBotton variant="h5">
    {place.name}
  </Typography>
  <Box display="flex" justifyContent="space-between">
    <Typography variant= "subtitle1">Price</Typography>
    <Typography gutterBottom variant= "subtitle1">{place.price_level}</Typography>
  </Box>
  <Box display="flex" justifyContent="space-between">
    <Typography variant= "subtitle1">Ranking</Typography>
    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
  </Box>
  
{place&&place.cuisine&&place.cuisine.map(({name})=>(
  <Chip key={name} size="small" label={name} className={classes.chip}/>
))}

{place&&place.address &&(
  <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
    <LocationOnIcon/> {place.address}
  </Typography>
)}

{place&&place.phone &&(
  <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
    <PhoneIcon/> {place.phone}
  </Typography>
)}

<CardActions>
  <Button size="small" color="primary" onClick={()=> window.open(place.web_url, '_blank')}>
Check in
  </Button>
</CardActions>
</CardContent>

    </Card>
  )
}

export default PlaceDetails
