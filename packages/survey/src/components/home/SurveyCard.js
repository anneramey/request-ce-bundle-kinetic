import React from 'react';
import { Icon, TimeAgo } from 'common';
import { Link } from '@reach/router';
import { I18n } from '@kineticdata/react';

export const SurveyCard = ({ survey }) => (
  <div className="card card--service">
    <h1>
      <Icon image="" background="blueSlate" />
      <I18n>{survey.name}</I18n>
    </h1>
    <p>
      <I18n>survey status pill</I18n>
      <br />
      {survey.status}
    </p>
    <p>
      <I18n>survey start date</I18n>
      <br />
      <TimeAgo timestamp={survey.createdAt} />
    </p>
    <p>
      <I18n>survey end date</I18n>
      <br />
      n/a
    </p>
    <Link to={`${survey.slug}/results`}>Results</Link>
    <Link to={`${survey.slug}/settings`}>Settings</Link>
    <Link to={`${survey.slug}/test`}>Test</Link>
    <Link to={`${survey.slug}/preview`}>Preview</Link>
  </div>
);