import { supabase } from '../supabaseClient'

const Account = ({ session }) => {
  
  return (
    <div id='account' aria-live="polite">
      <div>Email: {session.user.email}</div>
      <button type="button" className="button block" onClick={() => supabase.auth.signOut()}>
        Sign Out
      </button>
    </div>
  )
}

export default Account