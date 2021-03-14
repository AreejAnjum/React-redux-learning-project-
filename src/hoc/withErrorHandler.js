// withErrorHandler handles any error in the burgerBuliderjs file
import React from 'react'
import Modal from '../components/Layout/UI/Modal/Modal'


const withErrorHandler=(WrappedComponent, axios)=>{
    return class extends React.Component{
        state={
            error: null
        }

        componentDidMount(){
            axios.interceptors.request.use((req)=>{
                this.setState({error: null})
                return req; 
            }, 

            error=>{this.setState({error: error})})

            axios.interceptors.response.use(res=>{return res},
            error=>{this.setState({error: error})})    
        }
        

        errorConformedHandler=()=>{
            this.setState({error: null})
        }


        render(){
            return(
                <React.Fragment>
                <Modal purhasing={this.state.error}
                backDropClicked={this.errorConformedHandler}>
                    {this.state.error ? this.state.error.message: null}

                </Modal>
                <WrappedComponent {...this.props}/>
                </React.Fragment>
            )
        }
    }
}

export default withErrorHandler;