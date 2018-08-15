import { List, Map } from 'immutable';
import {
  reducer,
  actions,
  types,
  formatMessages,
  partitionListBy,
  Discussion,
  State,
} from './discussions';

const message0 = {
  attachmentContent: null,
  content: [
    {
      type: 'text',
      value: "I didn't see you there.",
    },
  ],
  createdAt: '2017-10-24T15:06:44.000-05:00',
  createdBy: {
    displayName: 'Matt Raykowski',
    email: 'matt.raykowski@kineticdata.com',
    id: 'fcaac140-8c66-11e5-a03d-5b4688038d7d',
    spaceAdmin: true,
    username: 'matt.raykowski@kineticdata.com',
  },
  discussionId: '96f1f270-9f0d-11e8-9752-25841347f4b8',
  id: '1a640d20-a0a6-11e8-a6dd-85ec4bfd9714',
  parent: null,
  spaceId: 'fc5463dd-8c66-11e5-a03d-c50fbb2a25bd',
  type: 'User',
  updatedAt: '2017-10-24T15:06:44.000-05:00',
  updatedBy: {
    displayName: 'Matt Raykowski',
    email: 'matt.raykowski@kineticdata.com',
    id: 'fcaac140-8c66-11e5-a03d-5b4688038d7d',
    spaceAdmin: true,
    username: 'matt.raykowski@kineticdata.com',
  },
  versionId: '1a640d21-a0a6-11e8-a6dd-85ec4bfd9714',
};
const message1 = {
  attachmentContent: null,
  content: [
    {
      type: 'text',
      value: 'Hey Norm',
    },
  ],
  createdAt: '2017-10-24T15:06:37.000-05:00',
  createdBy: {
    displayName: 'Matt Raykowski',
    email: 'matt.raykowski@kineticdata.com',
    id: 'fcaac140-8c66-11e5-a03d-5b4688038d7d',
    spaceAdmin: true,
    username: 'matt.raykowski@kineticdata.com',
  },
  discussionId: '96f1f270-9f0d-11e8-9752-25841347f4b8',
  id: '1e0f5cd5-f0d3-4b9b-b3bf-a29676a98302',
  parent: null,
  spaceId: 'fc5463dd-8c66-11e5-a03d-c50fbb2a25bd',
  type: 'User',
  updatedAt: '2017-10-24T15:06:37.000-05:00',
  updatedBy: {
    displayName: 'Matt Raykowski',
    email: 'matt.raykowski@kineticdata.com',
    id: 'fcaac140-8c66-11e5-a03d-5b4688038d7d',
    spaceAdmin: true,
    username: 'matt.raykowski@kineticdata.com',
  },
  versionId: '1e0f5cd5-f0d3-4b9b-b3bf-a29676a98302',
};

const message2 = {
  attachmentContent: null,
  content: [
    {
      type: 'text',
      value: 'yo',
    },
  ],
  createdAt: '2017-10-24T13:36:32.000-05:00',
  createdBy: {
    displayName: 'Norm Orstad',
    email: 'norm.orstad@kineticdata.com',
    id: 'e988c5c8-7dfc-4c20-bbc7-467f5c800452',
    spaceAdmin: true,
    username: 'norm.orstad@kineticdata.com',
  },
  discussionId: '96f1f270-9f0d-11e8-9752-25841347f4b8',
  id: '9bb084da-55b5-462d-8300-aa41f360f5c6',
  parent: null,
  spaceId: 'fc5463dd-8c66-11e5-a03d-c50fbb2a25bd',
  type: 'User',
  updatedAt: '2017-10-24T13:36:32.000-05:00',
  updatedBy: {
    displayName: 'Norm Orstad',
    email: 'norm.orstad@kineticdata.com',
    id: 'e988c5c8-7dfc-4c20-bbc7-467f5c800452',
    spaceAdmin: true,
    username: 'norm.orstad@kineticdata.com',
  },
  versionId: '9bb084da-55b5-462d-8300-aa41f360f5c6',
};

