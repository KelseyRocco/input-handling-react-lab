import './App.css';
import React from 'react';

const initialSkill = {skill: '', level: 1}

class App extends React.Component {
  state = {
    skills: [{ skill: "JavaScript", level: 1 }],
    newSkill: {skill:'', level:3}
  };

  addSkill = e => {
    //always prevent default
    e.preventDefault();
    //update skills array by adding the user input to list of skills in state
    this.setState(state => ({
      skills: [...state.skills, state.newSkill],
      //manualy clear the form
      newSkill: initialSkill
    }))
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newSkill = {
      ...this.state.newSkill, 
      [name]: value
    }

    this.setState({ newSkill })
  }

  render() {
    return (
      <section>
        <h2>DEV SKILLS</h2>
        <hr />
        {this.state.skills.map(s => (
          <article key={s.skill}>
            <div>{s.skill}</div> <div>{s.level}</div>
          </article>
        ))}
        <hr />

        <form onSubmit={this.addSkill}>
          <label>
            <span>SKILL</span>
            <input 
              name="skill"
              value={this.state.newSkill.skill}
              onChange={this.handleChange}
              required
              pattern=".{2,}"
            />
          </label>
          <label>
            <span>LEVEL</span>
            <select 
              name="level" 
              value={this.state.newSkill.level}
              onChange={this.handleChange}
              >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <button>ADD SKILL</button>
        </form>
      </section>
    );
  }
}

export default App;
