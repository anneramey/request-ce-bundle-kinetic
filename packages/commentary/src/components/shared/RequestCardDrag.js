import React from 'react';
import { KappLink as Link, TimeAgo } from 'common';
import { RequestType } from './RequestType';
import { RequestImgs } from './RequestImgs';
import * as constants from '../../constants';
import { Draggable } from 'react-beautiful-dnd';

const DisplayDateListItem = ({ submission }) => {
  const isDraft = submission.coreState === constants.CORE_STATE_DRAFT;
  return (
    <div className="col">
      <dt className="">{isDraft ? 'Created' : 'Submitted'}</dt>
      <dd className="">
        <TimeAgo
          timestamp={isDraft ? submission.createdAt : submission.submittedAt}
        />
      </dd>
    </div>
  );
};

const ProposedBlazon = ({ submission }) => (
  <div className="col">
    <dt className="">Proposed Blazon</dt>
    <dd className="">{submission.values[constants.PROPOSED_BLAZON_FIELD]}</dd>
  </div>
);

export const RequestCard = ({ index, submission, path }) => (
  <Draggable key={submission.id} draggableId={submission.id} index={index}>
    {provided => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="card card--request"
      >
        <h1>
          <span>{submission.values.SocietyName}</span>
          <RequestType submission={submission} />
        </h1>
        <dl className="row">
          <div className="col">
            <RequestImgs submission={submission} />
          </div>
          <ProposedBlazon submission={submission} />
        </dl>
        <dl className="row">
          <div className="col">
            <dt>Confirmation</dt>
            <dd>{submission.handle}</dd>
          </div>
          <DisplayDateListItem submission={submission} />
        </dl>
      </div>
    )}
  </Draggable>
);
