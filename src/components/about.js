import React from "react";
// import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component {

    constructor(props) {
        super(props);

        console.log("Parent constructor called");
    }

    componentDidMount() {
        console.log("pARENT component did mount");
      }

    render() {
        console.log("rendering")
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namasthe React web series</h2>
                {/* <User name={"Karthik R K (function)"} /> */}
                <UserClass name={"Karthik R K (class)"} location={"Hubli Class"}  />
                {/* <UserClass name={"Elon Musk (class)"} location={"California Class"}  /> */}
            </div>
        )
    }
    }
    

export default About;