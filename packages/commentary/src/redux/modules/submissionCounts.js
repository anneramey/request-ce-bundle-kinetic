import { Utils } from 'common';
const { noPayload, withPayload } = Utils;
const ns = Utils.namespaceBuilder('services/submissionCounts');

export const types = {
  FETCH_SUBMISSION_COUNTS_REQUEST: ns('FETCH_SUBMISSION_COUNTS_REQUEST'),
  FETCH_SUBMISSION_COUNTS_COMPLETE: ns('FETCH_SUBMISSION_COUNTS_COMPLETE'),
  FETCH_COMMENTS_COUNTS_REQUEST: ns('FETCH_COMMENTS_COUNTS_REQUEST'),
  FETCH_COMMENTS_COUNTS_COMPLETE: ns('FETCH_COMMENTS_COUNTS_COMPLETE'),
};

export const actions = {
  fetchSubmissionCountsRequest: noPayload(
    types.FETCH_SUBMISSION_COUNTS_REQUEST,
  ),
  fetchSubmissionCountsComplete: withPayload(
    types.FETCH_SUBMISSION_COUNTS_COMPLETE,
  ),
  fetchCommentsCountsRequest: noPayload(types.FETCH_COMMENTS_COUNTS_REQUEST),
  fetchCommentsCountsComplete: withPayload(
    types.FETCH_COMMENTS_COUNTS_COMPLETE,
  ),
};

export const defaultState = {
  data: {},
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.FETCH_SUBMISSION_COUNTS_COMPLETE:
      return { data: payload };
    case types.FETCH_COMMENTS_COUNTS_COMPLETE:
      return { data: payload };
    default:
      return state;
  }
};

export default reducer;
