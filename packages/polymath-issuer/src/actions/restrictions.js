import * as ui from '@polymathnetwork/ui';
import web3 from 'web3';
import moment from 'moment';

export const TOGGLE_RESTRICTIONS = 'restrictions/TOGGLE_RESTRICTIONS';
export const toggleRestrictions = isToggled => ({
  type: TOGGLE_RESTRICTIONS,
  isToggled,
});

export const DEFAULT_RESTRICTION = 'restrictions/DEFAULT_RESTRICTION';
export const setDefaultRestriction = restriction => ({
  type: DEFAULT_RESTRICTION,
  restriction,
});

export const DAILY_RESTRICTION = 'restrictions/DAILY_RESTRICTION';
export const setDailyRestriction = restriction => ({
  type: DAILY_RESTRICTION,
  restriction,
});

export const MODIFY_DAILY_RESTRICTION = 'restrictions/MODIFY_DAILY_RESTRICTION';
export const dailyRestrictionModified = isModified => ({
  type: MODIFY_DAILY_RESTRICTION,
  isModified,
});

export const MODIFY_DEFAULT_RESTRICTION =
  'restrictions/MODIFY_DEFAULT_RESTRICTION';
export const defaultRestrictionModified = isModified => ({
  type: MODIFY_DEFAULT_RESTRICTION,
  isModified,
});

const formatRestriction = restriction => {
  restriction.allowedTokens = web3.utils.fromWei(restriction.allowedTokens);
  restriction.startTime = moment.unix(restriction.startTime / 1000);
  restriction.endTime = moment.unix(restriction.endTime / 1000);
};

export const addVolumeRestrictionModule = () => async (
  dispatch: Function,
  getState: GetState
) => {
  const st: SecurityToken = getState().token.token.contract;
  const volumeRestrictionModule = await st.getVolumeRestrictionTransferManager();
  let moduleMetadata = {};

  if (volumeRestrictionModule)
    moduleMetadata = await st.getModule(volumeRestrictionModule.address);
  let defaultRestriction;
  let defaultDailyRestriction;
  let isArchived;
  dispatch(
    ui.tx(
      ['Enabling Volume Restriction Transfer Manager'],
      async () => {
        if (moduleMetadata.isArchived) {
          isArchived = true;
          await st.unarchiveModule(volumeRestrictionModule.address);
          defaultRestriction = await volumeRestrictionModule.getDefaultRestriction();
          defaultDailyRestriction = await volumeRestrictionModule.getDefaultDailyRestriction();
        } else {
          await st.setVolumeRestrictionTransferManager();
        }
      },
      'Volume Restriction Transfer Manager Enabled',
      () => {
        dispatch(toggleRestrictions(true));
        if (isArchived) {
          formatRestriction(defaultRestriction);
          formatRestriction(defaultDailyRestriction);
          if (defaultRestriction.rollingPeriodInDays != 0) {
            dispatch(setDefaultRestriction(defaultRestriction));
            dispatch(defaultRestrictionModified(true));
          }
          if (defaultDailyRestriction.rollingPeriodInDays != 0) {
            dispatch(setDailyRestriction(defaultDailyRestriction));
            dispatch(dailyRestrictionModified(true));
          }
        }
      },
      undefined,
      undefined,
      undefined,
      true
    )
  );
};

export const getVolumeRestrictionModule = () => async (
  dispatch: Function,
  getState: GetState
) => {
  const st: SecurityToken = getState().token.token.contract;
  const volumeRestrictionModule = await st.getVolumeRestrictionTransferManager();
  if (!volumeRestrictionModule) {
    return;
  }
  const moduleMetadata = await st.getModule(volumeRestrictionModule.address);
  if (volumeRestrictionModule && !moduleMetadata.isArchived) {
    dispatch(toggleRestrictions(true));
    const defaultRestriction = await volumeRestrictionModule.getDefaultRestriction();
    const defaultDailyRestriction = await volumeRestrictionModule.getDefaultDailyRestriction();
    formatRestriction(defaultRestriction);
    formatRestriction(defaultDailyRestriction);
    if (defaultRestriction.rollingPeriodInDays != 0) {
      dispatch(setDefaultRestriction(defaultRestriction));
      dispatch(defaultRestrictionModified(true));
    }
    if (defaultDailyRestriction.rollingPeriodInDays != 0) {
      dispatch(setDailyRestriction(defaultDailyRestriction));
      dispatch(dailyRestrictionModified(true));
    }
  }
};

