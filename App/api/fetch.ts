import { supabase } from '../../lib/supabase';

export interface OfficeListItem {
   id: number;
   name: string;
   date: {
      from: string;
      to?: string;
   };
   address: string;
   meta: string[];
}

export interface Session {
   token: string;
   user: {
      id: string;
      email: string;
      nick_name: string | null;
      created_at: string;
      email_confirmed_at?: string;
   };
}

export async function fetchOffices() {
   const { data, error } = await supabase.rpc('fetch_offices');

   if (error) throw error;

   const offices: OfficeListItem[] = data.map((row) => ({
      id: row.id,
      name: row.name,
      date: {
         from: 'Today',
      },
      address: row.address,
      meta: [`${row.count} Seats`, `${row.min_price} kr`],
   }));

   return offices;
}

export async function getSession(): Promise<Session> {
   const { data, error } = await supabase.auth.getSession();

   if (error) {
      throw error;
   }

   if (!data.session) throw 'no session';

   const { access_token, user } = data.session;

   const {
      data: profileData,
      error: profileError,
      ...r
   } = await supabase.from('profiles').select().eq('id', user.id);

   if (profileError) throw profileError;

   const [profile] = profileData;

   if (!profile) throw 'no profile';

   return {
      token: access_token,
      user: {
         ...profile,
         id: user.id,
         email: user.email || '',
         email_confirmed_at: user.email_confirmed_at,
      },
   };
}
