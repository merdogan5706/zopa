import React, { useState, useEffect } from "react";
import { INPUTS } from "../Main";

export interface IFieldStates {
    name: string
    email: string
    amount: number
}

const useForm = (listItems: IFieldStates[]) => {

    const [fieldsState, setFieldsState] = useState<any>({} as IFieldStates)
    const [fieldErrors, setFieldErrors] = useState<any>({});

    const validateField = (value: string, name: string) => {
        switch (name) {
            case 'name':
                if (value.length < 2)
                    setFieldErrors((existingState: IFieldStates) => ({
                        ...existingState,
                        name: 'Name should have at least 3 letters'
                    }))
                else setFieldErrors({
                    ...fieldErrors,
                    name: null
                })
                break;

            case 'email':
                if (!new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value))
                    setFieldErrors((existingState: IFieldStates) => ({
                        ...existingState,
                        email: 'Please enter a valid email address'
                    }))
                else setFieldErrors((existingState: IFieldStates) => ({
                    ...existingState,
                    email: null
                }))
                break;

            case 'amount':
                if (value.length < 1)
                    setFieldErrors((existingState: IFieldStates) => ({
                        ...existingState,
                        amount: 'Can not be empty'
                    }))
                else setFieldErrors((existingState: IFieldStates) => ({
                    ...existingState,
                    amount: null
                }))
                break;

            default:
                break;
        }
    }

    const handleTextChange = (text: string, id: string) => {
        setFieldsState((existingState: IFieldStates) => ({
            ...existingState,
            [id]: text
        }))
        validateField(text, id)
    }

    useEffect(() => {
        setFieldsState({})
    }, [listItems.length])


    let isFormValid = false
    if (Object.keys(fieldsState).length === INPUTS.length) {
        isFormValid = true
        Object.keys(fieldErrors).forEach(key => {
            isFormValid = isFormValid && !fieldErrors[key]
        })
    }

    return {
        fieldsState,
        fieldErrors,
        handleTextChange,
        isFormValid
    }
}
export default useForm