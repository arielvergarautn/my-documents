import React from 'react'
import { useSelector } from "react-redux";

const Home = () => {
    const files = useSelector(state => state.files);

    //Get tree
    const getTree = (elements) => {

        const elemList = [];

        //Folders and files
        elements.forEach(elem => {
            if (elem.type === 'folder') {
                const folderLI = React.createElement("li", { key: elem.id, className: "folder-title" }, [<span onClick={onClickFolderHandler} key={elem.name} className='folder-name'>{elem.name}</span>])
                const folderUL = React.createElement("ul", { key: elem.id, className: "folder" }, [])
                const folderElements = getTree(elem.content);
                folderUL.props.children.push(folderElements);
                folderLI.props.children.push(folderUL);
                elemList.push(folderLI);
            }
            else {
                elemList.push(React.createElement("li", { onClick: onClickFileHandler, key: elem.id, className: "file-title" }, elem.name));
            }
        });

        return elemList;
    }

    //Actions
    const onClickFolderHandler = (e) => {
        console.log('I`m a folder');
    }
    const onClickFileHandler = (e) => {
        console.log('I`m a file');
    }


    return (
        <ul className='root'>
            {
                getTree(files.elements)
            }
        </ul>
    )
}

export default Home
