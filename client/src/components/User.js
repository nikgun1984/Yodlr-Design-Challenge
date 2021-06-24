import styled from "styled-components";
import {useState} from 'react';

const Input = styled.input`
  padding: 10px;
  width:100%;
`;

const Select = styled.select`
  padding: 10px;
  width:100%;
`;

const TDContainer = styled.td`
  text-align: center;
`;

const Icon = styled.i`
  cursor: pointer;
  :hover {
    color: #3b5998;
  }

`

const User = ({id, user, handleDelete,handleEdit}) => {
	const [formData,setFormData] = useState({lastName:user.lastName,firstName:user.firstName, email:user.email,state:user.state});
	const handleOnChange = (e)=> {
	  const { name, value } = e.target;
	  setFormData((data)=>({
		  ...data,
		 [name]: value
	  }))
    }

	return (
		<>
			<TDContainer>{user.id}</TDContainer>
			<td><Input type="text" value={formData.lastName} name="lastName" onChange={handleOnChange}/></td>
			<td><Input type="text" value={formData.firstName} name="firstName" onChange={handleOnChange}/></td>
			<td><Input type="text" value={formData.email} name="email" onChange={handleOnChange}/></td>
			<td><Select name="state" value={formData.state} onChange={handleOnChange}> 
					<option value="active" name="active">Active</option>
					<option value="pending" name="pending">Pending</option>
				</Select>
			</td>
			<TDContainer><Icon className="fas fa-edit" onClick={()=>handleEdit(formData,user.id)}></Icon></TDContainer>
			<TDContainer><Icon className="fas fa-trash-alt" onClick={()=>handleDelete(user.id)}></Icon></TDContainer>
		</>
	)
}
	
export default User;