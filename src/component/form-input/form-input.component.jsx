import './form-input.styles.scss'

const FormInput = ({ label, ...restOfProps}) => {
  return (
    <div className='group'>
      <input className='form-input' {...restOfProps}/>
      {label && (
        <label 
          className={`${
            restOfProps.value.length ? 'shrink' : '' 
          } form-input-label`} 
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default FormInput