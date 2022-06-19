import { Input, FormInputLabel, Group } from './form-input.styles.jsx';

const FormInput = ({ label, ...restOfProps }) => {
  return (
    <Group>
      <Input {...restOfProps} />
      {label && (
        <FormInputLabel shrink={restOfProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
