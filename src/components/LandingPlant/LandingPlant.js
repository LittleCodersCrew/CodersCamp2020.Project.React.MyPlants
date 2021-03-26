import { useLocation } from 'react-router-dom';
import Plant from '../../assets/illustrations/plant.png';
import Cactus from '../../assets/illustrations/cactus.png';
import { img } from './LandingPlant.module.scss';

const LandingPlant = () => {
  const location = useLocation().pathname;

  const src = location === '/authors' ? Cactus : Plant;
  const alt = location === '/authors' ? 'cactus' : 'plant';

  return (
    <div>
      <img src={src} alt={alt} className={img} />
    </div>
  );
};

export default LandingPlant;
