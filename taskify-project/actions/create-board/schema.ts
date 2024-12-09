import {z} from "zod";

export const CreateBoard = z.object({
    title: z.string({
        required_error: "Title is required",
        invalid_type_error: "Ttle is required",

    }).min(3, {
        message: "Title is too short."
    })
});