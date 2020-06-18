import React from 'react';
import { ReactComponent as Photos } from '../img/photos.svg';
import { ReactComponent as Github } from '../img/github.svg';
import '../css/Tags.css';


// Usage: 
// <Tags tag_name1 spacer tag_name2 ... />
// or <Tags tag_name1='text_shown' spacer tag_name2 ... />
//
// tag_name1 will also be the classname. Use that to set background / font color.
// spacer pushes the rest of the tags to the right.


function Tags(props) {
    return (
        <div className='Tags'>
            {
                Object.keys(props).map(function (key) {
                    if (key === 'spacer')
                        return (<div className='spacer'></div>);
                    else if (key === 'GoogleDrive') {
                        if (!(props[key] === '' || props[key] === true))
                            return (<a href={props[key]}><div className={'tag ' + key}><Photos/></div></a>);
                    }
                    else if (key === 'Github') {
                        if (!(props[key] === '' || props[key] === true))
                            return (<a href={props[key]}><div className={'tag ' + key}><Github/></div></a>);
                    }
                    else {
                        if (props[key] === true)
                            return (<div className={'tag ' + key}>{key}</div>);
                        else
                            return (<div className={'tag ' + key}>{props[key]}</div>);
                    }
                })
            }
        </div>
    );
}

export default Tags;