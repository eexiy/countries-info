import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { useSelector } from 'react-redux';
import { selectDetails } from '../redux/details/details-selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearDetails, loadCountryByName } from '../redux/details/details-actions';


export const Details = () => {
  const { name } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const { currentCountry, status, error } = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name))

    return () => {
      dispatch(clearDetails())
    }
  }, [name, dispatch])

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
