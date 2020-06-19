/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.FeaturePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Dummy Loyalty Page',
  },
  scaffoldingHeader: {
    id: `${scope}.scaffolding.header`,
    defaultMessage: 'FIFTY POINTS',
  },
  scaffoldingMessage: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: `Free hairwash`,
  },
  bookNail: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: 'SIXTY POINTS'
  },
  bookNailMessage: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: '$5 off your next whatever'
  },
});
