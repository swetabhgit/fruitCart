import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import '../styles/css/HorizontalCard.css'

const HorizontalCard =(props)=>(
<Card className="horizontalCard">
<CardActionArea className="card-action-area">
    <CardContent className="card-content">
        <Typography className="card-text">
            Hello
            </Typography>
          
            <CardMedia className="card-media" image={props.detail}/>
                
        </CardContent>
        </CardActionArea>
        <CardActions className="card-button-wrapper">
            <Button className="card-button" size="small" color="primary">View Article</Button>
            </CardActions>
    </Card>
)
export default HorizontalCard