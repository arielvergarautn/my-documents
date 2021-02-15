
export const getUser = () => {
    return {
        id: 1,
        name: "Ariel Vergara",
        email: "arielbvergara@gmail.com",
        photo: "foto"
    }
}

export const getFiles = () => {
    return [
        {
            type: "file",
            name: "ariel.docx",
            extension: "docx",
            weight: 155,
            content: "file1"
        },
        {
            type: "folder",
            name: "carpeta1",
            extension: "",
            weight: 50,
            content: [
                {
                    type: "file",
                    name: "pali.docx",
                    extension: "docx",
                    weight: 6000,
                    content: "file2"
                },
                {
                    type: "file",
                    name: "chiara.docx",
                    extension: "docx",
                    weight: 1000,
                    content: "file3"
                },
            ]
        }
    ]
}
