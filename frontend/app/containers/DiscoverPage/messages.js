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
    defaultMessage: 'Hi, Name!',
  },
  scaffoldingHeader: {
    id: `${scope}.scaffolding.header`,
    defaultMessage: 'Trending Near You',
  },
  scaffoldingHeader2: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: `Recommendations`,
  },
  scaffoldingHeader3: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: `Hot Deals`,
  },
  bookNail: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: 'Book Nails'
  },
  bookNailMessage: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: 'Look at these reviews'
  },
  googlemap: {
    id: 'idhere',
    defaultMessage: 'Im a Google Map integration'
  }
});
