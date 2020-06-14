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
    defaultMessage: 'Dummy Discover Page',
  },
  scaffoldingHeader: {
    id: `${scope}.scaffolding.header`,
    defaultMessage: 'Find stuff near ya',
  },
  scaffoldingMessage: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: `Woah much stuff`,
  },
  bookNail: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: 'Very wow'
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
