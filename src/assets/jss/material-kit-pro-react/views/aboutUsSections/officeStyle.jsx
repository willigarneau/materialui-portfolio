import {
  title,
  description,
  mrAuto,
  mlAuto,
} from '../../../material-kit-pro-react.jsx';
import imagesStyles from '../../../material-kit-pro-react/imagesStyles.jsx';

const rounded = imagesStyles.imgRounded;
const imageFluid = imagesStyles.imgFluid;

const servicesStyle = {
  title,
  description,
  mrAuto,
  mlAuto,
  textCenter: {
    textAlign: 'center!important',
  },
  office: {
    '& img': {
      margin: '20px 0px',
    },
  },
  imagesStyles,
  rounded,
  imageFluid,
};

export default servicesStyle;
