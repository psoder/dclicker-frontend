import { Refresh } from '@material-ui/icons';

import '../style/Style.css';
import '../style/Settings.css';

function SettingsTab() {

    return (
        <div>
            <div id="repo-link">psoder/dclicker-frontend</div>
            <div id="settings" className="horizontal">
                <button id="upd"><Refresh fontSize="medium" /></button>
                <textarea id="textArea"></textarea>
                <button id="set-count"><b>SET COUNT</b></button>
                <button id="set-ip"><b>SET SOURCE</b></button>
            </div>
        </div>
    );
}

export default SettingsTab;