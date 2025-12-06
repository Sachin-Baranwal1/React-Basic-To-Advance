import React from 'react'

const App = () => {
  const user = {
    username: 'Sachin',
    age : 20 ,
    city : 'Varanasi'
  }
   //use to convert object into string and store it  into ls.
  localStorage.setItem('user',JSON.stringify(user));

  const final = JSON.parse(localStorage.getItem('user'))
  console.log(final);
  

   //use to set the item in localstorage
  //  localStorage.setItem('user','Sachin');

  // use to get the item stored in local storage
  // const users = localStorage.getItem('user');
  // const age = localStorage.getItem('age')
  // console.log(users,age);

  // Use to remove single  item from localstorage(ls)
  // localStorage.removeItem('user')
  
  // use to clear all data in localstorage
  // localStorage.clear();
  return (
    <div>
       <h1 className='p-10 bg-cyan-400'>Hello World</h1>
    </div>
  )
}

export default App
