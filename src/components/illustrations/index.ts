import type { ComponentType } from 'react';
import type { IllustrationKey } from './types';
import MaintenanceReport from './MaintenanceReport';
import SearchVsAi from './SearchVsAi';
import ClickShare from './ClickShare';

/** Service page data stays plain .ts, so pages pick their pictures by key. */
export const ILLUSTRATIONS: Record<IllustrationKey, ComponentType> = {
  'maintenance-report': MaintenanceReport,
  'search-vs-ai': SearchVsAi,
  'click-share': ClickShare,
};
