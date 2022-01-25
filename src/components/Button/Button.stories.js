import React from 'react';
import Button from './Button';
// import Center from '../Center/Center'; // Center is the decorator here as it is used to decorate component in center

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Shaarif Button',
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
  // children: 'Primary args',
};
export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  // children: 'Long-Primary args',
};
export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: 'secondary',
  // children: 'Secondary args',
};

//change the name of story
Primary.storyName = 'Blue Button';
