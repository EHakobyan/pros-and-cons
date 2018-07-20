import React, {Component} from 'react';
import './criteria.css'
import Form from '../Form/'

const criteriaData = [
    {
        criteriaType: 'pros'
    },
    {
        criteriaType: 'cons'
    }
]

class Criteria extends Component {
    constructor() {
        super();
        this.state = {
            isOpenEditWindow: false,
            editableData: {},
            editableValue: ''
        }
        this.editInput = React.createRef()
    }

    _handleChange = (event) => {
        this.setState({editableValue: event.target.value})
    }

    _capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    _renderProsRow = () => {
        let {pros} = this.props;
        pros = pros ? pros : []
        return (
            pros.map((item, i) => (
                <div className='criteriaRow flex' key={i}>
                    <span className='itemTitle'>
                        {item.value}
                    </span>
                    <div className='flex'>
                        <div className='editIcon'
                             onClick={() => this._openEditWindow({type: 'pros', value: item.value, index: i})}/>
                        <div className='removeIcon' onClick={() => this._remove({type: 'pros', index: i})}/>
                    </div>
                </div>
            ))
        )
    }

    _renderConsRow = () => {
        let {cons} = this.props
        cons = cons ? cons : []
        return (
            cons.map((item, i) => (
                <div className='criteriaRow flex' key={i}>
                    <span className='itemTitle'>
                        {item.value}
                    </span>
                    <div className='flex'>
                        <div className='editIcon'
                             onClick={() => this._openEditWindow({type: 'cons', value: item.value, index: i})}/>
                        <div className='removeIcon' onClick={() => this._remove({type: 'cons', index: i})}/>
                    </div>
                </div>
            ))
        )

    }

    _openEditWindow = (data) => {
        this.setState({
            isOpenEditWindow: true,
            editableData: data,
            editableValue: data.value
        })
    }

    _closeEditWindow = () => {
        this.setState({
            isOpenEditWindow: false,
            editableData: {},
            editableValue: ''
        })
    }

    _handleClicks = (event) => {
        event.stopPropagation()
    }

    _saveEditedValue = () => {
        let editedValue = this.state.editableValue;
        let {editableData} = this.state;
        if (editableData.type === 'pros') {
            this.props.editPros({index: editableData.index, value: editedValue})
            this.setState({
                isOpenEditWindow: false,
                editableValue: ''
            })
        }
        else if (editableData.type === 'cons') {
            this.props.editCons({index: editableData.index, value: editedValue})
            this.setState({
                isOpenEditWindow: false,
                editableValue: ''
            })
        }
    }

    _remove = (data) => {
        if (data.type === 'pros') {
            this.props.deletePros({index: data.index})
        }
        else if (data.type === 'cons') {
            this.props.deleteCons({index: data.index})
        }
    }

    render() {
        let {isOpenEditWindow, editableValue} = this.state;
        return (
            <div className='mainContainer flex'>
                {isOpenEditWindow &&
                <div className='editFormWrapper flex' onClick={this._closeEditWindow}>
                    <div className='editFormContainer flex' onClick={this._handleClicks}>
                        <div className='top flex'>
                            <div className='closeWindow' onClick={this._closeEditWindow}/>
                        </div>
                        <div className='editForm'>
                            <input type="text" ref={this.editInput} value={editableValue} onChange={this._handleChange}
                                   autoFocus={true}/>
                            <input type="button" value='Save' onClick={this._saveEditedValue} className='saveButton'/>
                        </div>
                    </div>
                </div>
                }
                {criteriaData.map((item, i) => (
                        <div className={`criteriaContainer flex${i === 0 ? ' rightBorder' : ''}`} key={i}>
                            <div className='titleContainer'>
                                <span className='title'>{this._capitalizeFirstLetter(item.criteriaType)}</span>
                            </div>
                            <div className='col flex'>
                                <div>
                                    {item.criteriaType === 'pros' && this._renderProsRow()}

                                    {item.criteriaType === 'cons' && this._renderConsRow()}

                                </div>
                                <Form type={item.criteriaType}/>
                            </div>
                        </div>
                    )
                )

                }
            </div>
        )
    }
}

export default Criteria