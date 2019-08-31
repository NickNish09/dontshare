/**
 *
 * Card
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const CardBody = styled.div`
  padding: 3em;
`;

const CardTitle = styled.h1`
  font-size: 22px;
  color: blueviolet;
`;

function Card() {
  return (
    <CardBody>
      <CardTitle>
        <FormattedMessage {...messages.header} />
      </CardTitle>
    </CardBody>
  );
}

Card.propTypes = {};

export default Card;
