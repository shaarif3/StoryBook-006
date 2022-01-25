import React from 'react';
import Button from './Button';
// import Center from '../Center/Center'; // Center is the decorator here as it is used to decorate component in center

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  // decorators: [(story) => <Center>{story()}</Center>],
};

// beginners method
export const Primary = () => <Button variant='primary'>Primary</Button>;
export const Secondary = () => <Button variant='secondary'>Secondary</Button>;
export const Success = () => <Button variant='success'>Success</Button>;
export const Danger = () => <Button variant='danger'>Danger</Button>;

//Advance method
const Template = (args) => <Button {...args} />;
export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: 'primary',
  children: 'Primary args',
  onClick: console.log('hahahh'),
};
export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  variant: 'danger',

  children: 'Long-Primary args',
};

//change the name of story
Primary.storyName = 'Blue Button';
