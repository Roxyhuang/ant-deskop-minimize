import React from 'react';
import CSSModules from 'react-css-modules';
import s from './list.less';

class ListB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  componentDidMount() {
    console.log('reload');
    console.log(this.props.history);
    console.log(this.props.match);
    console.log(this.props.location);
    // TODO
    // backend.getInstance().getProductList({ method: 'POST' }).then((res) => {
    //   console.log(res);
    // });
  }
  componentWillReceiveProps(nextProps) {
    console.log('update');
    console.log(nextProps);
    console.log(this.props);
    console.log(this.props.location);
  }

  render() {
    return (
      <div>
        <div className={s.listB}>B</div>
        <input placeholder="test" />
        <div>{this.props.match.params.test}</div>
        <button onClick={() => this.props.history.push({ pathname: '/list-a/2', search: '?test=111' })} />
      </div>

    );
  }
}

export default CSSModules(ListB, s);
