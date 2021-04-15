import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../assets/icons/Profile2.png';
import ImagePlant from '../../assets/illustrations/plant-leaf.png';
import Text from '../Text/Text';
import { searchUserItemContainer, searchUserItemContent, searchUserItemList, searchUserItemLeft, searchUserItemListItem, searchUserPlants, searchUserFooter } from './SearchUserItem.module.scss';
import URL from '../../constants/URL';

const SearchUserItem = ({ id, name, login, plants, notes, bgcolor }) => (
  <div className={searchUserItemContainer} style={{ backgroundColor: bgcolor }}>
    <div className={searchUserItemContent}>
      <div className={searchUserItemLeft}>
        <img src={Image} alt="user icon" width="115px" height="160px" />
        <ul className={searchUserItemList}>
          <li className={searchUserItemListItem}>
            Login:
            {` ${login}`}
          </li>
          <li className={searchUserItemListItem}>
            Name:
            {` ${name}`}
          </li>
          <li className={searchUserItemListItem}>
            Number of owned plants:
            {` ${plants.length}`}
          </li>
          <li className={searchUserItemListItem}>
            Number of notes:
            {` ${notes.length}`}
          </li>
        </ul>
      </div>
      <div className={searchUserPlants}>
        {plants.slice(0, 6).map((plant) => (
          <img src={plant.image || ImagePlant} alt="plant icon" width="80px" height="80px" />
        ))}
      </div>
    </div>
    <div className={searchUserFooter}>
      <a href={`${URL}/user/${id}`}>
        <Text text="Click to find out more!" fontsize="20px" />
      </a>
    </div>
  </div>
);

SearchUserItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  plants: PropTypes.arrayOf(Object).isRequired,
  notes: PropTypes.arrayOf(Object).isRequired,
  bgcolor: PropTypes.string
};

SearchUserItem.defaultProps = { bgcolor: '#7fd291' };

export default SearchUserItem;
