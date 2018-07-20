import Criteria from './criteria';
import {connect} from 'react-redux'
import {deletePros, deleteCons, editPros, editCons} from "../actions";

const store = state => ({
    pros:state.pros,
    cons:state.cons
})

const dispatch = dispatch => ({
    deletePros: (data) => dispatch(deletePros(data)),
    deleteCons: (data) => dispatch(deleteCons(data)),
    editPros: (data) => dispatch(editPros(data)),
    editCons: (data) => dispatch(editCons(data))
})


export default connect(store, dispatch)(Criteria)