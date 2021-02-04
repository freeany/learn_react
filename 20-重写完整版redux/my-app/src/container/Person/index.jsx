import { connect } from 'react-redux'
import PersonUI from '../../components/PersonUI'
import { addPerson } from '../../redux/actions/person'

const mapStateToProps = state => ({ persons: state.persons, count: state.count })

const mapDispatchToProps = {
  addPerson
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonUI)
