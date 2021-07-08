import PropTypes from 'prop-types'

const Button = props => {
    return (
        <button 
            onClick={props.onClick}
            className={`my-button ${props.className}`}>
            {props.title}
        </button>
    )
}

Button.propTypes = {
    className:PropTypes.string,
    title:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
}

Button.defaultPropTypes = {
    title:"Click Me",
    onClick:() => null
}

export default Button
