import SignUpForm from 'component/sign-up-form/sign-up-form.component';
import SignInForm from 'component/sign-in-form/sign-in-form.component';
import { AuthenticationContainer } from './authentication.styles.jsx';

import './authentication.styles.jsx';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
