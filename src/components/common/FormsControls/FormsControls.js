import React from "react";
import classes from "./FormControls.module.css";

// const FormControl = ({ input, meta, child, element, ...props }) => {

//   const hasError = meta.touched && meta.error;
//   return (
//     <div
//       className={classes.formControl + " " + (hasError ? classes.error : " ")}
//     >
//       <div>
//         <element {...input} {...props} />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   );
// };
// export const Textarea = (props) => {
//   return <FormControl element={textarea} {...props}></FormControl>;
// };
// export const Input = (props) => {
//   return <FormControl element={input} {...props}></FormControl>;
// };

/*Здесь вынимаем инпут и мета, остальное оставляем в пропсах рестом, деструктурируем*/
// либо понятный говнокод вместо вышеуказанного
export const Textarea = ({ input, meta, ...props }) => {
  /* метаданные редаксформ для проверки тронутого и валидного инпута */
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : " ")}
    >
      <textarea {...input} {...props} />

      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : " ")}
    >
      <textarea {...input} {...props} />

      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
