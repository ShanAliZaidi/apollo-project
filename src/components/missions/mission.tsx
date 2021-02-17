import React from 'react';
import { makeStyles ,Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useMissionsInfoQuery} from '../../generated/graphql';
import { Scrollbars } from 'rc-scrollbars';
import logo from './pic.jpg'



interface Props {
  handleClick: (newId: String|null|undefined) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 400,
    margin: theme.spacing(5)
  },
  media: {
    height: 140,
  },
  box: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 500      
  },
  h3: {
    margin: theme.spacing(5)

  }
}));

const Missions: React.FC<Props> = ({handleClick}) => {
  const classes = useStyles();


  const {data,loading,error} = useMissionsInfoQuery();
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <Scrollbars style={{ width: 500, height: 700 }}>
      <div className={classes.box}>
        <h3 className={classes.h3}>Click Learn More for More Info</h3>
          {data.missions?.map(mission => {
              return(
                <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image= {logo}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {mission?.mission_name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Manufacturers: {mission?.manufacturers}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => handleClick(mission?.mission_id)}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>

              )
          })}
    
    </div>
    </Scrollbars>

  );
}

export default Missions;