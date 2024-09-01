import Box from '../../components/Box';
import DynamicForm from '../../components/DynamicForm';
import {
  DynamicFormControls
} from '../controls';
Box.displayName = 'Box';
DynamicForm.displayName = 'DynamicForm';
var meta = {
  title: 'Core/Components/DynamicForm',
  component: DynamicForm,
  tags: ['autodocs'],
  argTypes: DynamicFormControls,
};
export default meta;
export var Default = {
  args: {
    form: [{
        type: 'row',
        label: 'User Information',
        inputs: [{
            type: 'text',
            key: 'name',
            label: 'Name',
            onChange: function(value) {
              return console.log(value);
            },
            placeholder: 'Enter your name',
            props: {
              width: 200,
            },
          },
          {
            type: 'text',
            key: 'email',
            label: 'Email',
            onChange: function(value) {
              return console.log(value);
            },
            placeholder: 'Enter your email',
            props: {
              width: 200,
            },
          },
          {
            type: 'password',
            key: 'password',
            label: 'Password',
            onChange: function(value) {
              return console.log(value);
            },
            placeholder: 'Enter your password',
            props: {
              width: 200,
            },
          },
        ],
      },
      {
        type: 'row',
        label: 'User Selections',
        inputs: [{
            type: 'select',
            key: 'role',
            label: 'Role',
            onChange: function(value) {
              return console.log(value);
            },
            options: ['Admin', 'User', 'Guest'],
            props: {
              usePopover: true,
              width: 300,
            },
          },
          {
            type: 'multi-select',
            key: 'permissions',
            label: 'Permissions',
            onChange: function(value) {
              return console.log(value);
            },
            options: ['Read', 'Write', 'Delete'],
            props: {
              usePopover: true,
              width: 300,
            },
          },
        ],
      },
      {
        type: 'row',
        label: 'Options',
        inputs: [{
            type: 'checkbox',
            key: 'checkbox1',
            label: 'Allow data process',
            initialValue: true,
            onChange: function(value) {
              return console.log(value);
            },
            boxProps: {
              variant: 'flex-row-no-padding'
            },
          },
          {
            type: 'checkbox',
            key: 'checkbox2',
            label: 'Allow data to be shared',
            initialValue: false,
            onChange: function(value) {
              return console.log(value);
            },
            boxProps: {
              variant: 'flex-row-no-padding'
            },
          },
          {
            type: 'radio',
            key: 'radio',
            label: 'Allow cookies',
            initialValue: true,
            onChange: function(value) {
              return console.log(value);
            },
            boxProps: {
              variant: 'flex-row-no-padding'
            },
          }
        ],
      },
      {
        type: 'submit',
        label: 'Save configs',
        onClick: function() {
          return alert('Saved');
        },
      }
    ],
  },
};
