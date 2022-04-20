import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Editor = (props) => {
  const { createPost, setContentMark, setCategoryList, contents } = props;
  const [cateNBody, setCateNBody] = useState({category:"", body:""});
 
  // useEffect(()=> {setCategoryList((pre)=>{
  //   for(let content of contents){
  //     if(cateNBody.category!==content.category){
  //       console.log("1",cateNBody);
  //       console.log("2",content.category)
  //       return [...pre,cateNBody.category]
  //     }

  //   }
  // }
  // )},[contents])

  function post(event){
    event.preventDefault();
    createPost(cateNBody.category, cateNBody.body);
    setContentMark(true);
  }

  return (
    <div className="editor">
      <form onSubmit={post}>
        <input type="text" value={cateNBody.category} onChange={(event)=>setCateNBody((pre)=>{
          return {...pre, category:event.target.value}
        })}/>
        <ReactQuill
          theme="snow"
          placeholder="Write something amazing.."
          modules={Editor.modules}
          formats={Editor.formats}
          value={cateNBody.body}
          onChange={(content, delta, source, editor) =>
            setCateNBody((pre)=>{
              return {...pre, body:editor.getHTML()}})
          }
        />
        <button type="submit">POST</button>
      </form>
    </div>
  );
};
// const imageHandler = () => {
//   this.quillEditor = this.quillRef.getEditor()
//   const input = document.createElement('input')
//   input.setAttribute('type', 'file')
//   input.setAttribute('accept', 'image/*')
//   input.click()
//   input.onchange = async () => {
//       const file = input.files[0]
//       const formData = new FormData()
//       formData.append('quill-image', file)
//       const res = await uploadFile(formData)
//       const range = this.quillEditor.getSelection()
//       const link = res.data[0].url

//       // this part the image is inserted
//       // by 'image' option below, you just have to put src(link) of img here.
//       this.quillEditor.insertEmbed(range.index, 'image', link)
//   }
// }
Editor.modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"],
    ],
    // handlers: { image: imageHandler },
  },
  clipboard: { matchVisual: false },
};

Editor.formats = [
  //'font',
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
  "color",
  "background",
];
export default Editor;
