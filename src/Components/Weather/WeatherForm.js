import React, {Component} from "react";

class WeatherForm extends Component {
    render() {
        return (
            <form className="weather-block-form" onSubmit={this.props.getWeather}>
                <div className="fields-row">
                    <div className="field-row">
                        {this.props.errorMsg &&
                             <div className="error-msg">{this.props.errorMsg}</div>
                        }
                        <input type="text" name="town" placeholder="town"/>
                        <button className="submit">Submit</button>
                    </div>
                </div>
            </form>

        );
    }
}

export default WeatherForm;