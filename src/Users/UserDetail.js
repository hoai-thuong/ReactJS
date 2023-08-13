import { useParams } from 'react-router-dom';
import React  from 'react';

function UserDetail(props) {
    //use url parameter

    

    // usePrams
  const { userId } = useParams();
  return (
    <div>
      Chi tiết người dùng có ID: {userId}
    </div>
  );
}


export default UserDetail