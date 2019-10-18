import React, {PureComponent} from 'react';
import ReactType from 'prop-types';
import Preview from "./Preview";

class PreviewList extends PureComponent {
    static propTypes = {
        articleList: ReactType.arrayOf(ReactType.object),
        loading: ReactType.bool,
        error: ReactType.bool,
        loadArticles: ReactType.func
    };

    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        const {loading, error, articleList} = this.props;

        if (error) {
            return <p className="message">Oops, something is wrong.</p>
        }

        if (loading) {
            return <p className="message">Loading...</p>
        }

        return articleList.map((item) => (
            <Preview {...item} key={item.id}/>
        ));
    }
}

export default PreviewList;