import Plant from '../../assets/illustrations/plant.png';
import Cactus from '../../assets/illustrations/cactus.png';
import styles from './LandingPlant.module.scss';

function LandingPlant() {
  if (window.location.pathname === '/authors') {
    return (
      <div>
        <img src={Cactus} alt="cactus" className={styles.img} />
      </div>
    );
  }

  return (
    <div>
      <img src={Plant} alt="plant" className={styles.img} />
    </div>
  );
}

export default LandingPlant;