const message3 = {
  attachmentContent: null,
  content: [
    {
      type: 'text',
      value: 'Yeah it was the good pizza from Grand Ole Creamery',
    },
  ],
  createdAt: '2017-10-24T13:29:09.000-05:00',
  createdBy: {
    displayName: 'Shayne Koestler',
    email: 'shayne.koestler@kineticdata.com',
    id: 'd1a4321d-7add-46a9-947f-8ff324e887e8',
    spaceAdmin: true,
    username: 'shayne.koestler@kineticdata.com',
  },
  discussionId: '96f1f270-9f0d-11e8-9752-25841347f4b8',
  id: '4db8c3b7-3ea1-4215-a49e-458a136ec521',
  parent: null,
  spaceId: 'fc5463dd-8c66-11e5-a03d-c50fbb2a25bd',
  type: 'User',
  updatedAt: '2017-10-24T13:29:09.000-05:00',
  updatedBy: {
    displayName: 'Shayne Koestler',
    email: 'shayne.koestler@kineticdata.com',
    id: 'd1a4321d-7add-46a9-947f-8ff324e887e8',
    spaceAdmin: true,
    username: 'shayne.koestler@kineticdata.com',
  },
  versionId: '4db8c3b7-3ea1-4215-a49e-458a136ec521',
};

const message4 = {
  attachmentContent: null,
  content: [
    {
      type: 'text',
      value: 'Was the food good? I never get any of the food. QQ',
    },
  ],
  createdAt: '2017-10-24T12:55:11.000-05:00',
  createdBy: {
    displayName: 'Matt Raykowski',
    email: 'matt.raykowski@kineticdata.com',
    id: 'fcaac140-8c66-11e5-a03d-5b4688038d7d',
    spaceAdmin: true,
    username: 'matt.raykowski@kineticdata.com',
  },
  discussionId: '96f1f270-9f0d-11e8-9752-25841347f4b8',
  id: '4a997838-e9de-4dec-9873-632566af448d',
  parent: null,
  spaceId: 'fc5463dd-8c66-11e5-a03d-c50fbb2a25bd',
  type: 'User',
  updatedAt: '2017-10-24T12:55:11.000-05:00',
  updatedBy: {
    displayName: 'Matt Raykowski',
    email: 'matt.raykowski@kineticdata.com',
    id: 'fcaac140-8c66-11e5-a03d-5b4688038d7d',
    spaceAdmin: true,
    username: 'matt.raykowski@kineticdata.com',
  },
  versionId: '4a997838-e9de-4dec-9873-632566af448d',
};

const message5 = {
  attachmentContent: null,
  content: [
    {
      type: 'text',
      value: 'Hi Shayne',
    },
  ],
  createdAt: '2017-10-24T12:53:53.000-05:00',
  createdBy: {
    displayName: 'Matt Raykowski',
    email: 'matt.raykowski@kineticdata.com',
    id: 'fcaac140-8c66-11e5-a03d-5b4688038d7d',
    spaceAdmin: true,
    username: 'matt.raykowski@kineticdata.com',
  },
  discussionId: '96f1f270-9f0d-11e8-9752-25841347f4b8',
  id: '519b2ae0-6f39-4167-906e-18d2810fb23c',
  parent: null,
  spaceId: 'fc5463dd-8c66-11e5-a03d-c50fbb2a25bd',
  type: 'User',
  updatedAt: '2017-10-24T12:53:53.000-05:00',
  updatedBy: {
    displayName: 'Matt Raykowski',
    email: 'matt.raykowski@kineticdata.com',
    id: 'fcaac140-8c66-11e5-a03d-5b4688038d7d',
    spaceAdmin: true,
    username: 'matt.raykowski@kineticdata.com',
  },
  versionId: '519b2ae0-6f39-4167-906e-18d2810fb23c',
};

