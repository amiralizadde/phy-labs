"use client"
import React, { useEffect, useRef } from "react";

type CKeditorProps = {
    onChange: (data: string) => void;
    editorLoaded: boolean;
    name: string;
    value: string;
  };


export default function CKeditor({ onChange, editorLoaded, name, value }:CKeditorProps) {
    const editorRef = useRef<{ CKEditor:any; ClassicEditor:any} | null>(null);
    const { CKEditor, ClassicEditor } = editorRef.current || {};
useEffect(() => {
    editorRef.current = {
         CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, 
         ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
        };
    }, []);
    return (
        <>
            {editorLoaded ? (
                <CKEditor
                    type=""
                    name={name}
                    editor={ClassicEditor}
                    data={value}
                    onChange={(event : any, editor:any) => {
                        const data = editor.getData();
                        onChange(data);
                    }}
                />
            ) : (
                <div>Editor loading</div>
            )}
        </>
    )
}