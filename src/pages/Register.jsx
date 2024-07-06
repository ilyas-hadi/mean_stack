import logo from '../assets/images/logo.svg';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Link } from 'react-router-dom';
import FormRow from '../components/FormRow';
const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
       <img src={logo} alt='jobify' className='logo' />
        <h4>Register</h4>
       <FormRow labelText="first name " type="text" id="firstName" defaultValue="Ilyas" />
       <FormRow labelText="last name " type="text" id="lastName" defaultValue="Hadi" />
       <FormRow labelText="Your Location " type="text" id="userLocation" defaultValue="Pakistan" />
       <FormRow labelText="Eamil " type="email" id="userGamil" defaultValue="Demo123@gmail.com" />
       <FormRow labelText="password " type="password" id="userPassword" defaultValue="demo@123" />

        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;