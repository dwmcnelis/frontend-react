import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { loadClients } from '../../../../redux/clients/actions'
import { connect } from 'react-redux'
import ClientItem from '../../components/ClientItem'
import Button from 'material-ui/Button'
import CircularProgress from 'material-ui/Progress/CircularProgress'
import Row from '../../../../components/row'
import Col from '../../../../components/col'
import Helmet from 'react-helmet'
import styles from './styles'
import { UserAuthRedirect } from '../../../Auth'

const redial = {
  fetch: ({ dispatch }) => {
    return dispatch(loadClients())
  }
}

class ClientIndex extends React.Component {

  render () {
    let {
      requesting,
      clients
    } = this.props
    clients = Object.keys(clients).map(id => {
      return clients[id]
    })

    return (
      <div>
        <div>
          <Row key={'toolbar'} style={styles.bar} >
            <Col style={styles.sidebar} >
            Clients
            </Col>
            <Col xs style={styles.bar} >
              <Button raised style={styles.barButton} >Edit</Button>
              <Button raised style={styles.barButton} >Publish</Button>
            </Col>
          </Row>
          <Helmet title='Clients' />
          {requesting &&
            <div>
              <CircularProgress size={48} />
            </div>}
          {!requesting &&
            clients.map(client =>
              <Row className={'yellowy'} key={`row-${client.id}`} >
                <Col className={'cyany'} xs={12} >
                  <ClientItem key={`client-item-${client.id}`} client={client} />
                </Col>
              </Row>
              )}
        </div>
      </div>
    )
  }
}

ClientIndex.PropTypes = {
  state: PropTypes.object.isRequired,
  requesting: PropTypes.bool,
  error: PropTypes.object,
  fetched: PropTypes.number,
  clients: PropTypes.object.isRequired
}

export default UserAuthRedirect(provideHooks(redial)(connect(
  (state) => ({
    state: state,
    requesting: state.clients.requesting,
    error: state.clients.error,
    fetched: state.clients.fetched,
    clients: state.clients.clients
  })
)(ClientIndex)))
