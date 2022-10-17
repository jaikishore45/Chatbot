import "./App.css";
import image from "./img/bot-img.jpg";
import { useState, useRef, useEffect } from "react";
import moment from 'moment'


function App() {
 
  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();
 

  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();


  let now = moment();
  let cdate=now.format('h:mm:ss');

  const [currentTime, setCurrentTime] = useState(cdate);

    const update = () =>{
      let now = moment();
    let cdate=now.format('h:mm:ss');
    setCurrentTime(cdate)
    }
    setInterval(update,1000);

  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  //using the useState hook to get the data from the local time and set it to the time variable
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${months[month]} ${year}`
  ); //using the useState hook to get the data from the local date and set it to the dateTime variable
  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Thursday, Aug 13 2022") {
      //if the dateTime is Thursday, 13 Aug 2022, the bot will be inactive
      isActive = false;
    }
    const status = document.querySelector(".status");
    // selecting the status class
    if (isActive === true) {
      //if the bot is active
      status.innerHTML = "Active";
      status.style.color = "greenyellow";
    } else {
      status.innerHTML = "Not Active";
      status.style.color = "red";
    }
  };
  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;





    let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) { // test re method 
      const status = document.querySelector(".status");
      // if the input contains welcome words
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Hello There how are you doing today?"; // display the message
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Bye, have a nice day";
        inputRef.value = ""; // clear the input
      }, 2000);
      setTimeout(() => {
        status.innerText = "Not active";
        status.style.color = "red";
      }, 5000);
    }
    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "You are welcome";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let how = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am fine, thank you";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let good = [
      "That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "😁";
        inputRef.value = ""; // clear the input
      }, 1000);
    }

    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "That is good";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "My name is Bot";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let owner = [
      "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner|owner|welcome you highness|who is your highness|who developed you|highness name|wht is your highness name",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Mr.Jaikishore👑...\n Your Highness Thank you for creating me!";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let owner2 = [
      "Who's Treasure|who's Treasure|Who is Treasure ",
    ];
    let words10 = new RegExp(owner2);
    if (words10.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Treasure is a programmer based on ReactJS and NodeJS he is the owner of a youtube channel called Creative Tutorials";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let ageAsk = [
      "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
    ]; //adding the age-question
    let words11 = new RegExp(ageAsk);
    if (words11.test(document.querySelector("#input").value)) {
      // if the input contains some question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I'm 1 month old ";
        inputRef.value = ""; // clear the input
      }, 2000);
    }


    let que1 = [
      "What are the fibres used in Textile Industry?|fibres used in industry|What are the fibres used|fibres in texile|used fibres in textile  "
    ];
    let ans1 = new RegExp(que1);
    if (ans1.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Three basic types of fibres used in Textile industries are\n 1)Synthetic fibres\n 2)Natural fibres\n 3)Cotton fibres";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let que2 = [
       "What are the chemical based procedures used in textile manufacturing?|chemical procedures in textile|chemicals in textile|what are the chemicals process in  textile industry"
    ];
    let ans2 = new RegExp(que2);
    if (ans2.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "couring\n Bleaching\n Bleach clean up\n De-sizing\n  Fabric softeni\n Mercerization\n Dyeing & Printing";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let que3 = [
       "Mention what is the difference between yarn and thread|differeence between yarn and thread|what are the difference betweeen yarn and threat|yarn and thread difference"
    ];
    let ans3 = new RegExp(que3);
    if (ans3.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Yarn: It is a continuous twisted strand of wool, cotton or synthetic fibre used for Knitting or weaving purpose\n Thread: It is a fine cord made up of two or more twisted fibres used in sewing and weaving ";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let que4 = [
      "What are the different types of cotton available|types of cotton available|types of cotton|types of cotton vailable in textile indiustry"
    ];
    let ans4 = new RegExp(que4);
    if (ans4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "1)Grey cotton fabric\n2)Bleached cotton fabric\n3)Color or dyed cotton fabric";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let que5 = [
      "What is two plant-based cotton source|cotton source"
    ];
    let ans5 = new RegExp(que5);
    if (ans5.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "1)Cotton plant\n2)Bamboo ";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    
    let que6 = [
      "What are the different ways of Textile Quality Control|quality control techiniques|quality control type"
    ];
    let ans6 = new RegExp(que6);
    if (ans6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "1)Spectrophotometern\n2) CCP ( Crucial Control Point)\n3) Quality Check by industrial governing body\n4) Use of UltraViolet. ";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    
    let que7 = [
      "Explain how polyester is made?|explain how polyester is made|polyester making"
    ];
    let ans7 = new RegExp(que7);
    if (ans7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Polyester is a pure synthetic material made from ethylene; it is derived from petroleum residue. It is prepared in four basic forms filament, staple, tow and fiberfill.";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    
    let que8 = [
      "what is chemical and auxillaries in the textile industry?|dyeing auxillaries"
    ];
    let ans8 = new RegExp(que8);
    if (ans8.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "In the textile industry, a dyeing auxillaries is a chemical or formulated chemical which allows a processing operation in preparation, dyeing, printing or finishing to be carried out more effectively.";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    
    let que9 = [
      "How many fibers can you yield from each cotton seed|how many fibers can extract from one"
    ];
    let ans9 = new RegExp(que9);
    if (ans9.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Each cotton seed may produce as many as 20,000 fibers on its surface, and a single ball will contains around 150,000 fibers.";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    
    let que10 = [
      "explain what is tufting?|tufting|what is tufting|tufting meaning"
    ];
    let ans10 = new RegExp(que10);
    if (ans10.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Tufting is a type of method for textile weaving, which is done by pushing extra yarn into a fabric. In this process, many needles simultaneously punch the fabric at pre-determined distance for extruding the fibers. Tufting is usually done on carpets, blankets and upholstery.";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    
    let que11 = [
      "what are the different methods of dyeing|methods of dyeing|differenr methods of dyeing|dyeing methods|dyeing method"
    ];
    let ans11 = new RegExp(que11);
    if (ans11.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "1)Stock dyeing\n2)Top dyeing \n3)Yarn dyeing\n4)Piece dyeing\n5)Garment dyeing\n6)Dope dyeing";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    
    
    let que12 = [
     "what are benefits of quality inspection|quality inspection|benefits of QI|benefits of quality inspection|quality inspection benifits"
    ];
    let ans12 = new RegExp(que12);
    if (ans12.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "1)Reduce the cost associated with quality problems\n2) Identify any non-conformity between the original product and pre-production sample\n3)Enhances the relationship with suppliers";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    


















    getHumanMessage.innerText = inputRef.value; // display the message
  };
  return (
    <div className="App" onLoad={checkStatus}>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="right">
              <div className="name">ChatBot</div>
              <div className="status">Active</div>
              
            </div>
            <div style={{fontSize:"15px", color:"yellowgreen"}}> {dateTime} {currentTime}</div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div
                  className="bot-message"
                  id="message1"
                  ref={botmessage}
                >
                </div>
                <div
                  className="human-message"
                  id="message2"
                  ref={humanMessage}
                  
                  
                ></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input
                  type="text"
                  id="input"
                  placeholder="Enter your message..."
                  ref={input}
                />
              </div>
              <div className="btn">
                <button id="myBtn" onClick={handleInput} >
                  <i className="fas fa-paper-plane"></i>Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
