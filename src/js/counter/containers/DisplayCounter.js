import { connect } from 'react-redux'
import DisplayCounter from '../components/DisplayCounter'

const mapStateToProps = (state, props) => ({
    counterValue: state.counterValue,
    info: state.info
}) 

export default connect(
    mapStateToProps
)(DisplayCounter)