import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default class UserForm extends React.Component {
  state = { userName: '' };

  onUserChange = (event) => {
    const userName = event.target.value;
    this.setState({ userName });
  };

  onUserSelected = (event) => {
    event.preventDefault();

    const { userName } = this.state;
    const { setUser } = this.props;

    setUser(userName);
  };

  render() {
    const { userName } = this.state;

    return (
      <Form onSubmit={this.onUserSelected}>
        <Form.Label>GitHub username:</Form.Label>
        <FormControl
          size="lg"
          placeholder="e.g. facebook"
          onChange={this.onUserChange}
          value={userName}
          className="input-control"
        />
        <Button
          variant="secondary"
          onClick={this.onUserSelected}
          type="submit"
          size="lg"
          block
        >
          GO!
        </Button>
      </Form>
    );
  }
}

UserForm.propTypes = {
  setUser: PropTypes.func,
};
