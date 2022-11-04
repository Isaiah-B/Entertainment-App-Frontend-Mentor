import { CSSProperties } from 'styled-components';
import GridLoader from 'react-spinners/GridLoader';

import { LoaderContainer } from './loader.styles';

const override: CSSProperties = {
  display: 'block',
  margin: '4rem auto',
  width: '10rem',
  height: '10rem',
};

function Loader() {
  return (
    <LoaderContainer>
      <h1>Sorry for the wait!</h1>
      <br />
      <br />
      <h1>
        Data for this page is hosted using the&nbsp;
        <a href="https://render.com/">render.com</a>
        &nbsp;
        free tier.
        <br />
        <br />
        Responses are delayed by up to 30 seconds after the server experiences
        15 minutes of inactivity.
      </h1>
      <GridLoader
        color="#fc4545"
        cssOverride={override}
        size={15}
        aria-label="Loading graphic"
        data-testid="loader"
      />
    </LoaderContainer>
  );
}

export default Loader;
