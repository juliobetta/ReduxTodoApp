import React from 'react';


export default ({onSubmitForm}) => {
  let input = null;

  return (
    <form onSubmit={(e) => onSubmitForm(e, input)} className="input-group">
      <input type="text"
             placeholder="What do you have to do?"
             className="form-control"
             ref={(node) => input = node}/>

      <span className="input-group-btn">
        <button type="submit" className="btn btn-primary">Submit</button>
      </span>
    </form>
  );
}
