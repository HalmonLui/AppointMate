/**
 * Asynchronously loads the component for FeaturePage
 */

import React from 'react';
import loadable from 'utils/loadable';
import LoadingIndicator from 'components/LoadingIndicator';
import { css } from "@emotion/core";
import SyncLoader from "react-spinners/SyncLoader";

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
