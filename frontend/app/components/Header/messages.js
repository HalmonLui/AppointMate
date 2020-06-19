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
  discover: {
    id: `${scope}.discover`,
    defaultMessage: 'Discover',
  },
  bookings: {
    id: `${scope}.bookings`,
    defaultMessage: 'Bookings',
  },
  loyalty: {
    id: `${scope}.loyalty`,
    defaultMessage: 'Loyalty',
  },
  settings: {
    id: `${scope}.settings`,
    defaultMessage: 'Settings',
  },
});
