document.addEventListener("DOMContentLoaded", function() {
    var unbluButton = document.getElementById("unblu-button");
    unbluButton.addEventListener("click", function() {
        openVisitorUI();
        console.log("Unblu called");
    });
})

openVisitorUI = () => {

  if (unblu.api.isConfigurationNeeded()) {
    unblu.api.configure({serverUrl: "https://latest.demo.unblu.com", apiKey: "cTlHZr7_TGKLyx38iOrCfg"}).initialize().then(api => {
      // use the api
      console.log("API initialized successfully!");

      api.ui.openIndividualUi().then(() => {

      }).catch();


    }).catch(e => {
      if(e.type === 'INITIALIZATION_TIMEOUT') {
        //retry
      } else if(e.type === 'UNSUPPORTED_BROWSER') {
        // display unsupported browser dialog
      } else {
        // show generic error message
      }
    });
  } else if (unblu.api.isInitialized()) {
    var api = unblu.api.initializedApi;
    api.ui.openIndividualUi().then(() => {

    }).catch();
  } else {
    unblu.api.initialize().then(api => {
      // use the api
      console.log("API initialized successfully!");

      api.ui.openIndividualUi().then(() => {

      }).catch();
    }).catch(e => {
      if(e.type === 'INITIALIZATION_TIMEOUT') {
        //retry
      } else if(e.type === 'UNSUPPORTED_BROWSER') {
        // display unsupported browser dialog
      } else {
        // show generic error message
      }
    });
  }
}

startNewChat = () => {

  unblu.api.configure({serverUrl: "https://latest.demo.unblu.com", apiKey: "cTlHZr7_TGKLyx38iOrCfg"}).initialize().then(api => {
    // use the api
    console.log("API initialized successfully!");

    api.isAgentAvailable().then(agent => {
        console.log("Agent is present: ", agent);
        if (agent) {
        api.startConversation("CHAT_REQUEST", "John").then(conversation => {
        conversation.on("end", function() {
        console.log("Conversation ended.");
      });
      conversation.on("close", function() {
      console.log("Conversation closed.");
    });
    }).catch(e => {
    console.log("error on start conversation: ", e);
    });


    } else {
    console.log("Agent is not present.");
    // Do something
    }


  }).catch(e => {
  console.log("Error on isAgentAvailable: ", e);
  });


  }).catch(e => {
    if(e.type === 'INITIALIZATION_TIMEOUT') {
      //retry
    } else if(e.type === 'UNSUPPORTED_BROWSER') {
      // display unsupported browser dialog
    } else {
      // show generic error message
    }
  });

}
