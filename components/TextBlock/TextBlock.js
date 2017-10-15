import React, { Component } from 'react';
require('./TextBlock.scss');

class TextBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    }
  }

  toggleEdit = () => {
    this.setState((state) =>{
     return { ...state, isEdit: !state.isEdit}
    })
  }

  editBlock = (e) => {
    const { title, body } = e.target;
    e.preventDefault()
    this.toggleEdit();
    this.props.edit(
      (this.props.position),
    {
       type: 'text',
       title: title.value,
       body: body.value
    })
  }
  
  render() {
    const {
      toggleEdit,
      editBlock,
      props: {
        block: {
          title, 
          body
        }
      },
      state: {
        isEdit
      }
    } = this;
    return (
      <div onClick={() => !isEdit ? toggleEdit() : ''} className='TextBlock'>
        { !isEdit ? (
          <div>
            <h2 className="TextBlock-title">{title}</h2> 
            <p className="TextBlock-text">{body}</p>
          </div>
          ) : (
           <form onSubmit={editBlock}>
            <input name="title" className="TextBlock-input" defaultValue={title} />
            <textarea name="body" className="TextBlock-input" defaultValue={body}></textarea>
            <button type="submit" className="button-edit">edit</button>
           </form>
          )
        }
     </div>
    )
  }
}
export default TextBlock;