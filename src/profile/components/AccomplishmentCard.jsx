import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import narutoProject from '../../assets/images/naruto-project.gif';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};

type Props = {
  img: string,
  classes:any,
  imgDescription: string,
  headLine: string,
  description: string,
  link: string,
}

const imgAssociation = [
  ['narutoProject', narutoProject],
];

function AccomplishmentCard({ classes, img, imgDescription, headLine, description, link }:Props) {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        component="img"
        height="140"
        image={imgAssociation.filter(i => i[0] === img)[0][1]}
        title={imgDescription}
      />
      <CardContent>
        <Typography component="h2" gutterBottom variant="headline">
          {headLine}
        </Typography>
        <Typography component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          href={link}
          size="small"
        >
          Voir plus
        </Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(AccomplishmentCard);
