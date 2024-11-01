export type actionFunction = (
    prevState: any,
    formData: FormData
) => Promise<{message: string}>;

export type Post = {
    postTitle: String
    postContent: String
}