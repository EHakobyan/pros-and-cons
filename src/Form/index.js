import Form from './form'
import { addPros, addCons } from "../actions/index";
import {connect} from 'react-redux'



const store = state => ({
    pros: state.pros,
    cons: state.cons
})


const dispatch = dispatch => ({
    addPros: (data) => dispatch(addPros(data)),
    addCons: (data) => dispatch(addCons(data)),
})


export default connect(store, dispatch)(Form)