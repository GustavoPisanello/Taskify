"use client";

import { createBoard } from "@/actions/create-board";
import { useActionState } from "react";

import { FormButton } from "./form-button";
import { useAction } from "@/hooks/use-actions";
import { FormInput } from "@/components/form/form-input";


export const Form = () => {

    const {execute, fieldErrors} = useAction(createBoard, {
        onSuccess: (data) => {
            console.log(data, "SUCCESS!")
        },
        onError: (error) => {
            console.log(error);
        }
    });

    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;
        
        execute({title})
    }

    return(
        <form action={onSubmit}>
            <div className="flex flex-col space-y-2">
                <FormInput 
                    errors={fieldErrors}
                    id="title"      
                />
            </div>
            <FormButton/>
        </form>
    );
};