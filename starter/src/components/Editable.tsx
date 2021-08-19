import React, { useState } from 'react';
import { Editable } from '../redux/todo/types';

const EditableItem:React.FC<Editable> = ({ text, type, children, ...props }) => {
    const [isEditing, setEditing] = useState(false);
    const handleKeyDown = (event, type) => {
        const { key } = event;
        const keys = ["Escape", "Tab"];
        const enterKey = "Enter";
        const allKeys = [...keys, enterKey]; // All keys array
    /* 
        - For textarea, check only Escape and Tab key and set the state to false
        - For everything else, all three keys will set the state to false
    */
        if ((type === "textarea" && keys.indexOf(key) > -1) ||
            (type !== "textarea" && allKeys.indexOf(key) > -1)) {
                setEditing(false);
        }
    };
    return (
        <section {...props}>
            {isEditing ? (
                <div
                    onBlur={() => setEditing(false)}
                    onKeyDown={e => handleKeyDown(e, type)}
                >
                    {children}
                </div>
            ) : (
                <div
                    onClick={() => setEditing(true)}
                >
                    <span>
                        {text || "Editable content"}
                    </span>
                </div>
            )}
        </section>
    );
}

export default EditableItem;