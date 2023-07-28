import React from "react";
import CallerID from "../Caller/CallerID";
import CloseFriends from "./CloseFriends";

const Index = (props) => {


 

  const firstName = (name) =>{
         
    return name.charAt(0)
  }
  
  
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


  const recentCalls =[
    {
        name: "maliki",
        nickName: "Vermillion",
    },
    {
        name: "Ikenna",
        nickName: "IK",
    },
    {
        name: "charle",
        nickName: "Charlons",
    },
    {
        name: "Vicky",
        nickName: "VickyVibes",
    }
  ]
  return (
    <div className="">
      <div className="flex justify-between">
        {callersId.map((item, index) => {
          return (
            <div className="text-center">
              <CallerID
                username={firstName(item.name)}
                guyName={item.nickName}
                contact={item.contact}
              />
            </div>
          );
        })}
      </div>


      <div className="flex justify-center">
        <div className="mt-12 text-center w-96 h-36  bg-red-200">
          <h1 className="mb-8"> Stay Protected</h1>
          <h3 className="mb-8">Allow TrueCaller to run in your backgroud...</h3>
          <p className="mb-8">Allow</p>
        </div>
      </div>

{recentCalls.map((call,index)=>{
    return <div className="mt-8">
  <CloseFriends 
  username={firstName(call.name)}
  guyName={call.nickName}
  
  />
    </div>
})}

    </div>
  );
};

export default Index;
