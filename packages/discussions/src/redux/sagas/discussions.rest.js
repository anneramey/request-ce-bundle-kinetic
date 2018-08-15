import { all, call, select, take, put, takeEvery } from 'redux-saga/effects';
import { types, actions, selectToken } from '../modules/discussions';
import axios from 'axios';

const DISCUSSION_BASE_URL = 'http://localhost:7071/acme/app/api/v1/discussions';

const discussionIdFromTopic = topicId =>
  topicId.replace('discussions/discussion/', '');

export function* sendMessageTask(action) {
  const token = yield select(selectToken);

  const { data } = yield call(axios.request, {
    url: `${DISCUSSION_BASE_URL}/${action.payload.id}/messages`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      content: [
        {
          type: 'text',
          value: action.payload.message,
        },
      ],
    },
  });
}

export function* joinDiscussionTask(action) {
  const token = yield select(selectToken);
  const { data } = yield call(axios.request, {
    url: `${DISCUSSION_BASE_URL}/${action.payload}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  yield put(actions.addDiscussion(data.discussion));
  yield put(actions.addTopic(data.discussion.id));
}

export function* watchDiscussionRest() {
  yield all([
    takeEvery(types.SEND_MESSAGE, sendMessageTask),
    takeEvery(types.JOIN_DISCUSSION, joinDiscussionTask),
  ]);
}
