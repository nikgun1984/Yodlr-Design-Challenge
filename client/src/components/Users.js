import styled from "styled-components";
import {useState,useEffect} from 'react';
import axios from 'axios';

const Container = styled.div`
	margin: 0px auto;
	margin-top: 50px;
    width: 100%;
    max-width: 1000px;
    background:rgba(255,255,255,0.8);
    border-radius: 4px;
    box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
`;

const Title = styled.div`
	display: flex;
	box-sizing: border-box;
	padding-top: 48px;
	padding-bottom: 24px;
	-ms-flex-pack: center;
  	justify-content: center;
`;

const CustomTable = styled.table`
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  border-bottom-right-radius: 10px;
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th,
  tr {
    padding: 10px;
  }
  th {
    text-align: center;
  }
`;

const Input = styled.input`
  padding: 10px;
  width:100%;
`;

const IconContainer = styled.td`
  text-align: center;
`;

const Icon = styled.i`
  cursor: pointer;
  :hover {
    color: #3b5998;
  }

`

const Users = () => {
  const [users,setUsers] = useState([]);

  const fetchUsers = () => {
	  axios.get('http://localhost:3000/users')
	  .then((response)=>{
		  const allUsers = response.data;
          setUsers(allUsers)
	  })
	  .catch(error=> console.log(error));
  }
  useEffect(()=>{
	fetchUsers();
  },[]);
  return (
	<>
		<Title>
			<h1>Users</h1>
		</Title>
		<Container>
			<CustomTable>
			<tr>
				<th>#</th>
				<th>Last Name</th>
				<th>First Name</th>
				<th>Email</th>
				<th>Edit</th>
				<th>Delete?</th>
			</tr>
			{Object.values(users).map((user, index) => {
				return (
				<tr key={index}>
					<td>{index+1}</td>
					<td><Input type="text" width="100%" value={user.lastName}/></td>
					<td><Input type="text" width="100%" value={user.firstName}/></td>
					<td><Input type="text" width="100%" value={user.email}/></td>
					<IconContainer><Icon className="fas fa-edit"></Icon></IconContainer>
					<IconContainer><Icon className="fas fa-trash-alt"></Icon></IconContainer>
				</tr>
				);
			})}
			</CustomTable>
		</Container>
	</>
  );
}

export default Users;