import React from 'react';
import PropTypes from 'prop-types';

export default function GitHubUser({ user }) {
  if (!user) {
    return null;
  }

  const { avatar_url, bio, name, location } = user;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <img
          src={avatar_url}
          alt="No logo"
          style={{ width: 100, height: 100 }}
        />
        <span style={{ fontSize: 64, display: 'inline', marginLeft: 30 }}>
          {name}
        </span>
      </div>
      <p>
        <strong>BIO: </strong>
        {bio}
      </p>
      <p>
        <strong>LOCATION: </strong>
        {location}
      </p>
    </div>
  );
}

GitHubUser.propTypes = {
  user: PropTypes.object,
};
