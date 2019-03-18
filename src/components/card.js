import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import '../styles/css/HorizontalReverseCard.css'

const ReverseHorizontalCard =(props)=>(
<Card className="horizontalReverseCard">
<CardActionArea className="reverse-card-action-area">
    <CardContent className="reverse-card-content">
        <Typography className="reverse-card-text">
            Hello
            </Typography>
          
            <CardMedia className="reverse-card-media" image={props.detail}/>
                
        </CardContent>
        </CardActionArea>
        <CardActions className="reverse-card-button-wrapper">
            <Button className="reverse-card-button" size="small" color="primary">View Article</Button>
            </CardActions>
    </Card>
)
export default ReverseHorizontalCard