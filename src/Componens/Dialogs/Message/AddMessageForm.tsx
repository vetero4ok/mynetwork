import React from 'react';
import SuperButton from '../../Common/Button/SuperButton';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {InputComp} from '../../Common/FormsControl/FormsControl';
import {maxLengthCreator, required} from '../../../Utils/Validators/Validators';

export type FormDataMessageType = {
    updateNewMessageText:string
}

const maxLength30 = maxLengthCreator(30)
const MessageForm: React.FC<InjectedFormProps<FormDataMessageType>> = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <Field
                validate={[required, maxLength30]}
                placeholder={'Enter your message'}
                name={'updateNewMessageText'}
                component={InputComp}/>
            <SuperButton> send</SuperButton>
        </form>
    </>
}
export const AddMessageReduxForm = reduxForm<FormDataMessageType>({form: 'updateNewMessageText'})(MessageForm)