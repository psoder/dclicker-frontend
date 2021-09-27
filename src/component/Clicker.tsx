import { Component } from 'react'
import { ArrowDownward, ArrowUpward, Settings } from '@material-ui/icons';
import SettingsTab from './Settings';
import '../style/Style.css';
import '../style/Clicker.css';

class Clicker extends Component {
    state = {
        count: 0,
        settingsShown: false,
    }
    intervalID: NodeJS.Timeout | undefined;

    componentDidMount() {
        // this.intervalID = setInterval(
        //     () => this.getCount(), 3000
        // );
    }

    toggleSettings = () => {
        this.setState({ settingsShown: !this.state.settingsShown });
    }

    render() {
        return (
            <div id="clicker">
                <div className="vertical">
                    <div id="top-container" className="horizontal">
                        <div id="count">{this.state.count}</div>
                        <button id="settings-icon" onClick={this.toggleSettings}><Settings fontSize="inherit" /></button>
                        {/* <div id="settings-icon"><Settings fontSize="inherit" /></div> */}
                    </div>

                     {this.state.settingsShown && <SettingsTab />}
                </div>

                <div id="button-container" className="vertical">
                    <button id="inc"><ArrowUpward fontSize="large" /></button>
                    <button id="dec"><ArrowDownward fontSize="large" /></button>
                </div>
            </div>
        );
    }
}


export default Clicker