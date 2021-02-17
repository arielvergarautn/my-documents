
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
            id: 1,
            type: "file",
            name: "ariel.docx",
            extension: "docx",
            weight: 155,
            content: "file1"
        },
        {
            id: 2,
            type: "folder",
            name: "carpeta1",
            extension: "",
            weight: 50,
            content: [
                {
                    id: 3,
                    type: "file",
                    name: "pali.docx",
                    extension: "docx",
                    weight: 6000,
                    content: "file2"
                },
                {
                    id: 4,
                    type: "file",
                    name: "chiara.docx",
                    extension: "docx",
                    weight: 1000,
                    content: "file3"
                },
                {
                    id: 5,
                    type: "folder",
                    name: "carpeta2",
                    extension: "",
                    weight: 50,
                    content: [
                        {
                            id: 6,
                            type: "file",
                            name: "chechi.docx",
                            extension: "docx",
                            weight: 8000,
                            content: "file4"
                        },
                        {
                            id: 7,
                            type: "file",
                            name: "eve.docx",
                            extension: "docx",
                            weight: 1000,
                            content: "file5"
                        },
                    ]
                }
            ]
        }
    ]
}
