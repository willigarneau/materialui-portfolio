import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import Favorite from '@material-ui/icons/Favorite';
import Header from '../../main/components/Header/Header.jsx';
import Footer from '../../main/components/Footer/Footer.jsx';
import Button from '../../main/components/CustomButtons/Button.jsx';
import GridContainer from '../../main/components/Grid/GridContainer.jsx';
import GridItem from '../../main/components/Grid/GridItem.jsx';
import HeaderLinks from '../../main/components/Header/HeaderLinks.jsx';
import NavPills from '../../main/components/NavPills/NavPills.jsx';
import Parallax from '../../main/components/Parallax/Parallax.jsx';

import ProjectCard from '../components/ProjectCard.jsx';

import github from '../../assets/images/icons/github-brands.svg';
import linkedin from '../../assets/images/icons/linkedin-brands.svg';
import instagram from '../../assets/images/icons/instagram-brands.svg';

import profile from '../../assets/images/profilePicture.jpg';

import profilePageStyle from '../../assets/jss/material-kit-react/views/profilePage.jsx';

type Props = {
  classes:any,
  rest:any,
}

function Welcome({ classes, rest }:Props) {
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        brand="William Garneau"
        changeColorOnScroll={{
          height: 200,
          color: 'white',
        }}
        color="transparent"
        fixed
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <Parallax big filter image={require('../../assets/images/minimalist-portfolio.gif')} medium />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={6} sm={12} xs={12}>
                <div className={classes.profile}>
                  <div>
                    <img alt="..." className={imageClasses} src={profile} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>WILLIAM GARNEAU</h3>
                    <h5 style={{ marginTop: -20 }}>Développeur de logiciels</h5>
                    <Button
                      className={classes.imgRoundedCircle}
                      href="https://www.linkedin.com/in/william-garneau-904707148/"
                      justIcon
                      link
                    >
                      <img alt="linkedinLogo" src={linkedin} style={{ marginTop: 17 }} />
                    </Button>
                    <Button
                      className={classes.imgRoundedCircle}
                      href="https://github.com/Thyix"
                      justIcon
                      link
                    >
                      <img alt="githubLogo" src={github} style={{ marginTop: 15 }} />
                    </Button>
                    <Button
                      className={classes.imgRoundedCircle}
                      href="https://www.instagram.com/william_garneau/"
                      justIcon
                      link
                    >
                      <img alt="instagramLogo" src={instagram} style={{ marginTop: 17 }} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              J'ai 19 ans, je suis passionné par la programmation, l'intelligence artificielle,
              la musique et le sport. J'étudie actuellement au Cégep Lévis-Lauzon en informatique
              industrielle.
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem className={classes.navWrapper} md={10} sm={12} xs={12}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: 'Projets',
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem md={4} sm={12} xs={12}>
                            <ProjectCard
                              className={navImageClasses}
                              description={'🕺 Top down 3D fighting game based on the naruto anime. Created with Unity 3D and Photon Cloud Engine. 🎮'}
                              headLine={'3D Naruto Project'}
                              img={'narutoProject'}
                              link={'https://github.com/Thyix/naruto-project'}
                            />
                          </GridItem>
                          <GridItem md={4} sm={12} xs={12}>
                            <img
                              alt="..."
                              className={navImageClasses}
                              src={profile}
                            />
                            <img
                              alt="..."
                              className={navImageClasses}
                              src={profile}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: 'Expérience',
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem md={4} sm={12} xs={12}>
                            <img
                              alt="..."
                              className={navImageClasses}
                              src={profile}
                            />
                            <img
                              alt="..."
                              className={navImageClasses}
                              src={profile}
                            />
                            <img
                              alt="..."
                              className={navImageClasses}
                              src={profile}
                            />
                          </GridItem>
                          <GridItem md={4} sm={12} xs={12}>
                            <img
                              alt="..."
                              className={navImageClasses}
                              src={profile}
                            />
                            <img
                              alt="..."
                              className={navImageClasses}
                              src={profile}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: 'Passions',
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem md={4} sm={12} xs={12}>
                            <img
                              alt="..."
                              className={navImageClasses}
                              src={profile}
                            />
                            <img
                              alt="..."
                              className={navImageClasses}
                              src={profile}
                            />
                          </GridItem>
                          <GridItem md={4} sm={12} xs={12}>
                            <img
                              alt="..."
                              className={navImageClasses}
                              src={profile}
                            />
                            <img
                              alt="..."
                              className={navImageClasses}
                              src={profile}
                            />
                            <img
                              alt="..."
                              className={navImageClasses}
                              src={profile}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withStyles(profilePageStyle)(Welcome);
