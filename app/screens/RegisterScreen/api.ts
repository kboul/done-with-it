import client from '../../api/client';

import UserInfo from './model';

const register = (userInfo: UserInfo) => client.post('users', userInfo);

export default { register };
