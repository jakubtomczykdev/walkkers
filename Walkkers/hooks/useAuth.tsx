import { useEffect, useState } from 'react';
import { supabase as sb } from '../lib/supabase';


export function useAuth() {
const [user, setUser] = useState<any>(null);


useEffect(() => {
let mounted = true;
sb.auth.getUser().then(res => { if (mounted) setUser(res.data.user); });
const { data: listener } = sb.auth.onAuthStateChange((_event, session) => {
if (mounted) setUser(session?.user ?? null);
});
return () => { mounted = false; listener?.subscription?.unsubscribe(); };
}, []);


return { user };
}