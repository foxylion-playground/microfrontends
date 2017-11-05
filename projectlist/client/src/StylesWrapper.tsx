import * as React from "react";
import StyleSheet from "styled-components/lib/models/StyleSheet";

interface State {
  styles: string;
}

class StylesWrapper extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      styles: StyleSheet.instance.toHTML()
    };
  }

  public componentDidMount() {
    const updatedStyles = StyleSheet.instance.toHTML();

    if (this.state.styles !== updatedStyles) {
      this.setState({ styles: updatedStyles });
    }
  }

  public componentDidUpdate() {
    const updatedStyles = StyleSheet.instance.toHTML();

    if (this.state.styles !== updatedStyles) {
      this.setState({ styles: updatedStyles });
    }
  }

  public render() {
    return (
      <div>
        {this.props.children}
        <div dangerouslySetInnerHTML={{ __html: this.state.styles }} />
      </div>
    );
  }
}

export default StylesWrapper;
