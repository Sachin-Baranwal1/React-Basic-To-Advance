import React from "react";
import Header from "./components/Section1/Navbar";
import Left from "./components/Section1/Left";
import Right from "./components/Section2/Card";
function App() {
      const arr = [
        {
          img : 'https://plus.unsplash.com/premium_photo-1661757505824-69b1816836bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170' ,
         p:'Prime customers that have access to bank credit and are satisfied with the current product.' ,
         suggestion: 'Satisfied'} ,
         {
          img:'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxzaG9wfGVufDB8fDB8fHww',
          p: 'Connecting people, products, and purpose Where satisfaction meets simplicity.',
          suggestion: 'Unreserved'},
          {
            img: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHNob3B8ZW58MHx8MHx8fDA%3D',
            p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, quos. this is static',
          suggestion: 'Reserved'
        },
       {
            img: 'https://images.unsplash.com/photo-1612864740469-d74de99c6037?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, quos. this is static',
          suggestion: 'Reserved'
        },
      {
            img: 'https://images.unsplash.com/photo-1612864740469-d74de99c6037?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, quos. this is static',
          suggestion: 'Reserved'
        }]
  return (
    <div className="h-screen ">
      <div className="h-[10%]">
        <Header />
      </div>
      <div className="flex h-[90%] ">
        <Left />
        <div id="main" className="h-full flex gap-2 overflow-x-auto  flex-nowrap justify-evenly">
                  {arr.map((item, index) => (
                    <Right
                      key={index}
                      index={index + 1} 
                      img={item.img}
                      p={item.p}
                      suggestion={item.suggestion}
                    />
                  ))}
                </div>
      </div>
    </div>
  );
}

export default App;
