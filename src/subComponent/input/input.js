import './input.scss'

const Input = (props) => {
  return (
    <>
      <input onBlur={props.onBlur} text="text" onChange={props.onChange} value={props.value} name={props.name} placeholder={props.placeholder} type="text" className={props.className} />
    </>
  );
}

export default Input;
