import React from 'react'

 function alert(props) {
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
props.alert && <div class={`alert alert-${props.alert.type} fade show`} role="alert">
  <strong> {capitalize(props.alert.type)}</strong>: {props.alert.msg}
 
  </div>
  )
}

export default alert

