const React = require('react');

class TextContainer extends React.PureComponent {
  render() {
    const { idyll, children, className, updateProps, ...props } = this.props;
    const { styles, ...layout } = idyll.layout;
    const { styles: _, ...theme } = idyll.theme;
    const style = { ...layout, ...theme };
    const cn = (className || '') + ' idyll-text-container';
    return (
      <div {...props} className={cn}>{children}</div>
    );
  }
}

export default TextContainer;
