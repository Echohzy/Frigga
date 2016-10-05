import User from '../pages/user';

import { connect } from 'react-redux';

var mapStateToProps = function(state){
  return {
    account: state.accountReducer.account
  };
};

export default connect(mapStateToProps)(User);