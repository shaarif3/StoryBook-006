import React from 'react';
import { Danger } from '../Button/Button.stories';
import { Email } from '../Input/Input.stories';

export default {
  title: 'Form/Subscription',
};

export const PrimarySubscription = () => (
  <>
    <Email />
    <Danger />
  </>
);
