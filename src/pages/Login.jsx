import logo from '../assets/images/logo.svg';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Link } from 'react-router-dom';
import FormRow from '../components/FormRow';


export default function Login() {
  return (
    <Wrapper>
      <form className='form'>
       <img src={logo} alt='jobify' className='logo' />
        <h4>Login</h4>
       <FormRow labelText="Eamil " type="email" id="userGamil" defaultValue="Demo123@gmail.com" />
       <FormRow labelText="password " type="password" id="userPassword" defaultValue="demo@123" />

        <button type='submit' className='btn btn-block'>
          Login 
        </button>
        <button type='button' className='btn btn-block'>
          Explore the app 
        </button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}