const message6 = {
  attachmentContent: null,
  content: [
    {
      type: 'text',
      value: 'Hi matt',
    },
  ],
  createdAt: '2017-10-24T12:53:47.000-05:00',
  createdBy: {
    displayName: 'Shayne Koestler',
    email: 'shayne.koestler@kineticdata.com',
    id: 'd1a4321d-7add-46a9-947f-8ff324e887e8',
    spaceAdmin: true,
    username: 'shayne.koestler@kineticdata.com',
  },
  discussionId: '96f1f270-9f0d-11e8-9752-25841347f4b8',
  id: '3c645ddb-e135-4782-9349-e72c12c90587',
  parent: null,
  spaceId: 'fc5463dd-8c66-11e5-a03d-c50fbb2a25bd',
  type: 'User',
  updatedAt: '2017-10-24T12:53:47.000-05:00',
  updatedBy: {
    displayName: 'Shayne Koestler',
    email: 'shayne.koestler@kineticdata.com',
    id: 'd1a4321d-7add-46a9-947f-8ff324e887e8',
    spaceAdmin: true,
    username: 'shayne.koestler@kineticdata.com',
  },
  versionId: '3c645ddb-e135-4782-9349-e72c12c90587',
};

const message7 = {
  attachmentContent: null,
  content: [
    {
      type: 'text',
      value: 'And sending messages works too.',
    },
  ],
  createdAt: '2017-10-23T12:53:37.000-05:00',
  createdBy: {
    displayName: 'Matt Raykowski',
    email: 'matt.raykowski@kineticdata.com',
    id: 'fcaac140-8c66-11e5-a03d-5b4688038d7d',
    spaceAdmin: true,
    username: 'matt.raykowski@kineticdata.com',
  },
  discussionId: '96f1f270-9f0d-11e8-9752-25841347f4b8',
  id: '1a3c51a0-9ac0-45b4-99ad-8dd77943dbf1',
  parent: null,
  spaceId: 'fc5463dd-8c66-11e5-a03d-c50fbb2a25bd',
  type: 'User',
  updatedAt: '2017-10-23T12:53:37.000-05:00',
  updatedBy: {
    displayName: 'Matt Raykowski',
    email: 'matt.raykowski@kineticdata.com',
    id: 'fcaac140-8c66-11e5-a03d-5b4688038d7d',
    spaceAdmin: true,
    username: 'matt.raykowski@kineticdata.com',
  },
  versionId: '1a3c51a0-9ac0-45b4-99ad-8dd77943dbf1',
};

const message8 = {
  attachmentContent: null,
  content: [
    {
      type: 'text',
      value:
        "Welcome to Ruby Tuesday, this is Angular but you'll see it in React in just a sec.",
    },
  ],
  createdAt: '2017-10-23T12:53:04.000-05:00',
  createdBy: {
    displayName: 'Matt Raykowski',
    email: 'matt.raykowski@kineticdata.com',
    id: 'fcaac140-8c66-11e5-a03d-5b4688038d7d',
    spaceAdmin: true,
    username: 'matt.raykowski@kineticdata.com',
  },
  discussionId: '96f1f270-9f0d-11e8-9752-25841347f4b8',
  id: '1343037a-8dbc-442d-bfb1-fd4e4022ec0c',
  parent: null,
  spaceId: 'fc5463dd-8c66-11e5-a03d-c50fbb2a25bd',
  type: 'User',
  updatedAt: '2017-10-23T12:53:04.000-05:00',
  updatedBy: {
    displayName: 'Matt Raykowski',
    email: 'matt.raykowski@kineticdata.com',
    id: 'fcaac140-8c66-11e5-a03d-5b4688038d7d',
    spaceAdmin: true,
    username: 'matt.raykowski@kineticdata.com',
  },
  versionId: '1343037a-8dbc-442d-bfb1-fd4e4022ec0c',
};

const message9 = {
  attachmentContent: null,
  content: [
    {
      type: 'text',
      value: 'dd',
    },
  ],
  createdAt: '2017-10-23T12:38:10.000-05:00',
  createdBy: {
    displayName: 'Matt Raykowski',
    email: 'matt.raykowski@kineticdata.com',
    id: 'fcaac140-8c66-11e5-a03d-5b4688038d7d',
    spaceAdmin: true,
    username: 'matt.raykowski@kineticdata.com',
  },
  discussionId: '96f1f270-9f0d-11e8-9752-25841347f4b8',
  id: '8046e0e3-a7ee-4761-9e40-be427b3bbc03',
  parent: null,
  spaceId: 'fc5463dd-8c66-11e5-a03d-c50fbb2a25bd',
  type: 'User',
  updatedAt: '2017-10-23T12:38:10.000-05:00',
  updatedBy: {
    displayName: 'Matt Raykowski',
    email: 'matt.raykowski@kineticdata.com',
    id: 'fcaac140-8c66-11e5-a03d-5b4688038d7d',
    spaceAdmin: true,
    username: 'matt.raykowski@kineticdata.com',
  },
  versionId: '8046e0e3-a7ee-4761-9e40-be427b3bbc03',
};

