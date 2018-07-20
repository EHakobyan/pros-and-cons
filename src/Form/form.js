import React, {Component} from 'react'
import './styles.css'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    addItem = () => {
        let {type} = this.props;
        let {value} = this.textInput.current;
        let newItemData = {
            type,
            value
        }
        if(type === 'pros' && value){
            this.props.addPros(newItemData)
            this.textInput.current.value = ''
        }
        else if(type === 'cons' && value){
            this.props.addCons(newItemData)
            this.textInput.current.value = ''
        }

    }

    render() {
        let {type} = this.props
        return (
            <div className='inputContainer'>
                <input
                    type="text"
                    ref={this.textInput}
                    className='addItemInput'
                    placeholder={`Add ${type}`}
                />

                <div
                    className='addButton'
                    onClick={this.addItem}
                    onKeyPress={this.addItem}
                >
                </div>
            </div>
        );
    }
}