'use client';

import { actionFunction } from "@/app/utils/types";
import { useFormState } from "react-dom";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const initialState = {
    message: ''
}

export default function FormContainer ({action, children} : {action: actionFunction, children: React.ReactNode}) {
    const [state, formAction] = useFormState(action , initialState);
    const {toast} = useToast();
    useEffect(() => {
        if(state.message) {
            toast({description: state.message});
        }
    }, [state])
    return <form action={formAction} className="flex flex-col gap-4">{children}</form>
}