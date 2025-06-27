

	var client;

	// var mqttHost = '127.0.0.1';
	var mqttHost = '192.168.1.179';

function initMQTT(){
	//var randomNumber = Math.random();
	client = new Paho.MQTT.Client(mqttHost, 8000, "topazwebclient");
	client.onConnectionLost = onConnectionLost;
	  
	client.onMessageArrived = onMessageArrived;
	console.log("client:"+client.socket);

	clientConnect(); 
	
};



function onConnect() {	  
	//console.log("sub");

	var subscribeToken;
	
//	alert("tokenArray:::"+tokenArray);
	
//	console.log("tokenArray:::"+tokenArray);

	console.log("tokenArray:::"+tokenArray);
  for(var i =0; i<tokenArray.length; i++){

	  //console.log("tokenArray::"+tokenArray[i]);
	  try {
      client.subscribe(tokenArray[i].toString(), {qos:1},{
        onSuccess : function(){
            console.log('Acknowldgement recieved by sender');
        },
        onFailure : function(){
            console.log('Subscribe request has failed or timed out');
        }
		
    });
	  }catch(err) {
		  console.log("Error in sunscribing to topic... message:"+err.message);
		//  clientConnect();
	  }
  }

}

function unsubribeTopics() {	  
	//console.log("sub");

	var subscribeToken;
	
//	alert("tokenArray:::"+tokenArray);
	
//	console.log("tokenArray:::"+tokenArray);

	console.log("Unsubscribing topics from tokenArray:::"+tokenArray);
  for(var i =0; i<tokenArray.length; i++){

	  //console.log("tokenArray::"+tokenArray[i]);
	  try {
		  client.unsubscribe(tokenArray[i].toString());
      
	  }catch(err) {
		  console.log("Error in unsunscribing from topic... message:"+err.message);
		//  clientConnect();
	  }
  }

}


function clientConnect(){

	console.log("connecting  to MQTT");
	try {
	client.connect({ 
		  onSuccess: onConnect,
		 // useSSL:true,
		 // userName : 'admin',
		 // password : 'hivemq', 
		  cleanSession : false,
		  keepAliveInterval:123456,
		  // },
		  onFailure: onFailure
			 // useSSL:true,
			 // userName : 'admin',
			 // password : 'hivemq', 
			  //cleanSession : true*/
			  });
	}
	catch(err) {
	  console.log("Error in connecting.. message:"+ err.message);
	  //setTimeout(clientConnect,5);
	}
}

function onFailure() {
	setTimeout(clientConnect,5);
}

	// called when a message arrives
	function onMessageArrived(message) {
		
	  console.log("onMessageArrived:" + message.payloadString);

//	  var x;
//	  var y;
//	  var obj = JSON.parse(message.payloadString.trim());
//	  x = obj.topic;
//	  var message = obj.message;
//	  
//	  
//	  var script = message.message;
	  
	  var scripsplit= message.payloadString.split("|");
	  
	  var token=scripsplit[0].toString();
	  var ltp=scripsplit[1];
	  
	  console.log("token::"+token+"ltp::"+ltp);
	  

    	  
      var allToken;
      
      console.log("tokenArray::"+tokenArray);
      
      for(var i =0; i<tokenArray.length; i++){
    	  allToken=tokenArray[i].toString();
     
    	  
     if(token===allToken){
    	 
    	 if(document.getElementById(token+"_priceid") != null)
    	 document.getElementById(token+"_priceid").innerHTML = ltp+"";

    	 document.getElementById(token+"_priceid_hidden").value = ltp+"";
    	 var buysellprice = document.getElementById("buysell_priceid");
    	 if(document.getElementById("token").value == allToken && buysellprice != 'undefined') {
    		 buysellprice.innerHTML = ltp+"";
    	 }
      }
      	
 //     } 
	  //console.log("Topic:     " + message.destinationName);
	  //console.log("QoS:       " + message.qos);
	  //console.log("Retained:  " + message.retained);
	  // Read Only, set if message might be a duplicate sent from broker
	  //console.log("Duplicate: " + message.duplicate);
	}
      
	}

	function onConnectFailure(message) {
		console.log("Connect Failed:" + responseObject.errorMessage);
			//setTimeout(initMQTT,0);
		    

		}	
	function onConnectionLost(responseObject) {
		  if (responseObject.errorCode !== 0) {
			  //setTimeout(initMQTT,5);
		    console.log("ConnectionLost:" + responseObject.errorMessage);
		  }
		}	