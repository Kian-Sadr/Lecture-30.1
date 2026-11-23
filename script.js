const root = ReactDOM.createRoot(document.getElementById("root"));

function makeAlert(message, props){
   //Complete
}

function Page(props) {
   return (
      <>
         <h1>React Events</h1>
         <button>
            Hello Class
         </button>
         <br />
         <button>
            Welcome Class
         </button>
      </>
   );
}

root.render(<Page name="CS 316"/>);