import Button from '../button/Button';

import './error.scss';

import iconError from '/src/assets/images/icon-error.svg';
import iconRetry from '/src/assets/images/icon-retry.svg';

export default function Error({ locationInfo, setLocationInfo }) {
  return (
    <div className="error-box">
      <img src={iconError} alt="Error icon" className="error-icon" />
      <h1 className="error-title">Something went wrong</h1>
      <p className="error-text">
        We couldn’t connect to the server (API error). Please try again in a few
        moments.
      </p>
      <Button onClick={() => setLocationInfo({ ...locationInfo })}>
        <img src={iconRetry} alt="Retry icon" />
        <span>Retry</span>
      </Button>
    </div>
  );
}
