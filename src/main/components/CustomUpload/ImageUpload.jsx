import React from 'react';
// used for making the prop types of this component
import PropTypes from 'prop-types';

// core components
import Button from '../CustomButtons/Button.jsx';

import defaultImage from '../../../assets/images/naruto-project.gif';
import defaultAvatar from '../../../assets/images/profilePicture.jpg';

class ImageUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage,
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleImageChange(e) {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }
  handleSubmit(e) {
    e.preventDefault();
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
  }
  handleClick() {
    this.refs.fileInput.click();
  }
  handleRemove() {
    this.setState({
      file: null,
      imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage,
    });
    this.refs.fileInput.value = null;
  }
  render() {
    const {
      avatar,
      addButtonProps,
      changeButtonProps,
      removeButtonProps,
    } = this.props;
    return (
      <div className="fileinput text-center">
        <input onChange={this.handleImageChange} ref="fileInput" type="file" />
        <div className={'thumbnail' + (avatar ? ' img-circle' : '')}>
          <img alt="..." src={this.state.imagePreviewUrl} />
        </div>
        <div>
          {this.state.file === null ? (
            <Button {...addButtonProps} onClick={() => this.handleClick()}>
              {avatar ? 'Add Photo' : 'Select image'}
            </Button>
          ) : (
            <span>
              <Button {...changeButtonProps} onClick={() => this.handleClick()}>
                Change
              </Button>
              {avatar ? <br /> : null}
              <Button
                {...removeButtonProps}
                onClick={() => this.handleRemove()}
              >
                <i className="fas fa-times" /> Remove
              </Button>
            </span>
          )}
        </div>
      </div>
    );
  }

}

ImageUpload.propTypes = {
  avatar: PropTypes.bool,
  addButtonProps: PropTypes.object,
  changeButtonProps: PropTypes.object,
  removeButtonProps: PropTypes.object,
};

export default ImageUpload;
