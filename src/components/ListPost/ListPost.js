import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from './../../redux/actions/postAction/postActions'
import { postReducer } from './../../redux/reducers/postReducer/postReducer';

 class ListPost extends Component {
    render() {
        console.log(this.props)
        this.props.getPost()
        return (
            <div>
                            
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
   return{
    data:  state.postReducer.data
   } 
}
const mapActionToProps = () => {
    return {getPost}  
}
export default connect(mapStateToProps,mapActionToProps)(ListPost)