export const archiveVolumeRestrictionModule = () => async (
  dispatch: Function,
  getState: GetState
) => {
  const st: SecurityToken = getState().token.token.contract;
  dispatch(
    ui.tx(
      ['Disabling Volume Restriction Transfer Manager'],
      async () => {
        const volumeRestrictionModule = await st.getVolumeRestrictionTransferManager();
        await st.archiveModule(volumeRestrictionModule.address);
      },
      'Volume Restriction Transfer Manager Disabled',
      () => {
        dispatch(toggleRestrictions(false));
      },
      undefined,
      undefined,
      undefined,
      true
    )
  );
};

export const addDefaultDailyRestriction = (
  allowedTokens,
  startTime,
  endTime,
  restrictionType
) => async (dispatch: Function, getState: GetState) => {
  const st: SecurityToken = getState().token.token.contract;
  dispatch(
    ui.tx(
      ['Proceeding with 24h Trade Volume Restriction'],
      async () => {
        const volumeRestrictionModule = await st.getVolumeRestrictionTransferManager();
        await volumeRestrictionModule.addDefaultDailyRestriction(
          allowedTokens,
          startTime,
          endTime,
          restrictionType
        );
      },
      'Configuring 24h Global Volume Restriction',
      () => {
        const defaultDailyRestriction = {
          allowedTokens,
          startTime,
          rollingPeriodInDays: '1',
          endTime,
          restrictionType,
        };
        formatRestriction(defaultDailyRestriction);
        dispatch(setDailyRestriction(defaultDailyRestriction));
        dispatch(dailyRestrictionModified(true));
      },
      undefined,
      undefined,
      undefined,
      true
    )
  );
};

export const modifyDefaultDailyRestriction = (
  allowedTokens,
  startTime,
  endTime,
  restrictionType
) => async (dispatch: Function, getState: GetState) => {
  const st: SecurityToken = getState().token.token.contract;
  dispatch(
    ui.tx(
      ['Proceeding with 24h Trade Volume Restriction'],
      async () => {
        const volumeRestrictionModule = await st.getVolumeRestrictionTransferManager();
        await volumeRestrictionModule.modifyDefaultDailyRestriction(
          allowedTokens,
          startTime,
          endTime,
          restrictionType
        );
      },
      'Configuring 24h Global Volume Restriction',
      () => {
        const defaultDailyRestriction = {
          allowedTokens,
          startTime,
          rollingPeriodInDays: '1',
          endTime,
          restrictionType,
        };
        formatRestriction(defaultDailyRestriction);
        dispatch(setDailyRestriction(defaultDailyRestriction));
        dispatch(dailyRestrictionModified(true));
      },
      undefined,
      undefined,
      undefined,
      true
    )
  );
};

export const addDefaultRestriction = (
  allowedTokens,
  startTime,
  rollingPeriodInDays,
  endTime,
  restrictionType
) => async (dispatch: Function, getState: GetState) => {
  const st: SecurityToken = getState().token.token.contract;
  dispatch(
    ui.tx(
      ['Proceed with Custom Trade Volume Restriction'],
      async () => {
        const volumeRestrictionModule = await st.getVolumeRestrictionTransferManager();
        await volumeRestrictionModule.addDefaultRestriction(
          allowedTokens,
          startTime,
          rollingPeriodInDays,
          endTime,
          restrictionType
        );
      },
      'Custom Trade Volume Restriction Was Successfully Configured',
      () => {
        const defaultRestriction = {
          allowedTokens,
          startTime,
          rollingPeriodInDays,
          endTime,
          restrictionType,
        };
        formatRestriction(defaultRestriction);
        dispatch(setDefaultRestriction(defaultRestriction));
        dispatch(defaultRestrictionModified(true));
      },
      undefined,
      undefined,
      undefined,
      true
    )
  );
};

export const modifyDefaultRestriction = (
  allowedTokens,
  startTime,
  rollingPeriodInDays,
  endTime,
  restrictionType
) => async (dispatch: Function, getState: GetState) => {
  const st: SecurityToken = getState().token.token.contract;
  dispatch(
    ui.tx(
      ['Modify Custom Trade Volume Restriction'],
      async () => {
        const volumeRestrictionModule = await st.getVolumeRestrictionTransferManager();
        await volumeRestrictionModule.modifyDefaultRestriction(
          allowedTokens,
          startTime,
          rollingPeriodInDays,
          endTime,
          restrictionType
        );
      },
      'Custom Trade Volume Restriction Was Successfully Configured',
      () => {
        const defaultRestriction = {
          allowedTokens,
          startTime,
          rollingPeriodInDays,
          endTime,
          restrictionType,
        };
        formatRestriction(defaultRestriction);
        dispatch(setDefaultRestriction(defaultRestriction));
        dispatch(defaultRestrictionModified(true));
      },
      undefined,
      undefined,
      undefined,
      true
    )
  );
};