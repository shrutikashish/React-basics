 
// we see here how we create react element and render in dom. 
// Now we see how we create nested element in dom through react.
// In dom we want create nested element like this
 //<div id = parent >
   // <div id = child>
   //<h1></h1>
   // </div>
//</div>

let roots= ReactDOM.createRoot(document.getElementById("roots"));
let parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"}),
             React.createElement("h1",{id:"headings"},"I am an h1 tag")
)
roots.render(parent)

//If we want sibling of children then we use Array
//<div id = parents>
// <div id = childs>
//<h1> I am big one</h1>
//<h2> I am small one</h2>
// </div>
//</div>

const rootss = ReactDOM.createRoot(document.getElementById("rootss"));
const middleParent = React.createElement(
    "div",{id: "parent"},
    React.createElement("div",{id:"child1"},
       [ React.createElement("h1",{class:"middle"},"I am big one"),
        React.createElement("h2",{class:"middle"},"I am small one"),
       ]
    )

)
rootss.render(middleParent)

// If we want  to create 2 children and 2 sibling in dom through react
//<div id = parent >
   // <div id = child1>
     //<h1> h1 tag</h1>
      //<h2> h2 tag
   // </div>
    // <div id = child2>
     //<h1> h1 tag</h1>
      //<h2> h2 tag
   // </div>
//</div>
// here we see 2 h1 tag in child1 and 2 h2 tag in child2

let root1 = ReactDOM.createRoot(document.getElementById("root1"));
let bigParent = React.createElement("div",{id:"parent1"}, React.createElement("div",{id:"child1"},
   [
      React.createElement("h1",{class:"big"},"I am supreme"),
      React.createElement("h2",{class:"big"},"I am frontend")
   ],
   React.createElement("div",{id:"parent2"}, React.createElement("div",{id:"child2"},
      [
         React.createElement("h1",{class:"big2"},"I am smarter than upperOne"),
         React.createElement("h2",{class:"big2"},"I am backend")
      ]
   )
   )
   
)
);
root1.render(bigParent)