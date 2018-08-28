import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import People from '@material-ui/icons/People';
import Add from '@material-ui/icons/Add';
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from '../../main/components/Header/Header.jsx';
import Footer from '../../main/components/Footer/Footer.jsx';
import GridContainer from '../../main/components/Grid/GridContainer.jsx';
import GridItem from '../../main/components/Grid/GridItem.jsx';
import HeaderLinks from '../../main/components/Header/HeaderLinks.jsx';
import NavPills from '../../main/components/NavPills/NavPills.jsx';
import Card from '../../main/components/Card/Card.jsx';
import CardBody from '../../main/components/Card/CardBody.jsx';
import CardHeader from '../../main/components/Card/CardHeader.jsx';
import Badge from '../../main/components/Badge/Badge.jsx';
import Muted from '../../main/components/Typography/Muted.jsx';
import Parallax from '../../main/components/Parallax/Parallax.jsx';
import Clearfix from '../../main/components/Clearfix/Clearfix.jsx';
import Button from '../../main/components/CustomButtons/Button.jsx';

import christian from '../../assets/images/profilePicture.jpg';
import oluEletu from '../../assets/images/profilePicture.jpg';
import clemOnojeghuo from '../../assets/images/profilePicture.jpg';
import cynthiaDelRio from '../../assets/images/profilePicture.jpg';
import mariyaGeorgieva from '../../assets/images/profilePicture.jpg';
import clemOnojegaw from '../../assets/images/profilePicture.jpg';
import darrenColeshill from '../../assets/images/profilePicture.jpg';
import avatar from '../../assets/images/profilePicture.jpg';
import marc from '../../assets/images/profilePicture.jpg';
import kendall from '../../assets/images/profilePicture.jpg';
import cardProfile2Square from '../../assets/images/profilePicture.jpg';

import profilePageStyle from '../components/profilePageStyle.jsx';

