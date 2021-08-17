import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogsDataType, MassagesDataType} from '../../Redux/dialogPageReducer';
import {Dialog} from './DialogsItems/DialogsItem';
import { Redirect } from 'react-router-dom';




type DialogsPropsType =  {
    newTextMassages: string
    isAuth: boolean
    massagesData: Array<MassagesDataType>
    dialogsData: Array<DialogsDataType>
    addMessageCallback: (newText: string) => void
    updateNewMessageText: (value: string) => void
}

export function Dialogs(props: DialogsPropsType) {

    const dialogElements = props.dialogsData.map(d =>
        <div key={d.id}>
            <Dialog
                id={d.id}
                name={d.name}
                avatar={d.avatar}
            />
        </div>
    )
    const dialogMessage = props.massagesData.map(d =>
        <div key={d.id}>
            <Message
                message={d.massage}
            />
            {/*<AlternativeMessage*/}
            {/*    message={d.massage}*/}
            {/*/>*/}
        </div>
    )
    const addMessageCallback = () => {
        let validatedValue = props.newTextMassages.trim()
        if (validatedValue) {
            props.addMessageCallback(validatedValue)
        }
        props.updateNewMessageText('')
    }
    const updateNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.currentTarget &&
        props.updateNewMessageText(e.currentTarget.value)
    }
    const onChangeKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addMessageCallback()
        }
    }
    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messeges}>
                {dialogMessage}
            </div>
            <div>
                <textarea
                    value={props.newTextMassages}
                    placeholder="Enter your message"
                    onChange={updateNewMessageText}
                    onKeyPress={onChangeKeyPress}
                />

                <button onClick={addMessageCallback}>send</button>
            </div>
        </div>
    )
}