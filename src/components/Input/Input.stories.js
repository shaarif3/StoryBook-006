import React from 'react';
import Input from './Input';
export default {
  title: 'Form/Input',
  component: Input,
};

export const Email = () => (
  <Input placeholder='Enter your email' size='small' />
);
export const Name = () => <Input placeholder='Enter your name' size='medium' />;
export const Password = () => (
  <Input placeholder='Enter your password' size='large' />
);
