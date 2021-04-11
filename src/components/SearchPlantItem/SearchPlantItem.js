import React from 'react';
import PropTypes from 'prop-types';
import { searchPlantItemContainer, itemHeader, itemHeaderTitle, itemContent, itemList, itemListItem, itemFooter } from './SearchPlantItem.module.scss';

import Text from '../Text';

import Image from '../../assets/illustrations/plant-leaf.png';

// eslint-disable-next-line max-len
const SearchPlantItem = ({ image, name, latinName, minTemp, maxTemp, sunlight, humidity, bgcolor }) => (
  <div className={searchPlantItemContainer} style={{ backgroundColor: bgcolor }}>
    <div className={itemHeader}>
      <img src={image} alt="plant icon" width="50px" height="50px" />
      <div className={itemHeaderTitle}>
        <Text text={name} fontsize="25px" />
        <Text text={latinName} fontsize="20px" />
      </div>
    </div>
    <div className={itemContent}>
      <ul className={itemList}>
        <li className={itemListItem}>
          <span>Min temperature:</span>
          { minTemp }
          °C
        </li>
        <li className={itemListItem}>
          <span>Max temperature:</span>
          { maxTemp }
          °C
        </li>
        <li className={itemListItem}>
          <span>Sunlight:</span>
          { sunlight }
        </li>
        <li className={itemListItem}>
          <span>Humidity:</span>
          { humidity }
        </li>
      </ul>
    </div>
    <footer className={itemFooter}>
      <Text text="Click to find out more" fontsize="20px" />
    </footer>
  </div>
);

SearchPlantItem.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string.isRequired,
  latinName: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  sunlight: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
  bgcolor: PropTypes.string
};
SearchPlantItem.defaultProps = { image: Image, bgcolor: '#7FD291' };

export default SearchPlantItem;
