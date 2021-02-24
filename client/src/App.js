import React from "react";
import Nav from "./components/Nav";

function App(){
    return(
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path = {["/", "/jobs"]}>
                        <Jobs />
                    </Route>
                    <Route exact path = "/jobs/:id">
                        
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;