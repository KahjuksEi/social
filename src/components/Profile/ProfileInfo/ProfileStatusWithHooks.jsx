import React, { useState, useEffect } from "react";

const ProfileStatusWithHooks = (props) => {
  /*let stateWithSetState = useState(false);*/ /*true создаст инпут*/
  // let editMode = stateWithSetState[0];
  // let setEditMode = stateWithSetState[1];
  let [editMode, setEditMode] = useState(
    false
  ); /*деструктуризацией ибо useState возвр массив*/
  let [status, setStatus] = useState(props.status);

  /*принимает фию которую выполнит после отрисовки*/
  useEffect(() => {
    setStatus(props.status);
  }, [props.status /*запуск зависит от статуса*/]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status); /*отправка нового статуса*/
  };

  /*под кажд напечатанный символ*/
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || "-----"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onDoubleClick={deactivateEditMode}
            onChange={onStatusChange}
            type="text"
            autoFocus={true}
            value={status}
          />
        </div>
      )}
      <div></div>
    </>
  );
};
export default ProfileStatusWithHooks;
