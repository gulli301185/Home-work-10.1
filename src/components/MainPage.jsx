import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


function MainPage() {

    const [ userList, setUserList] = useState([])

    useEffect(()=>{
        const getData= async () =>{
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10',
            )
            const result = await response.json()
            // console.log(result);
            setUserList(result)
        }
        getData()
    },[]) 

    console.log(userList);
  return (
   
    <UserListStyled>
        <ul>
            {userList.map((result)=>(
              <li key={result.id}>
              <P>{result.id} </P>
              <Div>{result.title}</Div>
              <BigImg src={result.url} />
              <SmallImg src={result.thumbnailUrl}  />
              </li>
               
           ))}
           </ul>
   
      </UserListStyled>

  )
}

 const UserListStyled= styled.ul`
 width: 1200px; 
 margin: auto;
 position: relative;

 & >ul {
    display: flex;
    flex-wrap:wrap;
}  
`

const  BigImg=styled.img`
    width: 200px;
`

const SmallImg=styled.img`
    width: 120px;
    margin-bottom:20px;
    position: relative;
    right: 160px;
    
`

const Div= styled.div`
    font-size: 8px;
    width: 100px;
    position: relative;
    top:40px;
    left: 10px;
    color: #f5f505;
    font-weight:600;
`

const P=styled.p`
  font-size: 22px;
  font-weight: bolder;
  color: gray;
  position: relative;
  top:70px;
`
   


export default MainPage