import React from 'react';
import '../../css/components/switch_button.css';


function SwitchButton(props) {
    return (
        <label class="switch">
            <input type="checkbox" defaultChecked={props.checked} onChange={props.callback}/>
            <span class="slider round"></span>
        </label>
    );
}

export default SwitchButton;