import {useState} from 'react';
import Comment from "./Comment"
import style from './Comment.module.css';
import useNode from '../hooks/useNode';

const commentList = {
    id:1,
    items: [
        // {
        //     id: 123,
        //     name: "Harikesh",
        //     items:[{
        //         id:234,
        //         name: "Sandeep",
        //         items:[{
        //             id:345,
        //             name:"Anjali",
        //             items: []
        //         }]
        //     }]
        // },
        // {
        //     id: 1234,
        //     name: "Sandeep",
        //     items:[{
        //         id:2345,
        //         name: "Harikesh",
        //         items:[{
        //             id:3456,
        //             name:"Anjali",
        //             items: []
        //         }]
        //     }] 
        // }
    ]
}

function Comments(){
    const [commentsData, setCommentsData] = useState(commentList);

    const { insertNode, editNode, deleteNode } = useNode();
  
    const handleInsertNode = (folderId, item) => {
      const finalStructure = insertNode(commentsData, folderId, item);
      setCommentsData(finalStructure);
    };
  
    const handleEditNode = (folderId, value) => {
      const finalStructure = editNode(commentsData, folderId, value);
      setCommentsData(finalStructure);
    };
  
    const handleDeleteNode = (folderId) => {
      const finalStructure = deleteNode(commentsData, folderId);
      const temp = { ...finalStructure };
      setCommentsData(temp);
    };

   
    return(
        <div className="App">
            <Comment
                handleInsertNode={handleInsertNode}
                handleEditNode={handleEditNode}
                handleDeleteNode={handleDeleteNode}
                comment={commentsData}
            />
    </div>
    )
}

export default Comments;