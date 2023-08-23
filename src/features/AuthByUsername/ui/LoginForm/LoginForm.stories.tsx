import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginForm from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'shared/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];
export const withError = Template.bind({});
withError.args = {
};
withError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd', error: 'Error' },
})];

export const loading = Template.bind({});
loading.args = {
};
loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
