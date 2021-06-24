import styled from "styled-components";
import {useState,useEffect} from 'react';
import axios from 'axios';
import User from './User';
import {URL} from '../conf';

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

const MessContainer = styled.div`
	display: flex;
	box-sizing: border-box;
	padding-top: 5px;
	-ms-flex-pack: center;
  	justify-content: center;
`;

const Message = styled.p`
  color: red;
`;

const Users = () => {
  const [users,setUsers] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [edited, setEdited] = useState(false);

  const fetchUsers = () => {
	  axios.get(URL)
	  .then((response)=>{
		  const allUsers = response.data;
		  console.log(response);
          setUsers(allUsers)
	  })
	  .catch(error=> console.log(error));
  }

  const handleDelete= (id) => {
	  axios.delete(`${URL}/${id}`)
	  .then((response)=>{
		  const user = response.data;
          console.log(user);
		  setUsers(users.filter(user=>user.id!==id));
		  setDeleted(true);
	  })
	  .catch(error=> console.log(error));
  }

	const handleEdit = (formData,id) => {
		const userData = {...formData,id}
		axios.put(`${URL}/${id}`,userData)
	  	.then((response)=>{
			setUsers(users=>users.map(user=>user.id===id?response.data:user));
			setEdited(true);
		})
		.catch(error=>console.log(error));
	}

	useEffect(()=>{
		fetchUsers();
		console.log(users)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])
  
  useEffect(()=>{
	if(deleted){
		let timer1 = setTimeout(()=>{
			setDeleted(false);
		},2000)

		return () => {
        	clearTimeout(timer1);
        };
	}
	if(edited){
		let timer2 = setTimeout(()=>{
			setEdited(false);
		},2000)

		return () => {
        	clearTimeout(timer2);
        };
	}
  },[deleted,edited]);
  
  return (
	<>
		<Title>
			<h1>Users</h1>
		</Title>
		<MessContainer>
			{deleted&&<Message>User has been deleted successfully!</Message>}
			{edited&&<Message>User has been edited successfully!</Message>}
		</MessContainer>
		<Container>
			<CustomTable>
		    <thead>
				<tr>
					<th>#</th>
					<th>Last Name</th>
					<th>First Name</th>
					<th>Email</th>
					<th>State</th>
					<th>Edit</th>
					<th>Delete?</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user,index) => {
					return (
					<tr key={user.id}>
						<User id={index} user={user} handleDelete={handleDelete} handleEdit={handleEdit}/>
					</tr>
					);
				})}
			</tbody>
			</CustomTable>
		</Container>
	</>
  );
}

export default Users;