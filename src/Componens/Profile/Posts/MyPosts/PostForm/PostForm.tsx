import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import SuperButton from '../../../../Common/Button/SuperButton';
import {InputComp} from '../../../../Common/FormsControl/FormsControl';
import {maxLengthCreator, required} from '../../../../../Utils/Validators/Validators';

const maxLength20 = maxLengthCreator(20)
export const PostForm: React.FC<InjectedFormProps> = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <Field name={'newTextPost'}
                   component={InputComp}
                   validate={[required, maxLength20]}
                   placeholder={'Enter your text'}/>
            <SuperButton>send</SuperButton>
        </form>
    </>
}
export const AddPostReduxForm = reduxForm({form: 'AddPostReduxForm'})(PostForm)
