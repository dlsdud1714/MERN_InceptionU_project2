import axios from "axios";
import React, { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


export const Editor = (props) => {
  const { createPost, setContentMark, categoryList, currentPostId, findCurrentPost, updatePost } = props;
  const [cateNBody, setCateNBody] = useState(currentPostId?filterToCurrentCategoryNbody():{ category: "", body: "" });
  const [newCategoryControl, setNewCategoryControl] = useState(false);

  //---quill-----
  const quillRef = useRef();

  const imageHandler = () => {
    //const quillEditor = this.quillRef.getEditor()
    const input = document.createElement("input");
    const formData = new FormData();

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files;
      if (file !== null) {
        formData.append("img", file[0]);
      }

      // for (var key of formData.entries()) {
      // 	console.log(key[0] + ', ' + key[1])
      // }
      try {
        const result = await axios.post("/data/img", formData);
        const url = result.data.url;
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range.index, "image", url);

        return { ...result, success: true };
      } catch (err) {
        console.log(err);
      }
    };
  };

  const modules = useMemo(
    () => ({
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
        handlers: { image: imageHandler },
        
      },
    }),
    []
  );

  //------end quill=------

  function filterToCurrentCategoryNbody(){
    const currentpost= findCurrentPost();
    console.log("currentpost is",currentpost)
    return {postId:currentpost.postId, category: currentpost.category, body: currentpost.body}
  }
  console.log("current post in editor is", cateNBody);

  function post(event) {
    if (!cateNBody.category) {
      alert("type category");
      return;
    }

    event.preventDefault();
    if(cateNBody.postId){
      updatePost(cateNBody.postId, cateNBody.category, cateNBody.body)
      // updatePost=(postid, newCategory, newBody
    }else{
      createPost(cateNBody.category, cateNBody.body);
    }
      setContentMark(true);
  }

  const checkCategory = (event) => {
    if (event.target.value === "+ new category") {
      setNewCategoryControl(true);
    } else {
      setNewCategoryControl(false);
      setCateNBody((pre) => {
        return { ...pre, category: event.target.value };
      });
    }
  };

  return (
    <div className="editor">
      <form onSubmit={post}>
        <div className="editor--title">
          <label htmlFor="title--input">Category</label>
          <select name="category" onChange={checkCategory}>
            <option name="category">---choose one---</option>
            {categoryList.map((category) => (
              <option name="category">{category}</option>
            ))}
            <option name="category">+ new category</option>
          </select>

          {newCategoryControl && (
            <input
              className="title--input"
              type="text"
              placeholder="Enter new category..."
              value={cateNBody.category}
              maxLength="25"
              onChange={(event) =>
                setCateNBody((pre) => {
                  return { ...pre, category: event.target.value };
                })
              }
            />
          )}
        </div>

        <ReactQuill
          theme="snow"
          ref={quillRef}
          placeholder="Write something amazing.."
          modules={modules}
          formats={Editor.formats}
          value={cateNBody.body}
          onChange={(content, delta, source, editor) =>
            setCateNBody((pre) => {
              return { ...pre, body: editor.getHTML() };
            })
          }
        />
        <button type="submit">POST</button>
      </form>
    </div>
  );
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
