import styled from 'styled-components';
import {useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {URL} from '../conf';

const RegisterBackground = styled.div`
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 692px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  overflow: hidden;
  padding-top: 48px;
  flex-grow: 1;
`;

const Title = styled.div`
	display: flex;
	box-sizing: border-box;
	padding-top: 48px;
	padding-bottom: 24px;
	-ms-flex-pack: center;
  	justify-content: center;
`;

const FormBg = styled.div`
	margin: 0px auto;
  width: 100%;
  max-width: 448px;
  background:rgba(255,255,255,0.7);
  border-radius: 4px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
`;

const FormPad = styled.div`
	padding: 48px;
`

const Form = styled.form`
	text-align: center;

`;

const Input = styled.input`
	width:100%;
	margin-bottom: 10px;
	border-radius: 5px;
  height: 35px;
	text-align: center;
	text-transform: uppercase;
`;

const InputButton = styled.input.attrs({
	type: 'submit',
	value: 'Register'
})`
  background: #3b5998;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #8b9dc3;
  }

`

const RegisterForm = () => {
  const history = useHistory();
  const DEFAULT_DATA = {
    email:'',
    firstName:'',
    lastName:'',
  }
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData=>({
      ...formData,
      [name]:value
    }))
  }
  const handleSubmit = (e)=> {
    e.preventDefault();
    axios.post(URL,formData)
    .then((response)=>{
      history.push('/admin');
		})
		.catch(error=>console.log(error));
  }
	return (
      <RegisterBackground>
        <Title>
          <h1>Register</h1>
        </Title>
          <FormBg>
            <FormPad>
              <Form onSubmit={handleSubmit}>
                <div>
                  <Input type="text" placeholder="email" name="email" value={formData.email} onChange={handleChange}/>
                </div>
                <div>
                  <Input type="text" placeholder="first name" name="firstName" value={formData.firstName} onChange={handleChange}/>
                </div>
                <div>
                  <Input type="text" placeholder="last name" name="lastName" value={formData.lastName} onChange={handleChange}/>
                </div>
				        <InputButton/>
              </Form>
            </FormPad>
          </FormBg>
      </RegisterBackground>
	)
}

export default RegisterForm;