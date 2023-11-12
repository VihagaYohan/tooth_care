import React, {PureComponent} from 'react';
import {Formik} from 'formik';

interface propTypes {
  initialValues: any;
  validationSchema: any;
  children: JSX.Element | JSX.Element[];
  onSubmit: (values: any) => void;
}

const UIForm = ({
  initialValues,
  validationSchema,
  children,
  onSubmit,
}: propTypes) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <React.Fragment>{children}</React.Fragment>}
    </Formik>
  );
};

export default UIForm;
