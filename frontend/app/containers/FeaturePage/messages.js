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
    defaultMessage: 'Dummy Booking Page',
  },
  scaffoldingHeader: {
    id: `${scope}.scaffolding.header`,
    defaultMessage: 'Book haircut',
  },
  scaffoldingMessage: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: `Lorem ipsum haircut book`,
  },
  bookNail: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: 'Book nail thing'
  },
  bookNailMessage: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: 'Lorem ipsum info about nails'
  },
  googlemap: {
    id: 'idhere',
    defaultMessage: 'Im a Google Map integration'
  }
});
