/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import { AlternateEmail, Code, Person } from '@material-ui/icons';
import CustomDropdown from '../CustomDropdown/CustomDropdown.jsx';
import Button from '../CustomButtons/Button.jsx';

import headerLinksStyle from '../../../assets/jss/material-kit-react/components/headerLinksStyle.jsx';

function HeaderLinks({ ...props }) {
  const { classes } = props;
  console.log(classes);
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
            classes={{ tooltip: classes.tooltip }}
            placement={window.innerWidth > 959 ? 'bottom' : 'left'}
            title="Qui suis-je?"
          >
            <Button
              className={classes.navLink}
              color="transparent"
              href="https://github.com/Thyix/sexy-portfolio"
              target="_blank"
            >
              <Person className={classes.icons} /> À propos
            </Button>
          </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
              classes={{ tooltip: classes.tooltip }}
              placement={window.innerWidth > 959 ? 'bottom' : 'left'}
              title="Informations de contact"
            >
            <Button
              className={classes.navLink}
              color="transparent"
              href="https://github.com/Thyix/sexy-portfolio"
              target="_blank"
            >
              <AlternateEmail className={classes.icons} /> Contactez-moi
            </Button>
          </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
            classes={{ tooltip: classes.tooltip }}
            placement={window.innerWidth > 959 ? 'bottom' : 'left'}
            title="Contribuez sur Github"
          >
            <Button
              className={classes.navLink}
              color="transparent"
              href="https://github.com/Thyix/sexy-portfolio"
              target="_blank"
            >
              <Code className={classes.icons} /> Contribuer
            </Button>
          </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
