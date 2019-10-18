import React, {PureComponent} from 'react';
import Nav from './Nav';

class Frame extends PureComponent {
    render() {
        return (
            <div className="frame">
                <section className="header">
                    <Nav/>
                </section>
                <section className="container">
                    {this.props.children}
                </section>
            </div>
        );
    }
}

export default Frame;