class ProfilePage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid,
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          brand="Material Kit PRO React"
          changeColorOnScroll={{
            height: 200,
            color: 'info',
          }}
          color="transparent"
          fixed
          links={<HeaderLinks dropdownHoverColor="info" />}
          {...rest}
        />
        <Parallax
          className={classes.parallax}
          filter="dark"
          image={require('../../assets/images/profilePicture.jpg')}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={6} sm={12} xs={12}>
                <div className={classes.profile}>
                  <div>
                    <img alt="..." className={imageClasses} src={christian} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Christian Louboutin</h3>
                    <h6>DESIGNER</h6>
                    <Button
                      className={classes.margin5}
                      color="dribbble"
                      justIcon
                      simple
                    >
                      <i className={classes.socials + ' fab fa-dribbble'} />
                    </Button>
                    <Button
                      className={classes.margin5}
                      color="twitter"
                      justIcon
                      simple
                    >
                      <i className={classes.socials + ' fab fa-twitter'} />
                    </Button>
                    <Button
                      className={classes.margin5}
                      color="pinterest"
                      justIcon
                      simple
                    >
                      <i className={classes.socials + ' fab fa-pinterest'} />
                    </Button>
                  </div>
                </div>
                <div className={classes.follow}>
                  <Tooltip
                    classes={{ tooltip: classes.tooltip }}
                    id="tooltip-top"
                    placement="top"
                    title="Follow this user"
                  >
                    <Button
                      className={classes.followButton}
                      color="primary"
                      justIcon
                      round
                    >
                      <Add className={classes.followIcon} />
                    </Button>
                  </Tooltip>
                </div>
              </GridItem>
            </GridContainer>
            <div
              className={classNames(classes.description, classes.textCenter)}
            >
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{' '}
              </p>
            </div>
            <div className={classes.profileTabs}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: 'Work',
                    tabIcon: Palette,
                    tabContent: (
                      <GridContainer>
                        <GridItem
                          className={classes.gridItem}
                          md={7}
                          sm={12}
                          xs={12}
                        >
                          <h4 className={classes.title}>Latest Collections</h4>
                          <GridContainer className={classes.collections}>
                            <GridItem md={6} sm={12} xs={12}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    'url(' + mariyaGeorgieva + ')',
                                }}
                              >
                                <a href="#pablo" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    className={classes.badge}
                                    color="warning"
                                  >
                                    Spring 2016
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>
                                      Stilleto
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem md={6} sm={12} xs={12}>
                              <Card
                                background
                                style={{
                                  backgroundImage: 'url(' + clemOnojeghuo + ')',
                                }}
                              >
                                <a href="#pablo" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge className={classes.badge} color="info">
                                    Spring 2016
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>
                                      High Heels
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem md={6} sm={12} xs={12}>
                              <Card
                                background
                                style={{
                                  backgroundImage: 'url(' + oluEletu + ')',
                                }}
                              >
                                <a href="#pablo" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    className={classes.badge}
                                    color="danger"
                                  >
                                    Summer 2016
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>
                                      Flats
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem md={6} sm={12} xs={12}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    'url(' + darrenColeshill + ')',
                                }}
                              >
                                <a href="#pablo" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    className={classes.badge}
                                    color="success"
                                  >
                                    Winter 2016
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>
                                      Men's Sneakers
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                        <GridItem
                          className={classes.gridItem}
                          md={2}
                          sm={12}
                          xs={12}
                        >
                          <h4 className={classes.title}>Stats</h4>
                          <ul className={classes.listUnstyled}>
                            <li>
                              <b>60</b> Products
                            </li>
                            <li>
                              <b>4</b> Collections
                            </li>
                            <li>
                              <b>331</b> Influencers
                            </li>
                            <li>
                              <b>1.2K</b> Likes
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>About this work</h4>
                          <p className={classes.description}>
                            French luxury footwear and fashion. The footwear has
                            incorporated shiny, red-lacquered soles that have
                            become his signature.
                          </p>
                          <hr />
                          <h4 className={classes.title}>Focus</h4>
                          <Badge color="primary">Footwear</Badge>
                          <Badge color="rose">Luxury</Badge>
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: 'Connections',
                    tabIcon: People,
                    tabContent: (
                      <div>
                        <GridContainer justify="center">
                          <GridItem
                            className={classes.gridItem}
                            md={5}
                            sm={12}
                            xs={12}
                          >
                            <Card className={classes.card} plain profile>
                              <GridContainer>
                                <GridItem md={5} sm={12} xs={12}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img alt="..." src={avatar} />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: 'url(' + avatar + ')',
                                        opacity: '1',
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem md={7} sm={12} xs={12}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Gigi Hadid
                                    </h4>
                                    <Muted>
                                      <h6>MODEL</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Don't be scared of the truth because we
                                      need to restart the human foundation in
                                      truth...
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                          <GridItem
                            className={classes.gridItem}
                            md={5}
                            sm={12}
                            xs={12}
                          >
                            <Card className={classes.card} plain profile>
                              <GridContainer>
                                <GridItem md={5} sm={12} xs={12}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img alt="..." src={marc} />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: 'url(' + marc + ')',
                                        opacity: '1',
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem md={7} sm={12} xs={12}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Marc Jacobs
                                    </h4>
                                    <Muted>
                                      <h6>DESIGNER</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Don't be scared of the truth because we
                                      need to restart the human foundation in
                                      truth...
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem
                            className={classes.gridItem}
                            md={5}
                            sm={12}
                            xs={12}
                          >
                            <Card className={classes.card} plain profile>
                              <GridContainer>
                                <GridItem md={5} sm={12} xs={12}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img alt="..." src={kendall} />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: 'url(' + kendall + ')',
                                        opacity: '1',
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem md={7} sm={12} xs={12}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Kendall Jenner
                                    </h4>
                                    <Muted>
                                      <h6>MODEL</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      I love you like Kanye loves Kanye. Don't
                                      be scared of the truth.
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                          <GridItem
                            className={classes.gridItem}
                            md={5}
                            sm={12}
                            xs={12}
                          >
                            <Card className={classes.card} plain profile>
                              <GridContainer>
                                <GridItem md={5} sm={12} xs={12}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img alt="..." src={cardProfile2Square} />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage:
                                          'url(' + cardProfile2Square + ')',
                                        opacity: '1',
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem md={7} sm={12} xs={12}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      George West
                                    </h4>
                                    <Muted>
                                      <h6>MODEL/DJ</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      I love you like Kanye loves Kanye.
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </div>
                    ),
                  },
                  {
                    tabButton: 'Media',
                    tabIcon: Camera,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem md={3} sm={12} xs={12}>
                          <img
                            alt="..."
                            className={navImageClasses}
                            src={mariyaGeorgieva}
                          />
                          <img
                            alt="..."
                            className={navImageClasses}
                            src={clemOnojegaw}
                          />
                        </GridItem>
                        <GridItem md={3} sm={12} xs={12}>
                          <img
                            alt="..."
                            className={navImageClasses}
                            src={clemOnojeghuo}
                          />
                          <img
                            alt="..."
                            className={navImageClasses}
                            src={oluEletu}
                          />
                          <img
                            alt="..."
                            className={navImageClasses}
                            src={cynthiaDelRio}
                          />
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                ]}
              />
            </div>
            <Clearfix />
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
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      className={classes.block}
                      href="https://www.creative-tim.com/presentation"
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      className={classes.block}
                      href="//blog.creative-tim.com/"
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      className={classes.block}
                      href="https://www.creative-tim.com/license"
                    >
                      Licenses
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

export default withStyles(profilePageStyle)(ProfilePage);
