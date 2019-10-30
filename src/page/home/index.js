import React, {Component} from 'react'
import {connect} from 'react-redux'
import CSSModule from 'react-css-modules'
import classNames from 'classnames'
import {Link, withRouter} from "react-router-dom";
import {actionCreators} from './store'

import home from './home.scss'

class Home extends Component {

    componentDidMount() {
        this.props.changeText();
    }

    render() {
        return (
            <div styleName='title'>
                {this.props.text}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    text: state.getIn(['HomeReducer', 'text'])
});

const mapDispatchToProps = (dispatch) => ({
    changeText: () => {
        dispatch(actionCreators.changeText())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CSSModule(Home, home, {allowMultiple: true})))
