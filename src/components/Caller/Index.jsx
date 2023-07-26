import React from "react";
import CallerID from "../Caller/CallerID";

const Index = (props) => {
  const callersId = [
    {
      name: "Timi",
      nickName: "Vermillion",
      contact: "080102850113",
    },
    {
      name: "Ekenne",
      nickName: "Cj",
      contact: "080134560113",
    },
    {
      name: "Aluj",
      nickName: "Aj",
      contact: "0802028591234",
    },
    {
      name: "Aurora",
      nickName: "RO",
      contact: "070401820559",
    },
  ];
  return (
    <div className="flex  justify-between">

    {callersId.map((item,index) =>{
     return   <div className="text-center">
 <CallerID 
 
 username={item.name}
 guyName={item.nickName}
 contact={item.contact}
 />
        </div>
    })}

   



    </div>
  );
};

export default Index;



// {callersId.map((item, index) => {
//     return <ul onChange={item}>
//       <CallerID  username={item.name}
//       guyName={item.nickName}
//       contact={item.contact}
//       />  
//     </ul>
//     })}