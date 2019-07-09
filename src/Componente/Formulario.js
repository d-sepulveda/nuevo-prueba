import React,{Component} from 'react';

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            responsible:'',
            description:'',
            priority:'low'
        }
        this.handleInput=this.handleInput.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleInput(evento){
        const { value, name }= evento.target;
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit(evento){
        evento.preventDefault();
        this.props.onAddDatos(this.state);
    }

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                        type="text"
                        name="title"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="responsible"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="description"
                        className="form-control"
                        onChange={this.handleInput}
                        placeholder="Description"
                        />
                    </div>
                    <div className="form-group">
                        <select 
                            name="priority"
                            onChange={this.handleInput}
                            className="form-control"
                            >
                            <option>low</option>
                            <option>medium</option>
                            <option>hight</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default Formulario;