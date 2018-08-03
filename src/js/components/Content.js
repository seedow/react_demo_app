import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Content = (props) => {
  const { componentToRender } = props;
  return (
    <Fragment>
      <Header />
      <div id="content">
        {componentToRender()}
      </div>
    </Fragment>
  );
};

Content.propTypes = {
  componentToRender: PropTypes.func.isRequired,
};

export default Content;
