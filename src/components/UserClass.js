import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
        
      },
    };

    console.log(this.props.name + "Child Constructor called ");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child component did mount");

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const { name, location,  avatar_url } = this.state.userInfo;

    console.log(this.props.name + "Child render");

    return (
      <div className="user-card">
        <img src="avatar_url" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @karthik_0180</h4>
      </div>
    );
  }
}

export default UserClass;

/******
 * 
 * ----Mounting------
 * 
 * Constructor (dummy)
 * Render (dummy)
 *      <html Dummy/>
 * Component Did Mount
 *      <API Call>
 *      <this.setState>
 * 
 * ---Update---
 * 
 *    render(API data)
 *    <HTML (new api data)/>
 *    component did update
 * 
 */