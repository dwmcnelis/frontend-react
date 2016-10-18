import { authState } from './redux/auth/state'
import { clientsState } from './redux/clients/state'
import { originState } from './redux/origin/state'
import { postsState } from './redux/posts/state'
import { postState } from './redux/post/state'

export const initialState = {
  ...authState,
  ...clientsState,
  ...originState,
  ...postsState,
  ...postState
}
