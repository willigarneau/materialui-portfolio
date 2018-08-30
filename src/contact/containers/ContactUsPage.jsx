import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
import PinDrop from '@material-ui/icons/PinDrop';
import Phone from '@material-ui/icons/Phone';
import BusinessCenter from '@material-ui/icons/BusinessCenter';
// core components
import Header from '../../main/components/Header/Header.jsx';
import HeaderLinks from '../../main/components/Header/HeaderLinks.jsx';
import GridContainer from '../../main/components/Grid/GridContainer.jsx';
import GridItem from '../../main/components/Grid/GridItem.jsx';
import InfoArea from '../../main/components/InfoArea/InfoArea.jsx';
import CustomInput from '../../main/components/CustomInput/CustomInput.jsx';
import Button from '../../main/components/CustomButtons/Button.jsx';
import Footer from '../../main/components/Footer/Footer.jsx';

import contactUsStyle from '../../assets/jss/material-kit-pro-react/views/contactUsStyle.jsx';

const CustomSkinMap = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{ lat: 44.43353, lng: 26.093928 }}
    defaultOptions={{
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: 'water',
          stylers: [
            { saturation: 43 },
            { lightness: -11 },
            { hue: '#0088ff' },
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry.fill',
          stylers: [
            { hue: '#ff0000' },
            { saturation: -100 },
            { lightness: 99 },
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#808080' }, { lightness: 54 }],
        },
        {
          featureType: 'landscape.man_made',
          elementType: 'geometry.fill',
          stylers: [{ color: '#ece2d9' }],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [{ color: '#ccdca1' }],
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#767676' }],
        },
        {
          featureType: 'road',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#ffffff' }],
        },
        { featureType: 'poi', stylers: [{ visibility: 'off' }] },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry.fill',
          stylers: [{ visibility: 'on' }, { color: '#b8cb93' }],
        },
        { featureType: 'poi.park', stylers: [{ visibility: 'on' }] },
        {
          featureType: 'poi.sports_complex',
          stylers: [{ visibility: 'on' }],
        },
        { featureType: 'poi.medical', stylers: [{ visibility: 'on' }] },
        {
          featureType: 'poi.business',
          stylers: [{ visibility: 'simplified' }],
        },
      ],
    }}
    defaultZoom={14}
  >
    <Marker position={{ lat: 46.8292716, lng: -71.054464 }} />
  </GoogleMap>
)));

class ContactUsPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          brand="William Garneau"
          color="warning"
          fixed
          links={<HeaderLinks dropdownHoverColor="transparent" />}
        />
        <div className={classes.bigMap}>
          <CustomSkinMap
            containerElement={
              <div
                style={{
                  height: '100%',
                  borderRadius: '6px',
                  overflow: 'hidden',
                }}
              />
            }
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_JGyFyALfQxUkzvVEg_sk3Bh30zL6yf0"
            loadingElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.contactContent}>
            <div className={classes.container}>
              <h2 className={classes.title}>Contactez-moi !</h2>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <p>
                    Vous pouvez me contacter à tout moment pour des questions
                    sur le fonctionnement de ce repo, ou autre.
                    <br />
                    <br />
                  </p>
                  <form>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="float"
                      labelText="Votre nom"
                    />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="float"
                      labelText="Adresse mail"
                    />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="float"
                      labelText="Téléphone / Cellulaire"
                    />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="float"
                      inputProps={{
                        multiline: true,
                        rows: 6,
                      }}
                      labelText="Votre message"
                    />
                    <div className={classes.textCenter}>
                      <Button color="primary" round>
                        Contactez-moi
                      </Button>
                    </div>
                  </form>
                </GridItem>
                <GridItem className={classes.mlAuto} md={4} sm={4}>
                  <InfoArea
                    className={classes.info}
                    description={
                      <p>
                        485 Route du fleuve <br /> Beaumont, Québec{' '}
                        <br /> Canada
                      </p>
                    }
                    icon={PinDrop}
                    iconColor="warning"
                    title="Venez me voir !"
                  />
                  <InfoArea
                    className={classes.info}
                    description={
                      <p>
                        William Garneau <br /> 418-473-7700 <br /> Lundi - Vendredi
                      </p>
                    }
                    icon={Phone}
                    iconColor="warning"
                    title="Appelez-moi"
                  />
                  <InfoArea
                    className={classes.info}
                    description={
                      <p>
                        Personnel :<br /> willi_garn@hotmail.com<br />
                        Professionnel : <br /> wgarneau@nexapp.ca
                      </p>
                    }
                    icon={BusinessCenter}
                    iconColor="warning"
                    title="Envoyez-moi un message"
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      className={classes.block}
                      href="https://www.creative-tim.com/"
                    >
                      SEXY-PORTFOLIO
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      className={classes.block}
                      href="https://www.creative-tim.com/presentation"
                      onClick="return false;"
                    >
                      GITHUB
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      className={classes.block}
                      href="//blog.creative-tim.com/"
                    >
                      PROFIL
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{' '}
                <Favorite className={classes.icon} /> by{' '}
                <a href="https://www.creative-tim.com">Creative Tim</a> for a
                better web.
              </div>
            </div>
          }
        />
      </div>
    );
  }

}

export default withStyles(contactUsStyle)(ContactUsPage);