const messages = {
  items: [
    message0,
    message1,
    message2,
    message3,
    message4,
    message5,
    message6,
    message7,
    message8,
    message9,
  ],
  pageToken: null,
  empty: false,
};

describe('partitionListBy', () => {
  test('empty list returns empty list', () => {
    expect(partitionListBy(() => true, List())).toEqualImmutable(List());
  });

  test('list of one returns a list with one list of one element', () => {
    expect(partitionListBy(() => true, List([2]))).toEqualImmutable(
      List([List([2])]),
    );
  });

  test('predicate that always returns true results in a list for each element', () => {
    expect(
      partitionListBy((n1, n2) => n1 !== n2, List([1, 2, 3])),
    ).toEqualImmutable(List([List([1]), List([2]), List([3])]));
  });

  test('predicate that always returns true results in a list for each element', () => {
    expect(
      partitionListBy(
        (s1, s2) => s1.charAt(0) !== s2.charAt(0),
        List(['red', 'rabbit', 'green', 'reef', 'coral', 'cyan', 'gray']),
      ),
    ).toEqualImmutable(
      List([
        List(['red', 'rabbit']),
        List(['green']),
        List(['reef']),
        List(['coral', 'cyan']),
        List(['gray']),
      ]),
    );
  });
});

describe('formatMessages', () => {
  test('paritions them by the date of the message then by the author of each message', () => {
    expect(formatMessages(List(messages.items))).toEqualImmutable(
      // first list represents groupings by the date of the message
      // second-level lists represent messages sent by the same person in a
      // sequence because we don't want to show avatars for each one
      // finally, the third-level list contains the actual messages
      List([
        // messages on 10-23-2017, all by the same person
        List([List([message9, message8, message7])]),
        // messages on 10-24-2017, by a combination of people
        List([
          List([message6]),
          List([message5, message4]),
          List([message3]),
          List([message2]),
          List([message1, message0]),
        ]),
      ]),
    );
  });
});

