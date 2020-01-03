import React, {Component} from "react";
import skillsJson from '../../data/skills.json';
import './skills.scss';

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            skills: skillsJson
        }
    }

    checkLearnedSkill = (item, id, event) => {
        let target = event.target,
            targetId = target.id;

        item.progress = (Number(targetId) === item.id) && target.checked ? 'Skilled' : '';

        this.setState(state => ({
            skills: state.skills.map(item => ({
                    ...item
                }))
            })
        );

    };

    render() {
        return (
            <div className='skills-list-wrapper'>
                <h1 className='skills-title'>What skills do you have?</h1>
                <ul className='skills-list'>
                    {this.state.skills.map((item, index) => (
                        <li key={item.id} className='skills-item' >
                            <input type="checkbox" id={item.id} onClick={(event) => {
                                this.checkLearnedSkill(item, item.id, event)
                            }}/>
                            <label htmlFor={item.id}>{item.skillName}{ item.progress && <span> - {item.progress}</span>}</label>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Skills;