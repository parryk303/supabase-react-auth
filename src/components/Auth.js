import { useState } from 'react'
import { supabase } from '../supabaseClient'

export default function Auth() {
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const { error } = await supabase.auth.signIn({
                provider: 'google',
            })
            if (error) throw error
        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div id='auth' >
            <div id='signin' aria-live="polite">
                <div style={{ display: 'flex', justifyContent: 'center' }}><h1 className="header">Supabase + React</h1></div>
                <div style={{ display: 'flex', justifyContent: 'center' }}><p className="description">Sign in via Google</p></div>
                {loading ? (
                    'Signing In...'
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <form onSubmit={handleLogin}>
                            <button className="button block" aria-live="polite">
                                Signin
                            </button>
                        </form>
                    </div>

                )}
            </div>
        </div>
    )
}