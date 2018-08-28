/* eslint-disable */
import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';

// @material-ui/icons
import Apps from '@material-ui/icons/Apps';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import ViewDay from '@material-ui/icons/ViewDay';
import Dns from '@material-ui/icons/Dns';
import Build from '@material-ui/icons/Build';
import ListIcon from '@material-ui/icons/List';
import People from '@material-ui/icons/People';
import Assignment from '@material-ui/icons/Assignment';
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import Chat from '@material-ui/icons/Chat';
import Call from '@material-ui/icons/Call';
import ViewCarousel from '@material-ui/icons/ViewCarousel';
import AccountBalance from '@material-ui/icons/AccountBalance';
import ArtTrack from '@material-ui/icons/ArtTrack';
import ViewQuilt from '@material-ui/icons/ViewQuilt';
import LocationOn from '@material-ui/icons/LocationOn';
import Fingerprint from '@material-ui/icons/Fingerprint';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Store from '@material-ui/icons/Store';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Layers from '@material-ui/icons/Layers';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import LineStyle from '@material-ui/icons/LineStyle';

// core components
import CustomDropdown from '../CustomDropdown/CustomDropdown.jsx';
import Button from '../CustomButtons/Button.jsx';

import headerLinksStyle from '../../../assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx';

function HeaderLinks({ ...props }) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === '/sections') {
      const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        const targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    let start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  const onClickSections = {};

  const { classes, dropdownHoverColor } = props;
  return (
    <List className={classes.list + ' ' + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          buttonIcon={Apps}
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonText="Components"
          dropdownList={[
            <Link className={classes.dropdownLink} to="/">
              <LineStyle className={classes.dropdownIcons} /> Presentation Page
            </Link>,
            <Link className={classes.dropdownLink} to="/components">
              <Layers className={classes.dropdownIcons} />All components
            </Link>,
            <a
              className={classes.dropdownLink}
              href="https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial"
              target="_blank"
            >
              <Icon className={classes.dropdownIcons}>content_paste</Icon>Documentation
            </a>,
          ]}
          hoverColor={dropdownHoverColor}
          navDropdown
          noLiPadding
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          buttonIcon={ViewDay}
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonText="Sections"
          dropdownList={[
            <Link
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "headers")}
              to="/sections#headers"
            >
              <Dns className={classes.dropdownIcons} /> Headers
            </Link>,
            <Link
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "features")}
              to="/sections#features"
            >
              <Build className={classes.dropdownIcons} /> Features
            </Link>,
            <Link
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "blogs")}
              to="/sections#blogs"
            >
              <ListIcon className={classes.dropdownIcons} /> Blogs
            </Link>,
            <Link
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "teams")}
              to="/sections#teams"
            >
              <People className={classes.dropdownIcons} /> Teams
            </Link>,
            <Link
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "projects")}
              to="/sections#projects"
            >
              <Assignment className={classes.dropdownIcons} /> Projects
            </Link>,
            <Link
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "pricing")}
              to="/sections#pricing"
            >
              <MonetizationOn className={classes.dropdownIcons} /> Pricing
            </Link>,
            <Link
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "testimonials")}
              to="/sections#testimonials"
            >
              <Chat className={classes.dropdownIcons} /> Testimonials
            </Link>,
            <Link
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "contacts")}
              to="/sections#contacts"
            >
              <Call className={classes.dropdownIcons} /> Contacts
            </Link>,
          ]}
          hoverColor={dropdownHoverColor}
          navDropdown
          noLiPadding
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          buttonIcon={ViewCarousel}
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonText="Examples"
          dropdownList={[
            <Link className={classes.dropdownLink} to="/about-us">
              <AccountBalance className={classes.dropdownIcons} /> About Us
            </Link>,
            <Link className={classes.dropdownLink} to="/blog-post">
              <ArtTrack className={classes.dropdownIcons} /> Blog Post
            </Link>,
            <Link className={classes.dropdownLink} to="/blog-posts">
              <ViewQuilt className={classes.dropdownIcons} /> Blog Posts
            </Link>,
            <Link className={classes.dropdownLink} to="/contact-us">
              <LocationOn className={classes.dropdownIcons} /> Contact Us
            </Link>,
            <Link className={classes.dropdownLink} to="/landing-page">
              <ViewDay className={classes.dropdownIcons} /> Landing Page
            </Link>,
            <Link className={classes.dropdownLink} to="/login-page">
              <Fingerprint className={classes.dropdownIcons} /> Login Page
            </Link>,
            <Link className={classes.dropdownLink} to="/pricing">
              <AttachMoney className={classes.dropdownIcons} /> Pricing Page
            </Link>,
            <Link className={classes.dropdownLink} to="/shopping-cart-page">
              <ShoppingBasket className={classes.dropdownIcons} /> Shopping Cart
            </Link>,
            <Link className={classes.dropdownLink} to="/ecommerce-page">
              <Store className={classes.dropdownIcons} /> Ecommerce Page
            </Link>,
            <Link className={classes.dropdownLink} to="/product-page">
              <ShoppingCart className={classes.dropdownIcons} /> Product Page
            </Link>,
            <Link className={classes.dropdownLink} to="/profile-page">
              <AccountCircle className={classes.dropdownIcons} /> Profile Page
            </Link>,
            <Link className={classes.dropdownLink} to="/signup-page">
              <PersonAdd className={classes.dropdownIcons} /> Signup Page
            </Link>,
          ]}
          hoverColor={dropdownHoverColor}
          navDropdown
          noLiPadding
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          className={classes.navButton}
          color={window.innerWidth < 960 ? 'info' : 'white'}
          href="https://www.creative-tim.com/product/material-kit-pro-react"
          round
          target="_blank"
        >
          <ShoppingCart className={classes.icons} /> buy now
        </Button>
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: 'primary',
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    'dark',
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
  ]),
};

export default withStyles(headerLinksStyle)(HeaderLinks);
