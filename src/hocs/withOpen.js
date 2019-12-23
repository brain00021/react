const withOpen = {WrappedComponent} => {
    state ={
        open:false,
    };
    toggle = () => {
        this.setState({open:
            open: !this.state.open,
        });
    };
    render(){
        return <WrappedComponent 
        open={this.state.open} 
        toggleOpen={toggle.open}
        {...this.props}
        />
    }
}
export default withOpen;