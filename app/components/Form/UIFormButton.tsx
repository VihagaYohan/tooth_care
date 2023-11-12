import {StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';

// components
import {UIButton} from '../';

interface propTypes {
  label: string;
}

const UIFormButton = (props: propTypes) => {
  const {handleSubmit, isValid, isValidating, initialErrors, errors, values} =
    useFormikContext();
  return <UIButton label={props.label} onClick={handleSubmit} />;
};

const styles = StyleSheet.create({});

export default UIFormButton;
