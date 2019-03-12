import React from 'react'
import { connect } from 'react-redux'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

class AddReviewPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editorState: {}
    }

    this.onEditorStateChange = this.onEditorStateChange.bind(this)
  }

  onEditorStateChange(newEditorState) {
    console.log(newEditorState)
    this.setState(currentState => ({
      editorState: newEditorState
    }))
  }

  render() {
    const { editorState } = this.state

    return (
      <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    )
  }
}

export default connect(
  globalState => ({

  })(AddReviewPage)
)