/* eslint-disable */

import React from 'react';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import { Menu, CloudDownload } from '@material-ui/icons';

// core components
import CustomDropdown from '../CustomDropdown/CustomDropdown.jsx';
import Button from '../CustomButtons/Button.jsx';

import headerLinksStyle from '../../../assets/jss/material-kit-react/components/headerLinksStyle.jsx';

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          buttonIcon={Menu}
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonText="Voir plus !"
          dropdownList={[
            <Link className={classes.dropdownLink} to="/">
              À Propos
            </Link>,
            <a
              className={classes.dropdownLink}
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
              target="_blank"
            >
              Contactez-moi :)
            </a>,
          ]}
          noLiPadding
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          className={classes.navLink}
          color="transparent"
          href="https://github.com/Thyix/sexy-portfolio"
          target="_blank"
        >
          <CloudDownload className={classes.icons} /> Contribuer
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          classes={{ tooltip: classes.tooltip }}
          id="instagram-twitter"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          title="Follow us on twitter"
        >
          <Button
            className={classes.navLink}
            color="transparent"
            href="https://twitter.com/CreativeTim"
            target="_blank"
          >
            <i className={classes.socialIcons + ' fab fa-twitter'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          classes={{ tooltip: classes.tooltip }}
          id="instagram-facebook"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          title="Follow us on facebook"
        >
          <Button
            className={classes.navLink}
            color="transparent"
            href="https://www.facebook.com/CreativeTim"
            target="_blank"
          >
            <i className={classes.socialIcons + ' fab fa-facebook'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          classes={{ tooltip: classes.tooltip }}
          id="instagram-tooltip"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          title="Follow us on instagram"
        >
          <Button
            className={classes.navLink}
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial"
            target="_blank"
          >
            <i className={classes.socialIcons + ' fab fa-instagram'} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
