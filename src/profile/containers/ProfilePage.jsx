import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Book from '@material-ui/icons/Book';
import Palette from '@material-ui/icons/Star';
import People from '@material-ui/icons/People';
import Add from '@material-ui/icons/Add';
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

import william from '../../assets/images/profilePicture.jpg';
import tftpImplementation from '../../assets/images/tftpImplementation.gif';
import narutoProject from '../../assets/images/naruto-project.gif';
import sexyPortfolio from '../../assets/images/sexy-portfolio.gif';
import tcpStreamer from '../../assets/images/tcp-streamer.gif';

import Nexapp from '../../assets/images/nexapp.jpg';
import Vapofoin from '../../assets/images/vapofoin.jpeg';
import Canac from '../../assets/images/canac.png';
import Micrologic from '../../assets/images/micrologic.png';

import cegep from '../../assets/images/cegep.png';
import collegeDeLevis from '../../assets/images/collegeDeLevis.jpg';

import linkedin from '../../assets/images/icons/linkedin-brands.svg';
import github from '../../assets/images/icons/github-brands.svg';
import instagram from '../../assets/images/icons/instagram-brands.svg';

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
    return (
      <div style={{ marginBottom: -2000 }}>
        <Header
          brand="William Garneau"
          changeColorOnScroll={{
            height: 225,
            color: 'warning',
          }}
          color="transparent"
          fixed
          links={<HeaderLinks dropdownHoverColor="warning" />}
          {...rest}
        />
        <Parallax
          className={classes.parallax}
          filter="dark"
          image={require('../../assets/images/minimalist-portfolio.gif')}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={6} sm={12} xs={12}>
                <div className={classes.profile}>
                  <div>
                    <img alt="..." className={imageClasses} src={william} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>William Garneau</h3>
                    <h6>DÉVELOPPEUR LOGICIEL</h6>
                    <Button
                      className={classes.margin5}
                      color="dribbble"
                      href="https://www.linkedin.com/in/william-garneau-904707148/"
                      justIcon
                      simple
                    >
                      <img alt="linkedinLogo" src={linkedin} style={{ marginTop: 17 }} />
                    </Button>
                    <Button
                      className={classes.margin5}
                      color="twitter"
                      href="https://github.com/Thyix"
                      justIcon
                      simple
                    >
                      <img alt="githubLogo" src={github} style={{ marginTop: 17 }} />
                    </Button>
                    <Button
                      className={classes.margin5}
                      color="pinterest"
                      href="https://www.instagram.com/william_garneau/"
                      justIcon
                      simple
                    >
                      <img alt="instagramLogo" src={instagram} style={{ marginTop: 17 }} />
                    </Button>
                  </div>
                </div>
                <a className={classes.follow} href={'https://github.com/Thyix'}>
                  <Tooltip
                    classes={{ tooltip: classes.tooltip }}
                    id="tooltip-top"
                    placement="top"
                    title="S'abonner sur Github"
                  >
                    <Button
                      className={classes.followButton}
                      color="warning"
                      justIcon
                      round

                    >
                      <Add className={classes.followIcon} />
                    </Button>
                  </Tooltip>
                </a>
              </GridItem>
            </GridContainer>
            <div
              className={classNames(classes.description, classes.textCenter)}
            >
              <p>
              J'ai 19 ans, je suis passionné par la programmation, l'intelligence artificielle,
              la musique et le sport. J'étudie actuellement au Cégep Lévis-Lauzon en informatique
              industrielle.
              </p>
            </div>
            <div className={classes.profileTabs}>
              <NavPills
                alignCenter
                color="warning"
                tabs={[
                  {
                    tabButton: 'Projets',
                    tabIcon: Palette,
                    tabContent: (
                      <GridContainer>
                        <GridItem
                          className={classes.gridItem}
                          md={7}
                          sm={12}
                          xs={12}
                        >
                          <h4 className={classes.title}>PROJETS RÉCENTS</h4>
                          <GridContainer className={classes.collections}>
                            <GridItem md={6} sm={12} xs={12}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    'url(' + sexyPortfolio + ')',
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
                                    Août 2018
                                  </Badge>
                                  <a href="https://github.com/Thyix/sexy-portfolio">
                                    <h2 className={classes.cardTitleWhite}>
                                      Beautiful Portfolio
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem md={6} sm={12} xs={12}>
                              <Card
                                background
                                style={{
                                  backgroundImage: 'url(' + narutoProject + ')',
                                }}
                              >
                                <a href="https://github.com/Thyix/naruto-project" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge className={classes.badge} color="info">
                                    Juin 2018
                                  </Badge>
                                  <a href="https://github.com/Thyix/naruto-project">
                                    <h2 className={classes.cardTitleWhite}>
                                      3D Naruto Project
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem md={6} sm={12} xs={12}>
                              <Card
                                background
                                style={{
                                  backgroundImage: 'url(' + tftpImplementation + ')',
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
                                    Avril 2018
                                  </Badge>
                                  <a href="https://github.com/Thyix/tftp-implementation">
                                    <h2 className={classes.cardTitleWhite}>
                                      TFTP Implementation
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
                                    'url(' + tcpStreamer + ')',
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
                                    Janvier 2018
                                  </Badge>
                                  <a href="https://github.com/Thyix/qt-tcp-streamer">
                                    <h2 className={classes.cardTitleWhite}>
                                      TCP Streamer
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
                          <h4 className={classes.title}>Évolution</h4>
                          <ul className={classes.listUnstyled}>
                            <li>
                              <b>16</b> Projets publics
                            </li>
                            <li>
                              <b>3</b> Jeux vidéos créés
                            </li>
                            <li>
                              <b>3</b> Postes en informatique
                            </li>
                            <li>
                              <b>Étudiant en informatique industrielle</b>
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>Jeune développeur</h4>
                          <p className={classes.description}>
                            Je programme depuis maintenant 2 ans.
                            Je fais fréquemment des projets en .NET et les jeux vidéos.
                            Fan de la programmation mobile et web, je publie du contenu relié à mes projets personnels et mes travaux d'école.
                          </p>
                          <hr />
                          <h4 className={classes.title}>Languages utilisés</h4>
                          <Badge color="primary">C#</Badge>
                          <Badge color="rose">C++</Badge>
                          <Badge color="warning">js</Badge>
                          <Badge color="success">Java</Badge>
                          <Badge color="info">Python</Badge>
                          <Badge color="primary">HTML5</Badge>
                          <Badge color="rose">CSS3</Badge>
                          <Badge color="warning">React</Badge>
                          <Badge color="success">Vue</Badge>
                          <Badge color="info">React Native</Badge>
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: 'Expérience',
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
                                    <a href="https://www.nexapp.ca/">
                                      <img alt="..." src={Nexapp} />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: 'url(' + Nexapp + ')',
                                        opacity: '1',
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem md={7} sm={12} xs={12}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Technologies Nexapp
                                    </h4>
                                    <Muted>
                                      <h6>DÉVELOPPEUR LOGICIEL</h6>
                                    </Muted>
                                    <p className={classes.description} style={{ marginTop: -10 }}>
                                      Création d'applications mobiles et web en React et React Native.
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
                                    <a href="http://vapofoin.com/">
                                      <img alt="..." src={Vapofoin} />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: 'url(' + Vapofoin + ')',
                                        opacity: '1',
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem md={7} sm={12} xs={12}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Vapofoin INC.
                                    </h4>
                                    <Muted>
                                      <h6>PRÉSIDENT/PROPRIÉTAIRE</h6>
                                    </Muted>
                                    <p className={classes.description} style={{ marginTop: -10 }}>
                                      Entreprise de purificateurs à foin pour chevaux établie
                                      depuis maintenant près de 4 ans.
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
                                    <a href="http://www.canac.ca/fr/index.aspx">
                                      <img alt="..." src={Canac} />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: 'url(' + Canac + ')',
                                        opacity: '1',
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem md={7} sm={12} xs={12}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Canac
                                    </h4>
                                    <Muted>
                                      <h6>PRÉPOSÉ À LA COURS</h6>
                                    </Muted>
                                    <p className={classes.description} style={{ marginTop: -10 }}>
                                      Service à la clientèle et transport de matériaux lourds dans le domaine de la construction.
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
                                    <a href="https://www.micrologic.ca/">
                                      <img alt="..." src={Micrologic} />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage:
                                          'url(' + Micrologic + ')',
                                        opacity: '1',
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem md={7} sm={12} xs={12}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Micrologic (2016)
                                    </h4>
                                    <Muted>
                                      <h6>ASSOCIÉ AUX VENTES</h6>
                                    </Muted>
                                    <p className={classes.description} style={{ marginTop: -10 }}>
                                      Vendeur au détail et technicien.
                                      Réparation d'ordinateurs et vente de produits Apple.
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
                    tabButton: 'Formation',
                    tabIcon: Book,
                    tabContent: (

                      <GridContainer justify="center">
                        <GridItem
                          className={classes.gridItem}
                          md={5}
                          sm={12}
                          xs={12}
                        >
                          <Card className={classes.card} plain profile>
                            <GridContainer>
                              <GridItem md={12} sm={12} xs={12}>
                                <CardHeader image plain>
                                  <a href="Cégep Lévis-Lauzon">
                                    <img alt="..." src={collegeDeLevis} />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: 'url(' + collegeDeLevis + ')',
                                      opacity: '1',
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem md={12} sm={12} xs={12}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                      Collège de Lévis
                                  </h4>
                                  <Muted>
                                    <h6>DIPLÔME D'ÉTUDES SECONDAIRES</h6>
                                  </Muted>
                                  <p className={classes.description} style={{ marginTop: -10 }}>
                                      Fin en 2016. J'ai complété les cours de mathématiques avancées,
                                      de chimie et de physique.
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
                              <GridItem md={12} sm={12} xs={12}>
                                <CardHeader image plain>
                                  <a href="Cégep Lévis-Lauzon">
                                    <img alt="..." src={cegep} />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: 'url(' + cegep + ')',
                                      opacity: '1',
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem md={7} sm={12} xs={12}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                      Cégep Lévis-Lauzon
                                  </h4>
                                  <Muted>
                                    <h6>ÉTUDIANT EN INFORMATIQUE INDUSTRIELLE</h6>
                                  </Muted>
                                  <p className={classes.description} style={{ marginTop: -10 }}>
                                      3e et dernière année de technique de l'informatique industrielle.
                                      Apprentissage de divers languages de programmation et des pratiques
                                      d'architecture propres à l'industrie logicielle.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
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
                      href="https://github.com/Thyix/sexy-portfolio"
                    >
                      Sexy-Portfolio
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      className={classes.block}
                      href="https://github.com/Thyix"
                    >
                      Github
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      className={classes.block}
                      href="https://github.com/Thyix"
                    >
                      Contactez-moi
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , Fait{' '}
                par{' '}
                <a href="https://github.com/Thyix">William Garneau</a> pour vous faciliter
                la vie.
              </div>
            </div>
          }
        />
      </div>
    );
  }

}

export default withStyles(profilePageStyle)(ProfilePage);