describe('reducer', () => {
  test('INIT', () => {
    expect(reducer(undefined, {})).toEqualImmutable(State());
  });

  test('JOIN_DISCUSSION', () => {
    const state = State();
    const action = actions.joinDiscussion('abc123');
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion(),
        }),
      }),
    );
  });

  test('LEAVE_DISCUSSION', () => {
    const issue = { guid: 'abc123' };
    const state = State({
      discussions: Map({
        abc123: Discussion({ issue }),
        foobar: Discussion({ issue: { guid: 'foobar' } }),
      }),
    });
    const action = actions.leaveDiscussion('foobar');
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion({ issue }),
        }),
      }),
    );
  });

  test('FETCH_MORE_MESSAGES', () => {
    const state = State({
      discussions: Map({
        abc123: Discussion({ loadingMoreMessages: false }),
        foobar: Discussion({ loadingMoreMessages: false }),
      }),
    });
    const action = actions.fetchMoreMessages('foobar');
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion({ loadingMoreMessages: false }),
          foobar: Discussion({ loadingMoreMessages: true }),
        }),
      }),
    );
  });

  test('SET_ISSUE', () => {
    const issue = { guid: 'abc123' };
    const state = State({
      discussions: Map({
        abc123: Discussion({ issue: null }),
        foobar: Discussion({ issue: null }),
      }),
    });
    const action = actions.setIssue(issue);
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion({ issue }),
          foobar: Discussion({ issue: null }),
        }),
      }),
    );
  });

  test('SET_MESSAGES', () => {
    const messages = [{ id: 0, text: 'foo' }, { id: 1, text: 'bar' }];
    const state = State({
      discussions: Map({
        abc123: Discussion({ messagesLoading: true }),
        foobar: Discussion({ messagesLoading: true }),
      }),
    });
    const action = actions.setMessages('abc123', messages);
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion({
            messagesLoading: false,
            messages: List(messages),
          }),
          foobar: Discussion({ messagesLoading: true }),
        }),
      }),
    );
  });

  test('SET_MORE_MESSAGES', () => {
    const messages = [{ id: 0, text: 'foo' }, { id: 1, text: 'bar' }];
    const newMessage = { id: 2, text: 'baz' };
    const state = State({
      discussions: Map({
        abc123: Discussion({
          messagesLoading: true,
          loadingMoreMessages: true,
          messages: List(messages),
        }),
        foobar: Discussion({
          messagesLoading: true,
          loadingMoreMessages: true,
          message: List(),
        }),
      }),
    });
    const action = actions.setMoreMessages('abc123', [newMessage]);
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion({
            messagesLoading: false,
            loadingMoreMessages: false,
            messages: List([...messages, newMessage]),
          }),
          foobar: Discussion({
            messagesLoading: true,
            loadingMoreMessages: true,
            message: List(),
          }),
        }),
      }),
    );
  });

  test('SET_HAS_MORE_MESSAGES', () => {
    const state = State({
      discussions: Map({
        abc123: Discussion({ hasMoreMessages: true }),
        foobar: Discussion({ hasMoreMessages: true }),
      }),
    });
    const action = actions.setHasMoreMessages('abc123', false);
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion({ hasMoreMessages: false }),
          foobar: Discussion({ hasMoreMessages: true }),
        }),
      }),
    );
  });

  test('SET_JOIN_ERROR', () => {
    const state = State({
      discussions: Map({
        abc123: Discussion({ joinError: '' }),
        foobar: Discussion({ joinError: '' }),
      }),
    });
    const action = actions.setJoinError('abc123', 'ERROR!');
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion({ joinError: 'ERROR!' }),
          foobar: Discussion({ joinError: '' }),
        }),
      }),
    );
  });

  test('SET_PARTICIPANTS', () => {
    const participants = [{ id: '1', name: 'Alex' }, { id: '2', name: 'Sam' }];
    const state = State({
      discussions: Map({
        abc123: Discussion({ participants: Map() }),
        foobar: Discussion({ participants: Map() }),
      }),
    });
    const action = actions.setParticipants('abc123', participants);
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion({
            participants: Map({
              '1': participants[0],
              '2': participants[1],
            }),
          }),
          foobar: Discussion({ participants: Map() }),
        }),
      }),
    );
  });

  test('ADD_PRESENCE', () => {
    const state = State({
      discussions: Map({
        abc123: Discussion({
          participants: Map({
            '1': { id: '1', name: 'Alex', present: false, guid: '11111' },
            '2': { id: '2', name: 'Sam', present: false, guid: '22222' },
          }),
        }),
        foobar: Discussion({ participants: Map() }),
      }),
    });
    const action = actions.addPresence('abc123', '22222');
    expect(
      reducer(state, action).getIn([
        'discussions',
        'abc123',
        'participants',
        '2',
      ]).present,
    ).toBe(true);
  });

  test('REMOVE_PRESENCE', () => {
    const state = State({
      discussions: Map({
        abc123: Discussion({
          participants: Map({
            '1': { id: '1', name: 'Alex', present: true, guid: '11111' },
            '2': { id: '2', name: 'Sam', present: true, guid: '22222' },
          }),
        }),
        foobar: Discussion({ participants: Map() }),
      }),
    });
    const action = actions.removePresence('abc123', '11111');
    expect(
      reducer(state, action).getIn([
        'discussions',
        'abc123',
        'participants',
        '1',
      ]).present,
    ).toBe(false);
  });

  test('ADD_PARTICIPANT', () => {
    const oldParticipant = { id: '1', name: 'Alex' };
    const newParticipant = { id: '2', name: 'Sam' };
    const state = State({
      discussions: Map({
        abc123: Discussion({
          participants: Map({
            '1': oldParticipant,
          }),
        }),
        foobar: Discussion({ participants: Map() }),
      }),
    });
    const action = actions.addParticipant('abc123', newParticipant);
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion({
            participants: Map({
              '1': oldParticipant,
              '2': newParticipant,
            }),
          }),
          foobar: Discussion({ participants: Map() }),
        }),
      }),
    );
  });

  test('REMOVE_PARTICIPANT', () => {
    const oldParticipant = { id: '1', name: 'Alex' };
    const state = State({
      discussions: Map({
        abc123: Discussion({
          participants: Map({
            '1': oldParticipant,
            '2': { id: '2', name: 'Sam', present: false },
          }),
        }),
        foobar: Discussion({ participants: Map() }),
      }),
    });
    const action = actions.removeParticipant('abc123', { id: '2' });
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion({
            participants: Map({
              '1': oldParticipant,
            }),
          }),
          foobar: Discussion({ participants: Map() }),
        }),
      }),
    );
  });

  test('SET_INVITES', () => {
    const invites = [
      { id: '1', status: 'Unassociated' },
      { id: '2', status: 'Unassociated' },
    ];
    const state = State({
      discussions: Map({
        abc123: Discussion({ invites: List() }),
        foobar: Discussion({ invites: List() }),
      }),
    });
    const action = actions.setInvites('abc123', invites);
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion({ invites: List(invites) }),
          foobar: Discussion({ invites: List() }),
        }),
      }),
    );
  });

  test('ADD_INVITE', () => {
    const invites = [{ id: '1' }, { id: '2' }];
    const newInvite = { id: '3' };
    const state = State({
      discussions: Map({
        abc123: Discussion({ invites: List(invites) }),
        foobar: Discussion({ invites: List() }),
      }),
    });
    const action = actions.addInvite('abc123', newInvite);
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion({ invites: List([...invites, newInvite]) }),
          foobar: Discussion({ invites: List() }),
        }),
      }),
    );
  });

  test('REMOVE_INVITE', () => {
    const invites = [{ id: '1' }, { id: '2' }];
    const state = State({
      discussions: Map({
        abc123: Discussion({ invites: List(invites) }),
        foobar: Discussion({ invites: List() }),
      }),
    });
    const action = actions.removeInvite('abc123', invites[0]);
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion({ invites: List([invites[1]]) }),
          foobar: Discussion({ invites: List() }),
        }),
      }),
    );
  });

  test('APPLY_UPLOAD', () => {
    const processingUploads = [
      { guid: '1', message: 'one' },
      { guid: '2', message: 'two' },
      { guid: '3', message: 'three' },
    ];
    const messages = [
      { guid: '1', message: 'one', messageable: { data: 'one' } },
      { guid: '2', message: 'two', messageable: { data: 'two' } },
      { guid: '3', message: 'three', messageable: { data: 'three' } },
    ];
    const state = State({
      discussions: Map({
        abc123: Discussion({
          processingUploads: List(processingUploads),
          messages: List(messages),
        }),
      }),
    });
    const upload = { data: 'new' };
    const action = actions.applyUpload('abc123', '3', upload);
    const after = reducer(state, action);
    expect(
      after.getIn(['discussions', 'abc123', 'processingUploads']),
    ).toEqualImmutable(List(processingUploads.slice(0, 2)));
    expect(after.getIn(['discussions', 'abc123', 'messages', 0])).toEqual(
      messages[0],
    );
    expect(after.getIn(['discussions', 'abc123', 'messages', 1])).toEqual(
      messages[1],
    );
    expect(after.getIn(['discussions', 'abc123', 'messages', 2])).toEqual({
      ...messages[2],
      messageable: upload,
    });
  });

  test('QUEUE_UPLOADS', () => {
    const originalUploads = [
      { guid: '1', message: 'one' },
      { guid: '2', message: 'two' },
    ];
    const state = State({
      discussions: Map({
        abc123: Discussion({ processingUploads: List(originalUploads) }),
        foobar: Discussion({ processingUploads: List() }),
      }),
    });
    const newUploads = [
      { guid: '3', message: 'three' },
      { guid: '4', message: 'four' },
    ];
    const action = actions.queueUploads('abc123', newUploads);
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion({
            processingUploads: List([...originalUploads, ...newUploads]),
          }),
          foobar: Discussion({ processingUploads: List() }),
        }),
      }),
    );
  });

  test('MESSAGE_RX', () => {
    const messages = [{ text: 'foo' }, { text: 'bar' }];
    const newMessage = { text: 'baz' };
    const state = State({
      discussions: Map({
        abc123: Discussion({ messages: List(messages) }),
        foobar: Discussion({ messages: List() }),
      }),
    });
    const action = actions.receiveMessage('abc123', newMessage);
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion({ messages: List([newMessage, ...messages]) }),
          foobar: Discussion({ messages: List() }),
        }),
      }),
    );
  });

  test('MESSAGE_BAD_RX', () => {
    const badMessages = [{ text: 'foo' }, { text: 'bar' }];
    const newBadMessage = { text: 'baz' };
    const state = State({
      discussions: Map({
        abc123: Discussion({ badMessages: List(badMessages) }),
        foobar: Discussion({ badMessages: List() }),
      }),
    });
    const action = actions.receiveBadMessage('abc123', newBadMessage);
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion({
            badMessages: List([...badMessages, newBadMessage]),
          }),
          foobar: Discussion({ badMessages: List() }),
        }),
      }),
    );
  });

  test('RECONNECT', () => {
    const state = State({
      discussions: Map({
        abc123: Discussion({ reconnecting: false, connected: true }),
        foobar: Discussion({ reconnecting: false, connected: true }),
      }),
    });
    const action = actions.reconnect('abc123');
    expect(reducer(state, action)).toEqualImmutable(
      State({
        discussions: Map({
          abc123: Discussion({ reconnecting: true, connected: false }),
          foobar: Discussion({ reconnecting: false, connected: true }),
        }),
      }),
    );
  });

  // test('SET_CONNECTED', () => {
  //   const state = State({
  //     discussions: Map({
  //       abc123: Discussion({ connected: false }),
  //       foobar: Discussion({ connected: false }),
  //     }),
  //   });
  //   const action = actions.setConnected('abc123', true);
  //   expect(reducer(state, action)).toEqualImmutable(
  //     State({
  //       discussions: Map({
  //         abc123: Discussion({ connected: true }),
  //         foobar: Discussion({ connected: false }),
  //       }),
  //     }),
  //   );
  // });

  test('OPEN_MODAL', () => {
    const state = State({
      activeDiscussion: null,
      currentOpenModals: List(),
    });
    const action = actions.openModal('abc123', 'participants');
    expect(reducer(state, action)).toEqualImmutable(
      State({
        activeDiscussion: 'abc123',
        currentOpenModals: List(['participants']),
      }),
    );
  });

  test('CLOSE_MODAL', () => {
    const state = State({
      activeDiscussion: 'abc123',
      currentOpenModals: List(['participants', 'invitation']),
    });
    const action1 = actions.closeModal('invitation');
    expect(reducer(state, action1)).toEqualImmutable(
      State({
        activeDiscussion: 'abc123',
        currentOpenModals: List(['participants']),
      }),
    );
    const action2 = actions.closeModal();
    expect(reducer(state, action2)).toEqualImmutable(
      State({
        activeDiscussion: 'abc123',
        currentOpenModals: List(),
      }),
    );
  });

  test('CREATE_INVITE', () => {
    const state = State({ invitationPending: false });
    const action = actions.createInvite();
    expect(reducer(state, action)).toEqualImmutable(
      State({ invitationPending: true }),
    );
  });

  test('CREATE_INVITE_DONE', () => {
    const state = State({ invitationPending: true });
    const action = actions.createInviteDone();
    expect(reducer(state, action)).toEqualImmutable(
      State({ invitationPending: false }),
    );
  });

  test('SET_INVITATION_FIELD', () => {
    const state = State({ invitationFields: Map({ name: 'S' }) });
    const action = actions.setInvitationField('name', 'T');
    expect(reducer(state, action)).toEqualImmutable(
      State({ invitationFields: Map({ name: 'T' }) }),
    );
  });
});
