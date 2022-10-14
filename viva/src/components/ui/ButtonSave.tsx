import * as React from 'react'

interface IProps {
    isSaving: boolean
    triggerParent: any
}

export default class ButtonSave extends React.Component<IProps> {
    render() {
        return (
            <button className={this.props.isSaving
                 ? 'button is-success is-loading'
                  : 'button is-success'} onClick={this.props.triggerParent}>Submit</button>
        )
    }
}