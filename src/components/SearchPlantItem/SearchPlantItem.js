import React from 'react';
import PropTypes from 'prop-types';
import { searchPlantItemContainer, itemHeader, itemHeaderTitle, itemContent, itemList, itemListItem, itemFooter } from './SearchPlantItem.module.scss';
import Text from '../Text';
import Image from '../../assets/illustrations/plant-leaf.png';
import URL from '../../constants/URL';

const SearchPlantItem = ({ image, name, latinName, minTemp, maxTemp, sunlight, humidity, bgcolor }) => (
  <div className={searchPlantItemContainer} style={{ backgroundColor: bgcolor }}>
    <div className={itemHeader}>
      <img src={image || Image} alt="plant icon" width="50px" height="50px" />
      <div className={itemHeaderTitle}>
        <Text text={name} fontsize="25px" />
        <Text text={latinName} fontsize="20px" />
      </div>
    </div>
    <div className={itemContent}>
      <ul className={itemList}>
        <li className={itemListItem}>
          <span>Min temperature:</span>
          <p>
            { minTemp }
            °C
          </p>
        </li>
        <li className={itemListItem}>
          <span>Max temperature:</span>
          <p>
            { maxTemp }
            °C
          </p>
        </li>
        <li className={itemListItem}>
          <span>Sunlight:</span>
          <p>{ sunlight }</p>
        </li>
        <li className={itemListItem}>
          <span>Humidity:</span>
          <p>{ humidity }</p>
        </li>
      </ul>
    </div>
    <footer className={itemFooter}>
      <a href={`${URL}/plant/${name}`}><Text text="Click to find out more" fontsize="20px" /></a>
    </footer>
  </div>
);

SearchPlantItem.propTypes = {
  image: PropTypes.string,
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
