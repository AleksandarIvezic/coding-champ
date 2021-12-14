import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import mockUser from '../Library/mockUser';
import '../Styles/Profile.css';

const Profile = () => {
  let url;
  if (mockUser.avatar) url = mockUser.avatar;
  else url = 'programmer.png';
  return (
    <>
      <header className="profile-header">
        <img src={url} alt="avatar" />
        <div className="info">
          <h3>
            Name:
            <span>{` ${mockUser.name}`}</span>
          </h3>
          <h3>
            E-mail:
            <span>{` ${mockUser.email}`}</span>
          </h3>
        </div>
      </header>
      <div className="best-scores">
        <h3>Best scores</h3>
        <table>
          <thead>
            <tr>
              <th>Categories</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {mockUser.bestScores.map((category) => (
              <tr key={uuidv4()}>
                <td>{Object.keys(category)[0]}</td>
                <td>{category[Object.keys(category)[0]]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="trophies">
        <h3>Trophies</h3>
        {mockUser.trophies.map((trophy) => (
          <h4 key={uuidv4()}>{trophy}</h4>
        ))}
      </div>
    </>
  );
};

export default Profile;
