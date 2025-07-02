"use client"
import { useState } from "react"

const OpenDetailsbox = () => {
    const[Details,setDetails]=useState({});

    function DetailsHandler(selectedObj){
      setDetails(selectedObj)
    }
    

    return (
        <>
           <div className="max-w-7xl  mx-auto  mt-10 px-4">
            <h1 className="text-3xl font-bold">Our AI Applications In Fintech App</h1>
            <div className="grid rounded-xl border border-black overflow-hidden mt-5 grid-cols-2 ">
                <div  style={{ backgroundImage: 'linear-gradient(90deg, #7b0101 0%, #000000 100%)'}} className="overflow-y-scroll  text-white px-10 ">
                   <ul  className="list-decimal  text-xl cursor-pointer">
                    {columndata.map((item,index)=>{
                    return(
                        <li  style={{ marginTop: "10px", marginBottom: "10px" }} key={index} onClick={()=> DetailsHandler(item)}>{item?.title}</li>
                    )
                   })}
                   </ul>
                </div>
                <div className="px-10 py-10 flex flex-col gap-3">
                    <div style={{backgroundColor:"#b91c1c",padding:"5px"}} className="w-14 h-14 rounded-md"><img src={`/new/${Details?.image}`}   alt="image" /></div>
                    <h1 className="text-xl font-bold">{Details.title}</h1>
                    <p>{Details.description}</p>
                </div>
            </div>
           </div>
        </>
    );
}

export default OpenDetailsbox;

const columndata=[
    {
       title: "Custom AI Finance Apps",
       description:"Use our AI-powered Finance Apps to navigate the intricacies of the financial markets. We use NLP for sentiment analysis and real-time news, predictive analytics for market patterns, and machine learning to inform our investing strategies. AI that can learn from and adjust to shifting market conditions can help you stay ahead of the curve.",
       image:"finance.svg"
    },
    {
        title:"Credit Risk Assessment",
        description:"Use our AI-powered Finance Apps to navigate the intricacies of the financial markets. We use NLP for sentiment analysis and real-time news, predictive analytics for market patterns, and machine learning to inform our investing strategies. AI that can learn from and adjust to shifting market conditions can help you stay ahead of the curve",
        image:"finance.svg"
    },
    {
        title:"Financial Forecasts",
        description:"Use our AI-powered Finance Apps to navigate the intricacies of the financial markets. We use NLP for sentiment analysis and real-time news, predictive analytics for market patterns, and machine learning to inform our investing strategies. AI that can learn from and adjust to shifting market conditions can help you stay ahead of the curve.",
        image:"finance.svg"
    },
    {
        title:"Algorithmic Trading",
        description:"Use our AI-powered Finance Apps to navigate the intricacies of the financial markets. We use NLP for sentiment analysis and real-time news, predictive analytics for market patterns, and machine learning to inform our investing strategies. AI that can learn from and adjust to shifting market conditions can help you stay ahead of the curve.",
        image:"finance.svg"
    },
    {
        title:"Robotic Process Automation",
        description:"Use our AI-powered Finance Apps to navigate the intricacies of the financial markets. We use NLP for sentiment analysis and real-time news, predictive analytics for market patterns, and machine learning to inform our investing strategies. AI that can learn from and adjust to shifting market conditions can help you stay ahead of the curve.",
        image:"finance.svg"
    },
    {
        title:"AI Wallet Apps",
        description:"Use our AI-powered Finance Apps to navigate the intricacies of the financial markets. We use NLP for sentiment analysis and real-time news, predictive analytics for market patterns, and machine learning to inform our investing strategies. AI that can learn from and adjust to shifting market conditions can help you stay ahead of the curve.",
        image:"finance.svg"
    },
    {
        title:"AI Accounting Apps",
        description:"Use our AI-powered Finance Apps to navigate the intricacies of the financial markets. We use NLP for sentiment analysis and real-time news, predictive analytics for market patterns, and machine learning to inform our investing strategies. AI that can learn from and adjust to shifting market conditions can help you stay ahead of the curve.",
        image:"finance.svg"
    },
    {
        title:"AI Insurance Apps",
        description:"Use our AI-powered Finance Apps to navigate the intricacies of the financial markets. We use NLP for sentiment analysis and real-time news, predictive analytics for market patterns, and machine learning to inform our investing strategies. AI that can learn from and adjust to shifting market conditions can help you stay ahead of the curve.",
        image:"finance.svg"
    },
    {
        title:"Banking Security",
        description:"Use our AI-powered Finance Apps to navigate the intricacies of the financial markets. We use NLP for sentiment analysis and real-time news, predictive analytics for market patterns, and machine learning to inform our investing strategies. AI that can learn from and adjust to shifting market conditions can help you stay ahead of the curve.",
        image:"finance.svg"
    }
]
