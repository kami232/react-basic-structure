import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PreviewList from "../components/Home/PreviewList";
import {listActions} from './HomeRedux';

class Home extends PureComponent {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <PreviewList {...this.props.list} {...this.props.listActions}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.home.list
});

const mapDispatchToProps = (dispatch) => ({
    listActions: bindActionCreators(listActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);