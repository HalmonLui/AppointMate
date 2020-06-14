/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  signout: {
    id: `${scope}.home`,
    defaultMessage: 'Sign out',
  },
  bookings: {
    id: `${scope}.bookings`,
    defaultMessage: 'Bookings',
  },
  settings: {
    id: `${scope}.settings`,
    defaultMessage: 'Settings',
  },
});
