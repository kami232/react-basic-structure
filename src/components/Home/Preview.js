import React, {PureComponent} from 'react';
import ReactType from 'prop-types';
import './Preview.css';

class Preview extends PureComponent {
    static propTypes = {
        title: ReactType.string,
        link: ReactType.string
    };

    render() {
        return (
            <article className="article-preview-item">
                <h1 className="title">{this.props.title}</h1>
                <span className="date">{this.props.date}</span>
                <p className="desc">{this.props.description}</p>
            </article>
        );
    }
}

export default Preview;